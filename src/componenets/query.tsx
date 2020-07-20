import React, { useState, useEffect, Fragment } from 'react'

interface Props {
    tamcos?: boolean
}

function Query(props: Props) {
    const [starships, setStarships] = useState({})
    const { tamcos } = props


    // useEffect(() => {
        // fetch('https://swapi.graph.cool', {
        //     method: 'POST',
        //     headers: { "Content-Type": "application/json" },
        //     body: JSON.stringify({
        //         query: `
        //             query Starships {
        //                 allStarships {
        //                     id,
        //                     hyperdriveRating,
        //                 }
        //             }
        //         `
        //     })
        // })
        // .then(res => res.json())
        // .then(data => setStarships(data.data))
        // .then(data => console.log(data.data))


    // })
    
    return (
        
        <Fragment>


        </Fragment>
    )
}

export default Query
