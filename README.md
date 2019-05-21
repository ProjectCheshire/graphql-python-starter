# GraphQL-Python Starter

## Description

Welcome! The purpose of this repository is to serve as an introduction to GraphQL using Python. This repository began at a Boston Python User Group meeting on May 20, 2019.

We are using Flask as a simple web server.

This example does not yet cover subscriptions, which will be covered at a later date.



## POSTGRES SETUP

# docker compose up will include postgres

# from project directory
$ export APP_SETTINGS="config.DevelopmentConfig"
$ export DATABASE_URL="postgresql://localhost/starwars"

$ python manage.py db init
$ python manage.py db migrate
$ python manage.py db upgrade

