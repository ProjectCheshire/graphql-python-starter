"""
GraphQL-Python Starter
----------------------

app.py: Flask routing module
"""
import os
from flask import Flask

app = Flask(__name__)
app.config["APP_SETTINGS"] = "config.DevelopmentConfig"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
if os.environ.get("SQLALCHEMY_DATABASE_URI"):
    db_uri = os.environ.get("SQLALCHEMY_DATABASE_URI")
elif os.environ.get("DATABASE_URL"):
    db_uri = os.environ.get("DATABASE_URL")
    app.config["SQLALCHEMY_DATABASE_URI"] = db_uri
else:
    db_uri = "postgresql://localhost/starwars"
    app.config["SQLALCHEMY_DATABASE_URI"] = db_uri


@app.route("/", methods=["GET"])
def hello():
    return "Hello, GraphQL and Python!!!"


if __name__ == "__main__":
    app.run()
