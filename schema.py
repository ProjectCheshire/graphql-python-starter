import graphene
from graphene import relay
from graphene_sqlalchemy import SQLAlchemyConnectionField, SQLAlchemyObjectType
from models import Hero as HeroModel
from models import Faction as FactionModel 
from models import Planet as PlanetModel

class Hero(SQLAlchemyObjectType):
    class Meta:
        model = HeroModel
        interfaces = (relay.Node, )

class Faction(SQLAlchemyObjectType):
    class Meta:
        model = FactionModel
        interfaces = (relay.Node, )

class Planet(SQLAlchemyObjectType):
    class Meta:
        model = PlanetModel
        interfaces = (relay.Node, )

class Query(graphene.ObjectType):
    node = relay.Node.Field()
    all_heroes = SQLAlchemyConnectionField( Hero, sort=Hero.sort_argument())
    all_factions = SQLAlchemyConnectionField( Faction )
    all_planets = SQLAlchemyConnectionField( Planet )

schema = graphene.Schema(query=Query, types=[Hero, Faction, Planet])
