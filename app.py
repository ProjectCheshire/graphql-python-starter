"""
GraphQL-Python Starter
----------------------

app.py: Flask routing module
"""
import os
from flask import Flask

app = Flask(__name__)
app.config.from_object(os.environ["APP_SETTINGS"])
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
app.config["SQLALCHEMY_DATABASE_URI"] = "postgresql://localhost/starwars"


@app.route("/", methods=["GET"])
def hello():
    return "Hello, GraphQL and Python!!!"


if __name__ == "__main__":
    app.run()
