import React from "react"
import { Tab, Menu, Icon } from "semantic-ui-react"
import { NavLink } from "react-router-dom"

import CharacterList from './CharacterList'

// TODO: Add missing tabs below
// Take a look at React Semantic UI tabs 
// https://react.semantic-ui.com/modules/tab/

const panes = [
    { menuItem: 'Characters', render: () => <Tab.Pane><CharacterList /></Tab.Pane> },
    { menuItem: 'Locations', render: () => <Tab.Pane>Locations</Tab.Pane> },
    { menuItem: 'Episodes', render: () => <Tab.Pane>Episodes</Tab.Pane> }
]

export default function TabNav() {
    return <Tab panes={panes} />
}

