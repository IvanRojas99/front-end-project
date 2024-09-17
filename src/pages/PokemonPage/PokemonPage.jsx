import { useEffect } from 'react';
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'
import usePokemons from '../../hooks/usePokemons';

const PokemonPage = () => {
	const { name } = useParams();
	const { getPokemon } = usePokemons();

	const [pokemon, setPokemon] = useState();
	const navigate = useNavigate();

	
	const getPokemonData = async () => {
		try {
			const url = `https://pokeapi.co/api/v2/pokemon/${name}/`;
			const data = await getPokemon(url);
			setPokemon(data);
			
		} catch (error) {
			
			navigate('/notfound');
		}
	}
	
	useEffect(() => {
		getPokemonData();
	}, [])
	
	if (pokemon) {
		const { front_default, back_default, front_shiny, back_shiny } = pokemon.sprites.versions["generation-v"]["black-white"].animated

		return (
			<div className='w-full flex items-center justify-center pt-24'>
				<div className="w-5/6 max-w-md mx-auto md:max-w-2xl min-w-0 break-words bg-white dark:bg-gray-700 mb-6 shadow-lg rounded-xl mt-16 dark:text-white items-center justify-center">

					<div className='flex flex-col items-center justify-center'>
						<div className=' w-40 rounded-full bg-white mb-5 -mt-20 '>
								<img className="w-full h-40" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`} alt="pokemon"/>
						</div>
						
						<h3 className="text-2xl text-slate-700 dark:text-white font-bold leading-normal mb-1 capitalize">{name}</h3>
						<div className="flex items-center px-6 pt-4 pb-2">
								{pokemon.types.map((e) => (<span key={e.type.name} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{e.type.name}</span>) )}
						</div>
						<div className="w-96 mt-6 py-6 border-t border-slate-200 text-center">
							<p className='text-md mt-0 mb-2 text-slate-300 font-bold uppercase'>Abilities</p>
							<ul className="my-3 flex justify-around">
								{pokemon.abilities.map(e => <li key={e.ability.name}>{e.ability.name}</li>)}
							</ul>
							<div className='flex justify-evenly'>
									<img className="w-30 h-30" src={front_default} alt="pokemon"/>
									<img className="w-30 h-30" src={back_default} alt="pokemon"/>
									<img className="w-30 h-30" src={front_shiny} alt="pokemon"/>
									<img className="w-30 h-30" src={back_shiny} alt="pokemon"/>
							</div>
						</div>
					</div>
					
				</div>
			</div>
		)
	}
}

export default PokemonPage