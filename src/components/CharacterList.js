import React, { useEffect, useState } from "react"
import axios from 'axios'

import CharacterCard from './CharacterCard'

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState()

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get('https://rickandmortyapi.com/api/character/')
      .then(res => {
        setCharacters(res.data)
      })
  }, [])

  return (
    <section className="character-list grid-view">
      {(!characters)
        ? 'Loading Character Data...'
        : characters.results.map(function renderCharacterCards(char) {
          return <CharacterCard key={char.id} character={char} />
        })
      }
      
    </section>
  )
}



