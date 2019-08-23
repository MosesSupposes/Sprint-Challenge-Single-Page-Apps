import React, { useEffect, useState } from "react";
import axios from 'axios'

import LocationCard from './LocationCard'

export default function LocationsList(props) {
    const [locations, setLocations] = useState()
    
    useEffect(() => {
        axios
            .get('https://rickandmortyapi.com/api/location')
            .then(res => {
                setLocations(res.data)
            })
    }, [])
    
    return (
        <div className="locations">
            {(!locations)
                ? 'Loading Location data...'    
                : locations.results.map(function renderLocationCard(location) {
                    return <LocationCard key={location.id} location={location} />
                })
            }
        </div>   
    )
}
