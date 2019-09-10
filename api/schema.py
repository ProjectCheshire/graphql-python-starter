import graphene
from graphene import relay
from graphene_sqlalchemy import SQLAlchemyObjectType
from api.models import Hero as HeroModel
from api.models import Faction as FactionModel
from api.models import Planet as PlanetModel


class Hero(SQLAlchemyObjectType):
    class Meta:
        model = HeroModel
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
    # Get Method :: Return an instance based on the given primary key identifier, or None if not found.
    # 
    heroes = graphene.List(Hero)
    factions = graphene.List(Faction)
    hero = graphene.Field(Hero, id=graphene.String())
    hero_name = graphene.Field(heroes, name=graphene.String())
    faction_name = graphene.Field(factions, name=graphene.String())
    find_race = graphene.Field(Hero, race=graphene.String() )


    def resolve_heroes(self, info):
        query = Hero.get_query(info)
        return query.all()

    def resolve_planets(self, info):
        query = Hero.get_query(info)
        return query.all()

    def resolve_hero(self, info,id):
        query = Hero.get_query(info)
        return query.get(id)

    def resolve_hero_name(self, info, name):
        query = Hero.get_query(info)
        return query.filter_by(name=name)

    def resolve_faction_name(self, info, name):
        query = Faction.get_query(info)
        return query.filter_by(name=name)


schema = graphene.Schema(query=Query)
