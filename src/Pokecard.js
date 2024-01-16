import "./Pokecard.css";

/** Accepts an object about a pokemon containing
 *  name, imageUrl, type, and base_experience
 *
 * Renders a single pokemon with their name, image, type, and base experience
*/

function Pokecard({ name, imageUrl, type, base_experience }) {
  return (
    <div className="Pokecard">
      <h2>{name}</h2>
      <img src={imageUrl} alt={name} />
      <p>Type: {type}</p>
      <p>EXP: {base_experience}</p>
    </div>);
}

export default Pokecard;