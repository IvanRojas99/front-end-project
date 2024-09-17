import usePokemons from '../../hooks/usePokemons';
import StatisticsTable from '../statisticsTable/StatisticsTable';

const Profile = ({ user }) => {
  const { team } = usePokemons();
  const {photoURL, email, displayName} = user;


  return (
    <>
      <section className='max-w-3xl min-h-full flex flex-col mx-auto p-6 md:p-12 rounded-xl shadow-2xl items-center dark:text-white'>
        <div className='w-40 h-40 rounded-full overflow-hidden justify-center'>
          <img src={photoURL ? photoURL : "pokeball.svg"} alt={`${email} profile avatar`} className='w-full h-full object-cover' referrerpolicy="no-referrer" />
        </div>

        <div className='w-full md:w-4/5 flex flex-col items-center'>
          <p className='font-bold'>{displayName || email}</p>
          <p className='font-light mb-4'>{email}</p>
          <p className='text-justify mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit nisi voluptates, laudantium odit, exercitationem rem aperiam, impedit dolorum ab odio deserunt ipsa accusamus ea fugit distinctio vitae dolore et quam.</p>
        </div>

        <p className='font-bold my-3'>Pokemon team</p>
        <div className='grid grid-cols-3 gap-2'>
          {team ?
            (team.map(pokemon => (
              <div key={pokemon.name} className='border-2 border-gray-700 rounded-md'>
                <img className="w-full h-20 p-2" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`} alt="pokemon" />
              </div>)
            )
            )
            :
            (<div>No tienes pokemones en tu equipo</div>)
          }

        </div>

        <p className='font-bold my-3'>Team Statistics</p>

        <StatisticsTable />

      </section>
    </>
  )
}

export default Profile