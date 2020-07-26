import React from "react"
import renderer from "react-test-renderer"
import { MockedProvider } from "@apollo/client/testing"
import { GET_STARSHIPS_AND_PEOPLE } from "../../../config"
import Game from "../../../pages/Game"
import wait from "waait"

const mocks = [
    {
        request: {
            query: GET_STARSHIPS_AND_PEOPLE,
        },
        result: {
            data: {
                allStarships: [
                    {
                        id: "cj0nwtqoyq4tp0114jjljap6j",
                        name: "Sentinel-class landing craft",
                        hyperdriveRating: 1,
                    },
                    {
                        id: "cj0nwtqphq4tr0114zo7suw8h",
                        name: "Death Star",
                        hyperdriveRating: 4,
                    },
                    {
                        id: "cj0nwtqpzq4tt01142nh7e9i4",
                        name: "Millennium Falcon",
                        hyperdriveRating: 0.5,
                    },
                ],
                allPersons: [
                    {
                        id: "cj0nv9p8yewci0130wjy4o5fa",
                        name: "Luke Skywalker",
                        height: 172,
                    },
                    {
                        id: "cj0nv9p9gewck0130h8f8esy0",
                        name: "C-3PO",
                        height: 167,
                    },
                    {
                        id: "cj0nv9p9wewcm01302r07xzna",
                        name: "R2-D2",
                        height: 96,
                    },
                ],
            },
        },
    },
]

it("should render loading state initially", () => {
    const game = renderer.create(
        <MockedProvider mocks={mocks}>
            <Game />
        </MockedProvider>
    )

    expect(game).toMatchSnapshot();
    expect(game).toMatchInlineSnapshot(`
    <p>
      Loading
    </p>
  `)
})

it("should render Game page without error using provided mocks", () => {
    renderer.create(
        <MockedProvider mocks={mocks} addTypename={false}>
            <Game />
        </MockedProvider>
    )
})


it('should render game', async () => {
    const game = renderer.create(
        <MockedProvider mocks={mocks} addTypename={false}>
            <Game />
        </MockedProvider>,
    )
})

