import { useEffect } from 'react';
import { useState } from 'react';
import Alert from '../../components/alert/Alert';
import HomeCard from '../../components/cards/HomeCard'
import usePokemons from '../../hooks/usePokemons'

const HomePage = () => {
	const [alert, setAlert] = useState();
	const { pokemons } = usePokemons();

  if( pokemons.length > 1){
		return (
		<>
			{alert && <Alert type={alert.type} message={alert.message}/>}
			
			<h1 className='text-4xl font-bold text-center dark:text-white py-2 '>Choose your team!</h1>
			<div className='grid gap-4 grid-cols-1 place-items-center md:grid-cols-3 xl:grid-cols-6 '>
        {pokemons.map(pokemon => <HomeCard key={pokemon.url} name={pokemon.name} setAlert={setAlert}/>)}
      </div>
		</>
    )
  }
}

export default HomePage