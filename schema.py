import graphene
from graphene import relay
from graphene_sqlalchemy import SQLAlchemyConnectionField, SQLAlchemyObjectType
from models import Hero as HeroModel
from models import Faction as FactionModel
from models import Planet as PlanetModel


class Hero(SQLAlchemyObjectType):
    class Meta:
        model = HeroModel
        only_fields = ("name", "race")
        interfaces = (relay.Node,)


class Faction(SQLAlchemyObjectType):
    class Meta:
        model = FactionModel
        interfaces = (relay.Node,)


class Planet(SQLAlchemyObjectType):
    class Meta:
        model = PlanetModel
        interfaces = (relay.Node,)


class Query(graphene.ObjectType):
    # node = relay.Node.Field()
    heroes = graphene.List(Hero)

    def resolve_heroes(self, info):
        query = Hero.get_query(info)
        return query.all()
    # all_heroes = SQLAlchemyConnectionField( Hero )
    all_factions = SQLAlchemyConnectionField(Faction)
    # all_planets = SQLAlchemyConnectionField( Planet )
schema = graphene.Schema(query=Query)


# schema = graphene.Schema(query=Query, types=[Hero, Faction, Planet])
