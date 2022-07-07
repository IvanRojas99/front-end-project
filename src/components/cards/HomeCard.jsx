import React, { useState, useEffect } from 'react'
import usePokemons from '../../hooks/usePokemons';
import { useNavigate } from "react-router-dom";

const HomeCard = ({ name, setAlert }) => {
	const { getPokemon, addToTeam, team} = usePokemons();
	const [pokemon, setPokemon] = useState();
	const [isInTeam, setIsInTeam ] = useState(false);
	let navigate = useNavigate();

	const getPokemonData = async () => {
		const url = `https://pokeapi.co/api/v2/pokemon/${name}/`;
		const data = await getPokemon(url);
		setPokemon(data);
	};

	const checkTeam = () => {
		const isPresent = team.find( e => e.name === name);
		if(isPresent){
			setIsInTeam(true)
		}else{
			setIsInTeam(false)
		}
	}

	useEffect(()=>{
		getPokemonData();
		checkTeam();
	},[])

	const addPokemon = (pokemon) => {
		if(isInTeam) {
			setAlert({ type: 'error', message: `You've already have a ${name} in your team.` })
			setTimeout(() => setAlert(''), 2000)
			return 
		}

		if(team.length < 6){
			setAlert({ type: 'new', message: `You've added ${name} to your team.` })
			setTimeout(() => setAlert(''), 1000)
			addToTeam(pokemon)
			setIsInTeam(true)
		}else{
			setAlert({ type: 'error', message: `You've reached your pokemon team limit.` })
			setTimeout(() => setAlert(''), 2000)
		}
	}

	const seeDetails = () => {
		navigate(`/pokemon/${name}`)
	}
	

	if (pokemon) {
		return (
			<div className='shadow hover:shadow-2xl max-w-sm rounded overflow-hidden flex flex-col justify-center items-center m-2 px-0.5 py-2 border border-gray-300'>
					<img className="w-full h-72" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`} alt="pokemon"></img>
					<div className="px-6 py-4 text-center">
							<div className="font-bold text-xl mb-2 dark:text-white">{pokemon.name}</div>
					</div>

					{
						isInTeam && <div>
													<img
														className="h-8 w-8"
														src='https://www.svgrepo.com/show/276264/pokeball-pokemon.svg'
														alt="pokeball"
													/>
												</div>
					}

					<button onClick={() => seeDetails()} className="bg-blue-500 hover:bg-blue-700 text-white font-bold mb-2 py-2 px-4 rounded active:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300">
							See more
					</button>

					<button onClick={() => addPokemon(pokemon)} className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded active:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-300">
							Add to my team
					</button>

			</div>)
	} else {
		return (<p>Cargando...</p>)
	}

}

export default HomeCard