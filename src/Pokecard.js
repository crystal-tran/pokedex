/** Shows a single pokemon with their name, image, and type*/

import "./Pokecard.css";

function Pokecard({ name, imageUrl, type, base_experience }) {
  return (
    <div className="Pokecard">
      <h1>{name}</h1>
      <img src={imageUrl} alt={name} />
      <p>Type: {type}</p>
      <p>EXP: {base_experience}</p>
    </div>);
}

export default Pokecard;