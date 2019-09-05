import React from "react"
import { Card, Image } from 'semantic-ui-react'


export default function CharacterCard(props) {
  const { image, name, status, species, location} = props.character
  
  return (
    <Card>
      <Image src={image} />
      <Card.Header>{name}</Card.Header>
      <Card.Meta><span>Status: {status}</span></Card.Meta>
      <Card.Meta><span>Species: {species}</span></Card.Meta>
      <Card.Meta><span>Location: {location.name}</span></Card.Meta>
    </Card>
  )
}
