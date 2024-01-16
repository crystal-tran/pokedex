/**Accepts an array of objects describing different pokemons, and
 * renders a sequence of Pokecard components
 */

import Pokecard from "./Pokecard";
const BASE_IMAGE_URL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon";

function Pokedex({ pokemon }) {
  return (
    <div className="Pokedex">
      {pokemon.map(p =>
        <Pokecard
          name={p.name}
          imageUrl={`${BASE_IMAGE_URL}/${p.id}.png`}
          type={p.type}
          base_experience={p.base_experience} />
      )
      }
    </div>
  );
}

export default Pokedex;