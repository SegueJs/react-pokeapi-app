import PokemonListItem from "./PokemonListItem";
import "./css/PokemonList.css"
import usePokemonsStore from "../../../zustand/stores/pokemon";
export default function PokemonList ({pokemons}){

    const {isSearching, searchText} = usePokemonsStore(state=>({isSearching: state.isSearching, searchText: state.searchText}))

    if(isSearching){
        const filteredPokemons = pokemons.filter(item=> item.name.includes(searchText))
        console.log(filteredPokemons)
        return(
            <div className="pokemon-list_container">
                {filteredPokemons?.map((pokemon,index)=> <PokemonListItem key={index} {...pokemon} />)}
            </div>
        )
    }
    else{
        return(
            <div className="pokemon-list_container">
                {pokemons?.map((pokemon,index)=> <PokemonListItem key={index} {...pokemon} />)}
            </div>
        )
    }
};