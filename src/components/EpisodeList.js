import React, { useState, useEffect } from 'react'
import axios from 'axios'

import EpisodeCard from './EpisodeCard'

export default function EpisodeList() {
    const [episodes, setEpisodes] = useState()

    useEffect(() => {
        axios
            .get('https://rickandmortyapi.com/api/episode/')
            .then(res => {
                setEpisodes(res.data)
            })
    }, [])

    return (
        <div className="episode-list">
            {(!episodes)
                ? 'Loading Episode Data...'
                : episodes.results.map(renderEpisodes)
            }
        </div>
    )
}

function renderEpisodes(episode) {
    return <EpisodeCard key={episode.id} episode={episode} />
}