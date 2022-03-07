import React, { useState } from "react";
import { connect } from "react-redux";
import propTypes from "prop-types";
import { setWishList, deleteWishList } from "../actions";
import PokemonDetail from "../components/PokemonDetail";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import { useEffect } from "react";
import "../assets/style/Pokemon.scss";
import Modal from 'react-bootstrap/Modal';
import Toast from 'react-bootstrap/Toast'





const Pokemon = props => {
  const [modal, setModal] = useState(false);
  const [wichlist, setWichList] = useState(false);
  const [showA, setShowA] = useState(true);
  const [showB, setShowB] = useState(true);
  const [show, setShow] = useState(false);


  const toggleShowA = () => setShowA(!showA);
  const toggleShowB = () => setShowB(!showB);
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

  const handleCloseModal = () => {
    setModal(false);
  };

  const handleOpenModal = () => {
    setModal(true);
  };
  const handleSetWichList = () => {
    props.setWishList({ poke });
    setWishList(true);
  };

  const isFavorite = () => {
    const result = wichlistPokemons.filter(
      wichlistPokemon => wichlistPokemon.id === id
    );
    if (result.length) {
      setWichList(true);
    }
  };

  const handleDeleteWichList = id => {
    deleteWishList(poke.id);

    setWichList(false);
  };

  const repeat = () => {
    const resul = wichlistPokemons.filter(x => x.poke.name === name);
    console.log();
    console.log(resul.length ? "se repite" : "no se repite");
  };
  useEffect(() => {
    console.log("props", props);
    isFavorite();
    repeat();
  }, []);


const date = new Date();
const minuto= date.getMinutes();
const hr =date.getHours();
const resp = "Hora: "+hr+":"+minuto;

  return (
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
        </Card.Text>
        <Badge bg="primary">
          Moves 1: {moves[0].move.name}
          <br />
        </Badge>
        
       
      </Card.Body>
      <Button
        size="sm"
        className="btn mt-3 mb-2 center"
        variant="success"
        onClick={handleOpenModal}
      >
        Mas Detalles
      </Button>
      <Button
        size="sm"
        className="btn mt-3 mb-2 center"
        variant="warning"
      //  onClick={handleSetWichList}
        onClick={()=>{
          const fun1=handleSetWichList;
          const fun2=toggleShowA;
          setShow(true);
          fun1();
          fun2();
        
        }}
        
        
      >
        Agregar a Favoritos
      </Button>

      <Modal show={modal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title className="text-center">{name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
    </Card>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
         
        </Modal.Footer>
      </Modal>

      <Toast variant="secondary" onClose={() => setShow(false)} show={show} delay={2000} autohide >
  <Toast.Header>
    
    <strong className="me-auto">Agregado</strong>
    <small>{resp}</small>
  </Toast.Header>
  <Toast.Body>Pokemon agregado exitosamente</Toast.Body>
</Toast>
    </Card>

    
  );
};

Pokemon.propTypes = {
  poke: propTypes.object,
  wichlist: propTypes.bool,
  modal: propTypes.bool
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

export default connect(mapStateToProps, mapDispactchProps)(Pokemon);
