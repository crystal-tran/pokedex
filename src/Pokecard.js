/** Shows a single pokemon with their name, image, and type*/

function Pokecard({ name, imageUrl, type, base_experience }) {
  return (
    <div className="Pokecard">
      <h1>{name}</h1>
      <img src={imageUrl} alt={name} />
      <p>{type}</p>
      <p>{base_experience}</p>
    </div>);
}

export default Pokecard;