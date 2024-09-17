import React, { useState, useEffect } from 'react'
import usePokemons from '../../hooks/usePokemons';

const TeamCard = ({name, setAlert}) => {
	const { team,  getPokemon, removeFromTeam }= usePokemons()
	const [pokemon, setPokemon] = useState();

    const getPokemonData = async () => {
				const url = `https://pokeapi.co/api/v2/pokemon/${name}/`;
        const data = await getPokemon(url);
        setPokemon(data);
    };

    useEffect(()=>{
        getPokemonData();
    }, [team])

		const removePokemon = () => {
			setAlert({ type: 'delete', message: `You've deleted ${name} of your team` })
			setTimeout(() => setAlert(''), 1000)
			removeFromTeam(pokemon.name)
		}

    if(pokemon){     
        return (
            <div className='shadow hover:shadow-2xl max-w-sm rounded overflow-hidden flex flex-col justify-center items-center m-2 px-0.5 py-2 border border-gray-300'>
                <img className="w-full h-40" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`} alt="pokemon"></img>
                <div className="px-6 py-1 text-center">
                    <div className="font-bold text-xl mb-2 dark:text-white capitalize">{pokemon.name}</div>
                </div>

                <div className="flex items-center px-6 pt-4 pb-2">
                    {pokemon.types.map((e) => (<span key={e.type.name} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{e.type.name}</span>) )}
                </div>

								<ul>
									{pokemon.stats.map( (e, index) => <li key={index} className="dark:text-gray-200"><span className='font-bold dark:text-gray-300'>{e.stat.name}</span> {e.base_stat}</li>)}
								</ul>

								<button onClick={() => removePokemon() } className="bg-red-500 hover:bg-red-700 text-white font-bold my-2 py-2 px-4 rounded">
                    Remove from team
                </button>
            </div>)
    }

}

export default TeamCard