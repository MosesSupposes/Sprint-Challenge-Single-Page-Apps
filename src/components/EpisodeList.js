import React from 'react'

import EpisodeCard from './EpisodeCard'
import usePagination from '../hooks/usePagination'

export default function EpisodeList() {
    const [episodes, incrementPage, decrementPage] = usePagination("https://rickandmortyapi.com/api/episode")

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