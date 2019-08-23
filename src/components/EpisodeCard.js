import React from 'react'
import { Card } from 'semantic-ui-react'

export default function EpisodeCard(props) {
    const { episode, air_date, name } = props.episode

    return (
        <Card>
            <Card.Header>{episode}: {name}</Card.Header>
            <Card.Meta>Aired: {air_date}</Card.Meta>
        </Card>
    )
}