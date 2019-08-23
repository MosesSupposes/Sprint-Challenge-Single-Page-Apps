import React, { useEffect, useState } from "react"
import axios from 'axios'

import CharacterCard from './CharacterCard'

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [page, setPage] = useState(1)
  const [characters, setCharacters] = useState()

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get(`https://rickandmortyapi.com/api/character/?page=${page}`)
      .then(res => {
        setCharacters(res.data)
      })
  }, [page])

  const incrementPage = () => {
    if (page < characters.info.pages) {
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
    <section className="character-list grid-view">
      {(!characters)
        ? 'Loading Character Data...'
        : characters.results.map(function renderCharacterCards(char) {
          return <CharacterCard key={char.id} character={char} />
        })
      }
    </section>

    <div className="pagination-buttons-container">
      <button className="pagination-button" onClick={decrementPage}>⬅️</button>
      <button className="pagination-button" onClick={incrementPage}>➡️</button>
    </div>
    </>
  )
}



