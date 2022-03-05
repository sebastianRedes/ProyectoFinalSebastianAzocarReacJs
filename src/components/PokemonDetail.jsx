import React from 'react';
import Card from "react-bootstrap/Card";
import Badge from 'react-bootstrap/Badge'
const PokemonDetail = (props) => {

  const { poke } = props;
 const { sprites, name, base_experience,abilities, weight, moves } = poke;

console.log("props",props);
  return (
<div>
  <h2>{name}</h2>
</div>
    
  )
}

export default PokemonDetail;