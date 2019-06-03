"""
GraphQL Python starter
----------------------
Database population script
"""
import os
from flask import Flask
from models import db, Faction, Hero, Planet

print("===================================")
print("\nStarting migration script...")

app = Flask(__name__)
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
if os.environ.get("SQLALCHEMY_DATABASE_URI"):
    db_uri = os.environ.get("SQLALCHEMY_DATABASE_URI")
elif os.environ.get("DATABASE_URL"):
    db_uri = os.environ.get("DATABASE_URL")
    app.config["SQLALCHEMY_DATABASE_URI"] = db_uri
else:
    db_uri = "postgresql://localhost/starwars"
    app.config["SQLALCHEMY_DATABASE_URI"] = db_uri

db.init_app(app)
app.app_context().push()
db.drop_all()
db.create_all()

print("\nCreating model entities with foreign keys...\n")

f1 = Faction(name="Light Side")
f2 = Faction(name="Dark Side")

p1 = Planet(name="Tatooine")
p2 = Planet(name="Naboo")
p3 = Planet(name="Moraband")

h1 = Hero(name="Luke Skywalker", race="human", planet_id=1)
h2 = Hero(name="Obi-Wan Kenobi", race="human", planet_id=1)
h3 = Hero(name="Sheev Palpatine", race="human", planet_id=2)
h4 = Hero(name="Darth Bane", race="human", planet_id=3)

new_entities = (f1, f2, p1, p2, p3, h1, h2, h3, h4)
create_records = [(db.session.add(i)) for i in new_entities]
try:
    create_records
    db.session.commit()
    print(f"\N{check mark} -- Database records successfully created")
except Exception as e:
    print(f"An error occurred:\n{e}\nPlease try again.")

print("\n\nCreating faction memberships...\n")

f1.memberships.append(h1)
f1.memberships.append(h2)
f2.memberships.append(h3)
f2.memberships.append(h4)

db.session.commit()

heroes = Hero.query.all()
for h in heroes:
    faction_names = []
    for f in h.memberships:
        faction_names.append(f.name)
    print(
        f"\N{check mark} -- {h.name} -- {h.planets.name} -- "
        + ", ".join(faction_names)
    )

print("\nDONE.")
print("\n===================================")