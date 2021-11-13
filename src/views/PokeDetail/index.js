import { useParams } from "react-router";
import { useEffect } from "react";

//import pokemonContext from "../../context/pokemons";
import PokeStats from "./components/PokeStats";
import Loading from "../../components/Loading";
import ErrorMsg from "../../components/ErrorMsg";
import usePokemonsStore from "../../zustand/stores/pokemon";
import shallow from "zustand/shallow";
import "./styles.css"

export default function PokeDetail () {

    const { id } = useParams();
    //const { getPokemonDetail, pokemonDetail, isLoading, hasError, errorMsg } = useContext(pokemonContext)
    const {getPokemonDetail, pokemonDetail, isLoading, hasError, errorMsg} = usePokemonsStore(state=>({getPokemonDetail: state.getPokemonDetail, pokemonDetail: state.pokemonDetail, isLoading: state.isLoading, hasError: state.hasError, errorMsg: state.errorMsg}), shallow);

    useEffect(()=>{
        getPokemonDetail(id).catch(null)
    },[])


    if (isLoading) {
        return(
            <Loading title="Cargando pokemon..." />
        )
    }

    return(
        <div className="pokemon-detail_container">
            { hasError? <ErrorMsg msg={errorMsg} /> : (
                <>
                    <div className="pokemon-detail_card">
                        <div className="title">
                            <h3>General Info</h3>
                        </div>
                        <p> {`Name: ${pokemonDetail?.name}`} </p>
                        <p> {`Weight: ${pokemonDetail?.weight}`} Kg</p>
                        <p> {`Height: ${pokemonDetail?.height}`} Cm</p>
                    </div>

                    <div className="pokemon-detail_card">
                        <div className="title">
                            <h3>Habilities</h3>
                        </div>
                        <PokeStats stats={pokemonDetail?.stats ?? []} />
                    </div>
                </>
            ) }
            
        </div>
    )
}