from app import db


class Planet(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String())
    characters = db.relationship('Character', backref='planet', lazy=True)

    def __repr__(self):
        return '<Planet %r>' % self.name


class Character(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String())
    race = db.Column(db.String())
    planet_id = db.Column(db.Integer, db.ForeignKey('planet.id'), nullable=True)

    def __repr__(self):
        return '<Character %r>' % self.name