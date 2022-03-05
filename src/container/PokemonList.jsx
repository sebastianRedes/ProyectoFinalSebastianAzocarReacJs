import React, {useState, useEffect} from 'react';
import Pokemon from "../components/Pokemon";
import Error from "../components/Error";
import Loader from "../components/Loader";
import propTypes from "prop-types";
import "../assets/style/PokemonList.scss"

const PokemonList = () => {
    const [poke, setPoke] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(()=>{
      const getPoke = async() => {
        try {
          const resp = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=20');
          const data = await resp.json();
          const dataNueva = data.results.map( async({url}) => {
            const respAgain = await fetch(url);
            const dataAgain = await respAgain.json();
              return dataAgain
          })

          const dataFinal = await Promise.all(dataNueva);
          setPoke(dataFinal);
          setLoading(false);
          setError(false);
        
        } catch (error) {
          setError(true);
          console.log({error})
        }
      }
      getPoke();
    },[]);

    /* const getPoke=()=>{
      fetch('https://pokeapi.co/api/v2/pokemon/?limit=20')
      .then((response) => response.json())
      .then((data) => setResult(
        data.results.map((item) => {
          fetch(item.url)
          .then((response) => response.json())
          .then((allpokemon) => arr.push(allpokemon));
              setPoke(arr);
              setLoading(false);
              setError(false);
          })
         
        ))
       
         .catch((err)=>{
           console.log(err);
           setError(true);
          }
       ); 

    }; */

  return (
    <section>
      <div className='pokemonList'>
          {loading ? (
              <Loader/>
          ): error ? (
              <Error/>
          ) : (
              poke.map((pokemon, i)=>(
                  <Pokemon key={i}  poke={pokemon} />
              ))
          )}
      </div>
    </section>
  );
};

PokemonList.propTypes={
  loading: propTypes.bool,
  error: propTypes.bool,
  poke: propTypes.array
};

export default PokemonList;