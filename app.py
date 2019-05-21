"""
GraphQL-Python Starter
----------------------

app.py: Flask routing module
"""
from flask import Flask

app = Flask(__name__)


@app.route("/", methods=["GET"])
def hello():
    return "Hello, GraphQL and Python!!!"


if __name__ == "__main__":
    app.run()
