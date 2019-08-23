import React from "react"
import { Route } from 'react-router-dom'

import TabNav from "./components/TabNav.js"
import Header from "./components/Header.js"


export default function App() {
  return (
    <main>
      <Header />
      <TabNav />

      <Route path="/characters" />
      <Route path="/locations" />
      <Route path="/episodes" />
    </main>
  )
}
