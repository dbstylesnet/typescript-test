import React from 'react'
import renderer from 'react-test-renderer'
import { ApolloProvider } from '@apollo/client'
import { client } from '../../../config'
import Game from '../../../pages/Game/index'

it('renders Game page with Apollo server connection without error', () => {
    const wrapper = renderer.create(
        <ApolloProvider client={client}>
            <Game />
        </ApolloProvider>
    )
    expect(wrapper).toMatchSnapshot()
})
