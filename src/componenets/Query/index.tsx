import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client'
import {  GET_ALL_STARSHIPS } from '../../consts'

interface StarShipProps {
    id: string,
    hyperdriveRating: number,
}

const Query = () => {

    const { loading, error, data } = useQuery(GET_ALL_STARSHIPS)

    if (loading) return <p>Loading</p>
    if (error) return <p>Error</p>


    return data.allStarships.map( (starship: StarShipProps) => (
        <div key="id">{starship.id}: {starship.hyperdriveRating}</div>
    ))
}

export default Query
