# GraphQL-Python Starter

[Boston Python User Group](https://www.meetup.com/bostonpython/) collaborative project

## Table of Contents <!-- omit in toc -->

- [Description](#description)
- [Getting started](#getting-started)
  - [Install and run locally](#install-and-run-locally)
  - [Client Code](#client-code)
  - [Install and run with Docker Compose](#install-and-run-with-docker-compose)
- [Further details and guidelines for contributing](#further-details-and-guidelines-for-contributing)
- [Code of conduct](#code-of-conduct)

## Description

- **Welcome!** The purpose of this repository is to serve as an introduction to GraphQL using Python.
- This repository began at a Boston Python User Group meeting on May 20, 2019.
- We are using Flask as a simple web server.
- The GraphQL features are implemented using [Graphene Python](https://graphene-python.org/).
- This example does not yet cover subscriptions, which will be covered at a later date.

## Getting started

### Install and run locally

#### Install dependencies

From the command line:

```sh
brew install git node python pipenv postgresql
```

#### Clone or fork repository

```sh
cd path/where/you/want/the/repo
git clone git@github.com:ProjectCheshire/graphql-python-starter.git
```

#### Install virtual environment

In repository directory:

```sh
pipenv install --dev
```

#### Install pre-commit hooks

```sh
pipenv shell
graphql-python-starter-hash ❯ pre-commit install
```

#### Set up database

These steps are based on a [tutorial](https://medium.com/@dushan14/create-a-web-application-with-python-flask-postgresql-and-deploy-on-heroku-243d548335cc).

##### Specify Flask environment variables

```sh
graphql-python-starter-hash ❯ export APP_SETTINGS="config.DevelopmentConfig"
graphql-python-starter-hash ❯ export DATABASE_URL="postgresql://localhost/starwars"
```

##### Initialize database

```sh
graphql-python-starter-hash ❯ python manage.py db init
```

If you receive `Error: Directory migrations already exists`, delete the `migrations/` directory and re-run `python manage.py db init`.

##### Create PSQL tables

```sh
graphql-python-starter-hash ❯ psql
```

```
# psql (version)
# Type "help" for help.
user=$ CREATE DATABASE starwars;
CREATE DATABASE
user=$ \q
```

##### Migrate database

```sh
graphql-python-starter-hash ❯ python manage.py db migrate
graphql-python-starter-hash ❯ python manage.py db upgrade
```

These commands generate files in `/migrations/versions`. Run these commands whenever you update the model classes.

If you run into errors, do this before migrating:

- Delete the files inside `/migrations/versions`, but don't delete the `/versions` directory itself.
- Then run:

  ```sh
  graphql-python-starter-hash ❯ psql
  ```

  ```
  psql (version)
  Type "help" for help.
  user=$ DROP DATABASE starwars;
  DROP DATABASE
  user=$ CREATE DATABASE starwars;
  CREATE DATABASE
  user=$ \q
  ```

##### Seed the database with starter data

```sh
graphql-python-starter-hash ❯ python seed_db.py
```

##### Verify database creation

```
graphql-python-starter-hash ❯ psql -d starwars
# psql (version)
# Type "help" for help.

starwars=$ \dt
               List of relations
 Schema |      Name       | Type  |    Owner
--------+-----------------+-------+-------------
 public | alembic_version | table | user
 public | factions        | table | user
 public | heroes          | table | user
 public | memberships     | table | user
 public | planets         | table | user
(5 rows)

starwars=# \q
```

### Client Code

Make sure you have Node downloaded

Command-line instructions

```sh
cd client
# Install all dependencies
npm i
# Create and run js bundle
npm run start
```

### Install and run with Docker Compose

_Coming soon!_

## Further details and guidelines for contributing

See the [contributing guidelines](CONTRIBUTING.md) for more detailed instructions.

## Code of conduct

Please abide by the guidelines in the [Code of Conduct](CODE_OF_CONDUCT.md).
