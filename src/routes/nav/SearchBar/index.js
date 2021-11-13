import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import usePokemonsStore from "../../../zustand/stores/pokemon";
import "./styles.css"

export default function SearchBar () {

    const {isSearching, handleIsSearching, setSearchText} = usePokemonsStore(state => ({isSearching: state.isSearching, handleIsSearching: state.handleIsSearching, setSearchText: state.setSearchText}))

    const isSearchingStyle = {
        background: "#f33"
    }


    return(
        <>
            <input className="search-bar" placeholder="Search" type="text" onChange={({target:{value}})=>{setSearchText(value)}}/>
            <button className="search-button" onClick={handleIsSearching} type="submit"
            style={
                isSearching?isSearchingStyle:null
            }
            ><FontAwesomeIcon icon={faSearch}/></button>
        </>
    )
}