import Pokedex from "./Pokedex";
import "./Pokegame.css";
const _ = require("lodash");



const POKEMON_LIST = [
  {id: 4,   name: 'Charmander', type: 'fire',     base_experience: 62},
  {id: 7,   name: 'Squirtle',   type: 'water',    base_experience: 63},
  {id: 11,  name: 'Metapod',    type: 'bug',      base_experience: 72},
  {id: 12,  name: 'Butterfree', type: 'flying',   base_experience: 178},
  {id: 25,  name: 'Pikachu',    type: 'electric', base_experience: 112},
  {id: 39,  name: 'Jigglypuff', type: 'normal',   base_experience: 95},
  {id: 94,  name: 'Gengar',     type: 'poison',   base_experience: 225},
  {id: 133, name: 'Eevee',      type: 'normal',   base_experience: 65}
]

/** Takes an array of 8 Pokemon and splits it randomly into two arrays of 4,
 * then renders a Pokedex component for each
*/

function Pokegame( { pokemon=POKEMON_LIST }){
  const shuffledPokemon = _.shuffle(pokemon);
  const firstHand = shuffledPokemon.slice(0,4);
  const firstHandExp = getExpSum(firstHand);
  const secondHand = shuffledPokemon.slice(4,8);
  const secondHandExp = getExpSum(secondHand);

  return <div>
    <Pokedex pokemon={ firstHand } totalExp={ firstHandExp } isWinner={firstHandExp > secondHandExp}/>
    <Pokedex pokemon={ secondHand } totalExp={ secondHandExp } isWinner={firstHandExp < secondHandExp} />
  </div>
}

function getExpSum(pokemon) {
  let runningTotal = 0;
  for (let p of pokemon) {
    runningTotal += p.base_experience;
  }
  return runningTotal;
}

export default Pokegame;