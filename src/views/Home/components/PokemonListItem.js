import { Link } from "react-router-dom";
import "./css/PokemonListItem.css"

export default function PokemonListItem({name, url}) {
    const getId = () => url.split("/")[6];
  return (
    <div className="list-item">
      <div className="content">
        <div className="img-card">
          <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getId()}.png`} alt="" />  
        </div>
        <p>{name}</p>
        
        <Link className="info-button" to={`/react-pokeapi-app/pokemon/${getId()}`}>
          <button>
            Ver detalles
          </button>
        </Link>
      </div>
    </div>
  );
}
