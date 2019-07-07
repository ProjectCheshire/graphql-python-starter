import gql from "graphql-tag";

export const GET_FACTION = gql`
    query Faction($name: String!) {
        factionName(name:$name){
            memberships{
                edges{
                    node{
                        name
                    }
                }
            }
        }
    }
`