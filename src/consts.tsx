import { gql } from '@apollo/client'
import { ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
    uri: 'https://swapi.graph.cool',
    cache: new InMemoryCache(),
})

const GRAPHQL_API = "https://swapi.graph.cool"

const GET_ALL_STARSHIPS = gql`
    query allStarships {
            allStarships {
                id,
                hyperdriveRating,
            }
        }
            
`

export { GRAPHQL_API, GET_ALL_STARSHIPS, client }
