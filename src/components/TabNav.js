import React from "react"
import { Tab } from "semantic-ui-react"
import { NavLink } from "react-router-dom"

import CharacterList from './CharacterList'
import LocationsList from './LocationsList'
import EpisodeList from './EpisodeList'

const panes = [
    { 
        menuItem: 'Characters', 
        render: () =>(
            <NavLink to="/characters">
                <Tab.Pane>
                    <CharacterList />
                </Tab.Pane> 
            </NavLink>
        )
    },
    { 
        menuItem: 'Locations', 
        render: () => (
            <Tab.Pane>
                <NavLink to="/locations">
                    <LocationsList />
                </NavLink>
            </Tab.Pane> 
        )
    },
    { 
        menuItem: 'Episodes', 
        render: () => (
         <Tab.Pane>
             <NavLink to="/episodes">
                <EpisodeList />
             </NavLink>
        </Tab.Pane> 
        )
    }
]

export default function TabNav() {
    return <Tab panes={panes} />
}



