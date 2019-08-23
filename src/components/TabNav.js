import React from "react"
import { Tab, Menu, Icon } from "semantic-ui-react"
import { NavLink } from "react-router-dom"

import CharacterList from './CharacterList'
import LocationsList from './LocationsList'
import EpisodeList from './EpisodeList'

// TODO: Add missing tabs below
// Take a look at React Semantic UI tabs 
// https://react.semantic-ui.com/modules/tab/

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



