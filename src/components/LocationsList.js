import React, { useEffect, useState } from "react";
import axios from 'axios'

import LocationCard from './LocationCard'

export default function LocationsList(props) {
    const [page, setPage] = useState(1)
    const [locations, setLocations] = useState()
    
    const incrementPage = () => {
        if (page < locations.info.pages) {
          setPage(page + 1)
        }
      }
    
      const decrementPage = () => {
        if (page > 1) {
          setPage(page - 1)
        }
      }
    useEffect(() => {
        axios
            .get(`https://rickandmortyapi.com/api/location/?page=${page}`)
            .then(res => {
                setLocations(res.data)
            })
    }, [page])
    
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
