import { useContext } from "react";
import GeneralContext from "../context/GeneralContext"

const usePokemons = () => {
	const context = useContext(GeneralContext)
	if(!context) throw new Error('There is no provider')

	const { getPokemonList, getPokemon, addToTeam, removeFromTeam, pokemons, selectedPokemon, team } = context;

	return { 
		getPokemonList, 
		getPokemon, 
		addToTeam, 
		removeFromTeam, 
		pokemons, 
		selectedPokemon, 
		team 
	}
}

export default usePokemons