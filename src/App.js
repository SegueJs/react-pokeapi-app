import AppRouter from "./routes/AppRouter";
import PokemonProvider from "./context/pokemons/Provider";

function App () {
  return(
    <PokemonProvider>
      <AppRouter />
    </PokemonProvider>
  )
}

export default App;