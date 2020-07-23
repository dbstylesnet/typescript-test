import { gql } from '@apollo/client'
import { ApolloClient, InMemoryCache } from '@apollo/client'

const CLIENT = new ApolloClient({
    uri: 'https://swapi.graph.cool',
    cache: new InMemoryCache(),
})

const GRAPHQL_API = "https://swapi.graph.cool"

const GET_STARSHIPS_AND_PEOPLE = gql`
    query starshipsPoeple {
        allStarships {
            id,
            name,
            hyperdriveRating,
        }
        allPersons {
            id,
            name,
            height,
        }        
    }
        
`

export { GRAPHQL_API, GET_STARSHIPS_AND_PEOPLE, CLIENT }
