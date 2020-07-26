import { gql } from '@apollo/client'
import { ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
    uri: 'https://swapi.graph.cool',
    cache: new InMemoryCache(),
})

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

export { GET_STARSHIPS_AND_PEOPLE, client }
