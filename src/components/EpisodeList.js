import React, { useState, useEffect } from 'react'
import axios from 'axios'

import EpisodeCard from './EpisodeCard'

export default function EpisodeList() {
    const [page, setPage] = useState(1)
    const [episodes, setEpisodes] = useState()

    useEffect(() => {
        axios
            .get(`https://rickandmortyapi.com/api/episode/?page=${page}`)
            .then(res => {
                setEpisodes(res.data)
            })
    }, [page])

    const incrementPage = () => {
        if (page < episodes.info.pages) {
          setPage(page + 1)
        }
      }
    
    const decrementPage = () => {
        if (page > 1) {
          setPage(page - 1)
        }
    }

    return (
        <>
        <div className="episode-list">
            {(!episodes)
                ? 'Loading Episode Data...'
                : episodes.results.map(renderEpisodes)
            }
        </div>

        <div className="pagination-buttons-container">
            <button className="pagination-button" onClick={decrementPage}>⬅️</button>
            <button className="pagination-button" onClick={incrementPage}>➡️</button>
        </div>
        </>
    )
}

function renderEpisodes(episode) {
    return <EpisodeCard key={episode.id} episode={episode} />
}