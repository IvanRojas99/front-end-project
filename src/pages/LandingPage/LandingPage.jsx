import LoginPage from '../LoginPage/LoginPage'

const LandingPage = () => {
	return (
		<div className='max-w-6xl min-h-full flex flex-row mx-auto mb-2 p-1 md:p-12 rounded-xl shadow-2xl items-center justify-around'>
			<div>
					<img
						className="h-80 w-80"
						src='Pokemon.svg'
						alt="pokemon main"
					/>
			</div>
			<div>
				<LoginPage/>
			</div>

		</div>
	)
}

export default LandingPage