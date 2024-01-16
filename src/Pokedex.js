import Pokecard from "./Pokecard";
import "./Pokedex.css";

const BASE_IMAGE_URL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon";

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
/**Accepts an array of objects describing different pokemons, and
 * renders a sequence of Pokecard components.
 *
 * Accepts something like:
 * [{id, name, type, base_experience}...]
 *
 */

function Pokedex({ pokemon=POKEMON_LIST }) {
  return (
    <div className="Pokedex">
      {pokemon.map(({name, id, type, base_experience}) =>
        <Pokecard
          name={name}
          imageUrl={`${BASE_IMAGE_URL}/${id}.png`}
          type={type}
          base_experience={base_experience} />
      )
      }
    </div>
  );
}

export default Pokedex;