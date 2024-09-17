import { useState } from 'react';
import Alert from '../../components/alert/Alert';
import TeamCard from '../../components/cards/TeamCard';
import usePokemons from '../../hooks/usePokemons';
import StatisticsTable from '../../components/statisticsTable/StatisticsTable';

const TeamPage = () => {
	const [alert, setAlert] = useState();
	const { team } = usePokemons();

	if (team.length >= 1) {
		return (
			<div className='max-w-4xl min-h-full flex flex-col mx-auto mb-4 p-1 md:p-12 rounded-xl shadow-2xl items-center justify-center'>
				{alert && <Alert type={alert.type} message={alert.message} />}
				<h1 className='text-4xl font-bold text-center dark:text-white'>Check your Team</h1>
				<p className='font-bold my-3 dark:text-white'>Team Statistics</p>
				<StatisticsTable />
				<div className='grid gap-4 grid-cols-1 place-content-center md:md:grid-cols-3 xl:grid-cols-3'>
					{
						team.map((pokemon, index) => (<TeamCard key={index} name={pokemon.name} setAlert={setAlert} />))
					}
				</div>
			</div>
		)
	} else {

		return (
			<div className='max-w-3xl min-h-full flex flex-col font-bold dark:text-white mx-auto p-6 md:p-12 rounded-xl shadow-2xl items-center'>
				No hay pokemones en tu equipo
			</div>
		)

	}


}

export default TeamPage