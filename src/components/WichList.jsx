import React, { useState } from "react";
import { setWishList, deleteWishList } from "../actions";
import { connect } from "react-redux";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";

const WichList = props => {
  const [wichlist, setWichList] = useState(false);

  const { poke, wichlistPokemons, deleteWishList } = props;
  const {
    id,
    sprites,
    name,
    base_experience,
    abilities,
    weight,
    moves,
    stats
  } = poke;

  console.log("props", props);
  console.log("pokewich", poke);

  const handleDeleteWichList = id => {
    deleteWishList(poke.id);

    setWichList(false);
  };


  return(
    <Card className="pokemon" style={{ width: "18rem" }}>
      <Card.Img
        className="pokemon_img"
        variant="right"
        src={sprites.other.dream_world.front_default}
      />
      <Card.Body>
        <Card.Title className="pokemon_title">
          {name}
        </Card.Title>
        <Card.Text>
          Base experience: {base_experience}
        </Card.Text>
        <Card.Text>
          HP: {stats[0].base_stat} <br />
          Attack: {stats[1].base_stat} <br />
          Defense:{stats[2].base_stat} <br />
          Special Attack: {stats[3].base_stat} <br />
          Weigth: {weight}gr<br />
        </Card.Text>
        <Badge bg="primary">
          Moves 1: {moves[0].move.name}
          <br />
        </Badge>
        <Badge bg="warning">
          Moves 2: {moves[1].move.name}
          <br />
        </Badge>
        <Badge bg="success">
          Moves 3: {moves[2].move.name}
          <br />
        </Badge>
        <Badge bg="danger">
          Moves 4: {moves[3].move.name}
          <br />
        </Badge>

        
      </Card.Body>
      <Button
        size="sm"
        className="btn mt-3 center"
        variant="primary"
        onClick={() => handleDeleteWichList(id)}
      >
        Eliminar
      </Button>

    </Card>
  

  );
};
const mapStateToProps = state => {
  return {
    wichlistPokemons: state.wichlistPokemons
  };
};

const mapDispactchProps = {
  setWishList,
  deleteWishList
};

export default connect(mapStateToProps, mapDispactchProps)(WichList);
