"""
GraphQL Python starter
----------------------

Database migration and management with flask_migrate
https://flask-migrate.readthedocs.io/en/latest/
"""
from flask_script import Manager
from flask_migrate import Migrate, MigrateCommand
from api.app import app
from api.models import db

migrate = Migrate(app, db)
manager = Manager(app)

manager.add_command("db", MigrateCommand)


if __name__ == "__main__":
    manager.run()
