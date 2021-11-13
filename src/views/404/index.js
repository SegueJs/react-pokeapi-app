import { useContext } from "react/cjs/react.development"
import pokemonContext from "../../context/pokemons"

export default function FourOFour (){

    const {pokemons}  =useContext(pokemonContext)
    console.log(pokemons)
    return(
        <div>
            <p>Sorry, I can search him</p>
        </div>
    )
}