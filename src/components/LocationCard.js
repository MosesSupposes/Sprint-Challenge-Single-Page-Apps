import React from "react"
import { Card } from 'semantic-ui-react'

export default function LocationCard(props) {
  const { name, type, dimension } = props.location
  return (
    <Card>
      <Card.Header>{name}</Card.Header>
      <Card.Meta><span>Type: {type}</span></Card.Meta>
      <Card.Meta><span>Dimension: {dimension}</span></Card.Meta>
    </Card>
  )
}
