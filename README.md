# GraphQL-Python Starter

## Description

- Welcome! The purpose of this repository is to serve as an introduction to GraphQL using Python. This repository began at a Boston Python User Group meeting on May 20, 2019.
- We are using Flask as a simple web server.
- This example does not yet cover subscriptions, which will be covered at a later date.

## Development environments

### Pipenv

### Docker-Compose

## Postgres setup

Command-line instructions

```
# docker compose up will include postgres

# db setup.
$ export APP_SETTINGS="config.DevelopmentConfig"
$ export DATABASE_URL="postgresql://localhost/starwars"

$ python manage.py db init
$ python manage.py db migrate
$ python manage.py db upgrade


# seed the db.
$ python
>>> from app import *
>>> db.create_all()

>>> p = Planet(name='Tatooine')
>>> db.session.add(p)
>>> db.session.commit()

>>> c1 = Character(name='Luke Skywalker', race='human', planet_id=1)
>>> c2 = Character(name='Obi-Wan Kenobi', race='human', planet_id=1)
>>> db.session.add(c1)
>>> db.session.add(c2)
>>> db.session.commit()

# test the db relations.
>>> Character.query.filter_by(name='Luke Skywalker').first().planet
# <Planet 'Tatooine'>
>>> Planet.query.filter_by(name='Tatooine').first().characters
# [<Character 'Luke Skywalker'>, <Character 'Obi-Wan Kenobi'>]
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


