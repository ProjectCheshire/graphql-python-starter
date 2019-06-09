"""
GraphQL-Python Starter
----------------------

app.py: Flask routing module
"""
import os
from flask import Flask
from flask_cors import CORS
from flask_graphql import GraphQLView
from models import db
from schema import schema

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


app.add_url_rule(
    "/graphql",
    view_func=GraphQLView.as_view("graphql", schema=schema, graphiql=True),
)


CORS(app)

db.init_app(app)


@app.route("/", methods=["GET"])
def hello():
    return "Hello, GraphQL and Python!!!"


if __name__ == "__main__":
    app.run()
