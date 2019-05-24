from app import db
from flask_sqlalchemy import SQLAlchemy

"""
    Relationships
    ===================================================
    {1} Planet <--has-- {Many} Heroes.
    {Many} Factions <--have-- {Many} memberships <--have-- {Many} Heroes.
"""

# Many-to-Many: https://www.youtube.com/watch?v=OvhoYbjtiKc
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
        return "<Planet %r>" % self.name


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
        return "<Hero %r>" % self.name


class Faction(db.Model):
    __tablename__ = "factions"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String())

    def __repr__(self):
        return "<Faction %r>" % self.name
