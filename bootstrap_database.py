import os
import sys
import psycopg2
import subprocess
import shutil

os.environ["APP_SETTINGS"] = "config.DevelopmentConfig"
os.environ["DATABASE_URL"] = "postgresql://localhost/starwars"


if __name__ == "__main__":
    # Step 1:  install pre-commit hooks and env
    pre_install_hook_cmd = subprocess.Popen(
        ["pre-commit", "install"],
        stdout=subprocess.PIPE,
        stderr=subprocess.STDOUT,
    )

    stdout, stderr = pre_install_hook_cmd.communicate()
    if stderr:
        sys.exit(1)
    # Step 2:  pre clean migrations before manage.py db init
    if os.path.exists("./migrations/"):
        print("Dir exists ")
        shutil.rmtree("./migrations/")
    else:
        print("There is no dir, good to go! 🚗")

    # Step 3: now Manage.py db init, initialize migration folder

    python_manage_db_init_cmd = subprocess.Popen(
        ["python", "manage.py", "db", "init"],
        stdout=subprocess.PIPE,
        stderr=subprocess.STDOUT,
    )

    stdout, stderr = python_manage_db_init_cmd.communicate()

    print(" out {}".format(stdout))
    print(" err {}".format(stderr))

    if stderr:
        sys.exit(1)

    # STEP 4:  Does Star Wars database exist if so dont do anything
    # If it does exist, does it have connections?
    # If so reap each pid associated with query

    # connection = None
    database_exists = False

    try:
        connection = psycopg2.connect(
            host="127.0.0.1", port=5432, database="starwars"
        )

    except (Exception, psycopg2.Error) as error:
        if 'database "starwars" does not exist' in ("{}".format(error)):
            print("IDEAL ERROR MESSAGE")
        else:
            print("Strange here")
    else:
        database_exists = True
        if connection:
            connection.close()
        print("Postgres connection closed")

    if database_exists:
        try:
            connection = psycopg2.connect(
                host="127.0.0.1", port=5432, database="postgres"
            )
            connection.set_isolation_level(0)
            cursor = connection.cursor()
            cursor.execute("""DROP DATABASE starwars""")
            cursor.execute("""create DATABASE starwars""")

        except (Exception, psycopg2.Error) as error:
            print(
                "Error in dropping and creating new database {}".format(error)
            )
        finally:
            if connection:
                cursor.close()
                connection.close()
                print("Postgres connection closed msg 2")
    else:
        try:
            connection = psycopg2.connect(
                host="127.0.0.1", port=5432, database="postgres"
            )
            connection.set_isolation_level(0)
            cursor = connection.cursor()
            cursor.execute("""create DATABASE starwars""")
        except (Exception, psycopg2.Error) as error:
            print("Error in creating new database  {}".format(error))
        finally:
            if connection:
                cursor.close()
                connection.close()
                print("Postgres connection closed msg 3")

    # STEP 6 Upgrade Manager
    python_manage_db_init_cmd = subprocess.Popen(
        ["python", "manage.py", "db", "upgrade"],
        stdout=subprocess.PIPE,
        stderr=subprocess.STDOUT,
    )

    stdout, stderr = python_manage_db_init_cmd.communicate()

    if stderr:
        sys.exit(1)

    # STEP 7 Migrate Manager
    python_manage_db_init_cmd = subprocess.Popen(
        ["python", "manage.py", "db", "migrate"],
        stdout=subprocess.PIPE,
        stderr=subprocess.STDOUT,
    )

    stdout, stderr = python_manage_db_init_cmd.communicate()

    if stderr:
        sys.exit(1)

    # STEP 8 seed db
    python_manage_db_init_cmd = subprocess.Popen(
        ["python", "seed_db.py"],
        stdout=subprocess.PIPE,
        stderr=subprocess.STDOUT,
    )

    stdout, stderr = python_manage_db_init_cmd.communicate()

    print(" out {}".format(stdout))
    print(" err {}".format(stderr))

    if stderr:
        sys.exit(1)
