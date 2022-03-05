import React from 'react';
import {connect} from "react-redux";
import Pokemon from "./Pokemon";
import Empty from './Empty';
import "../assets/style/Wichlist.scss";
import Button from 'react-bootstrap/Button';
import { Fragment } from 'react';
import WichList from "../components/WichList";


const PokemonWichList = (props) => {
  const {wichlistPokemons} = props;
  console.log(wichlistPokemons);
  return (
    <div className="wishlist">
      {!wichlistPokemons.length ? (
        <Empty/>
        
      ):(
        
        wichlistPokemons.map((pokemon)=>(

          <WichList key={pokemon.poke.id} poke={pokemon.poke}/>
         
          ///<Pokemon key={pokemon.poke.id}  poke={pokemon.poke} />
         
         
        ))
      )

      }
    </div>
  );
};

const mapStateToProps=(state)=>{
  return{
    wichlistPokemons: state.wichlistPokemons,
  };
};

export default connect(mapStateToProps, null) (PokemonWichList);