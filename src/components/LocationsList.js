import React from "react";

import LocationCard from './LocationCard'
import usePagination from "../hooks/usePagination";

export default function LocationsList() {
    const [locations, incrementPage, decrementPage] = usePagination("https://rickandmortyapi.com/api/location")
    
    return (
        <>
        <div className="locations">
            {(!locations)
                ? 'Loading Location data...'    
                : locations.results.map(function renderLocationCard(location) {
                    return <LocationCard key={location.id} location={location} />
                })
            }
        </div>   

        <div className="pagination-buttons-container">
            <button className="pagination-button" onClick={decrementPage}>⬅️</button>
            <button className="pagination-button" onClick={incrementPage}>➡️</button>
        </div>
        </>
    )
}
