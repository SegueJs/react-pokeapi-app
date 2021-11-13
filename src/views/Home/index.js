import { useEffect } from "react"
import shallow from "zustand/shallow"
//import pokemonContext from "../../context/pokemons";
import PokemonList from "./components/PokemonList";
import Loading from "../../components/Loading";
import ErrorMsg from "../../components/ErrorMsg";
import usePokemonsStore from "../../zustand/stores/pokemon";
import "./styles.css"

export default function Home () {
    //const { getPokemons, pokemons, isLoading, hasError, errorMsg } = useContext(pokemonContext);

    const {getPokemons, pokemons, isLoading, hasError, errorMsg} = usePokemonsStore(state=>({getPokemons: state.getPokemons, pokemons: state.pokemons, isLoading: state.isLoading, hasError: state.hasError, errorMsg: state.errorMsg}),shallow);

    useEffect(()=>{
        getPokemons().catch(null)
    },[])
    
    if(isLoading){
        return(
            <Loading title="Loading Results" />
        )
    }

    return(
        <div className="principal-container">
            {hasError ? <ErrorMsg msg={errorMsg} /> : <PokemonList pokemons={pokemons} /> }
        </div>
    )
}