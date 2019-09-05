import React from "react"

import CharacterCard from './CharacterCard'
import usePagination from '../hooks/usePagination'

export default function CharacterList() {
  const [characters, incrementPage, decrementPage] = usePagination("https://rickandmortyapi.com/api/character")

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



