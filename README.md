# GraphQL-Python Starter

## Description

- Welcome! The purpose of this repository is to serve as an introduction to GraphQL using Python. This repository began at a Boston Python User Group meeting on May 20, 2019.
- We are using Flask as a simple web server.
- This example does not yet cover subscriptions, which will be covered at a later date.


### Docker-Compose


## Backend

```
FLASK-SQLAlchemy with PostgreSQL

"""
    This section describes manual bash install from project 
    root directory. Alternatively pull and compose from docker. 

    Unless you are customizing this tutorial for your own app, 
    skip this section because `docker compose up` will include 
    the postgres install, migrate, and seed as part of the dockerfile 
    commands.
"""

HOMEBREW:
=====================================================
$ brew install postgresql
$ brew install pipenv


APP DEPENDENCIES:
=====================================================
# Installs all python packages from pipfile.lock
$ pipenv install


DATABASE SETUP:
=============================================

    Flask Settings:
    ====================
    $ export APP_SETTINGS="config.DevelopmentConfig"
    $ export DATABASE_URL="postgresql://localhost/starwars"
    $ python manage.py db init


    Create PSQL Tables:
    ====================
    $ psql
    CREATE DATABASE starwars;


    Flask Migration:
    =======================
    # generates files in `/migrations/versions`
    $ python manage.py db migrate
    $ python manage.py db upgrade

    """
        Whenever you update the model classes, run:
        $ python manage.py db migrate
        $ python manage,py upgrade


        If you run into errors, do this before migrating:
        delete the files inside /migrations/versions,
        but don't delete the /versions dir itself. And then run:
            
        $ psql
        DROP DATABASE starwars;
        CREATE DATABASE starwars;
    """


    Seed the Database:
    ====================
    $ python seed_db.py

```


## Client Code

Make sure you have Node downloaded

Command-line instructions
```
cd client
#Install all dependencies
npm i 
#Create and run js bundle
npm run start
```


