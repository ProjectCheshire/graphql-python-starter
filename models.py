"""
GraphQL Python starter
----------------------

PostgreSQL database models

Relationships
===================================================
{1} Planet <--has-- {Many} Heroes.
{Many} Factions <--have-- {Many} memberships <--have-- {Many} Heroes.

Many-to-Many: https://www.youtube.com/watch?v=OvhoYbjtiKc
"""
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import create_engine
from sqlalchemy_utils import database_exists, create_database
from typing import Any

db = SQLAlchemy()  # type: Any
engine = create_engine("postgresql://localhost/starwars")
if not database_exists(engine.url):
    create_database(engine.url)

memberships = db.Table(
    "memberships",
    db.Column("hero_id", db.Integer, db.ForeignKey("heroes.id")),
    db.Column("faction_id", db.Integer, db.ForeignKey("factions.id")),
)


class Planet(db.Model):
    __tablename__ = "planets"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String())

    heroes = db.relationship("Hero", backref="planets", lazy=True)

    def __repr__(self):
        return f"<Planet {self.name}>"


class Hero(db.Model):
    __tablename__ = "heroes"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String())
    race = db.Column(db.String())

    planet_id = db.Column(
        db.Integer, db.ForeignKey("planets.id"), nullable=True
    )
    memberships = db.relationship(
        "Faction",
        secondary=memberships,
        backref=db.backref("memberships", lazy="dynamic"),
    )

    def __repr__(self):
        return f"<Hero {self.name}>"


class Faction(db.Model):
    __tablename__ = "factions"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String())

    def __repr__(self):
        return f"<Faction {self.name}>"
