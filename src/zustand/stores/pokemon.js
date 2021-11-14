import create from "zustand";
import apiCall from "../../api";

const usePokemonsStore = create((set,get)=>({
    getPokemons: async () => {
        try {
            set({ isLoading: true, errorMsg: "", hasError: false })
            const pokemonsResult = await apiCall({
                url: "https://pokeapi.co/api/v2/pokemon?limit=100"
            })
            set({pokemons: pokemonsResult.results})
        } catch (error) {
            set({pokemons: [],hasError: true, errorMsg: "Something happened, please verify your connection"})
        } finally{
            set({isLoading: false})
        }
    },
    pokemons: [],
    getPokemonDetail: async (id)=>{
        if (!id) return
        try {
            set({ isLoading: true, errorMsg: "", hasError: false })
            const pokemonDetail = await apiCall({
                url: `https://pokeapi.co/api/v2/pokemon/${id}`
            })
            set({ pokemonDetail })
        } catch (error) {
            set({pokemonDetail: {},hasError:true, errorMsg: "Something happened, please verify your connection"})
        }finally{
            set({isLoading: false})
        }
    },
    getPokemonImg: async (id)=> {
        if (!id) return;
        try {
            const pokemonImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
            set({ pokemonImg: pokemonImg })
        } catch (error) {
            set({ pokemonImg: "" })
        }
    },
    pokemonImg: "",
    pokemonDetail: {},
    isLoading: false,
    errorMsg: "",
    hasError: false,
    getSearchText: () => {

    },
    handleIsSearching: ()=>{
        const value = get().isSearching;
        set({isSearching: !value})
        console.log(get().isSearching) 
    },
    isSearching: false,
    setSearchText: (value)=>{
        set({searchText: value.toLowerCase()})
        console.log(get().searchText)
    },
    searchText: ""

}))

export default usePokemonsStore