import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const PassResetPage = () => {

	const [password, setPassword] = useState({ firstPass: '', secondPass: ''});


  const onInputChange = (e) => {
    const { name, value } = e.target
    
    setPassword((prev) => ({...prev, [name]: value}))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(password)
    
	}

	return (
		<>
			<header className='bg-white max-w-lg mx-auto'>	
				<h1 className='text-4xl font-bold text-center my-2 text-purple-600'>Reset Password</h1>
			</header>

			<main className='bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl'>
				<form onSubmit={handleSubmit} className='flex flex-col'>
					<div className='mb-6 pt-3 rounded bg-gray-200'>            
						<label className='block text-gray-700 text-sm font-bold mb-2 ml-3'> New Password </label>
						<input 
							className='bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3'
							type="text" 
							name="username" 
							value={password.firstPass}
							onChange={onInputChange}/>
					</div>

					<div className='mb-6 pt-3 rounded bg-gray-200'>
						<label className='block text-gray-700 text-sm font-bold mb-2 ml-3'> Repeat your Password </label>
						<input        
							className='bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3'
							type="password" 
							name="password" 
							value={password.secondPass}
							onChange={onInputChange}/>
					</div>

					<button type="submit" className='bg-purple-900 rounded hover:bg-purple-700 text-white font-bold py-2 shadow-lg hover:shadow-xl transition duration-200 '>
						Reset Password
					</button>
				</form>

			</main>

			<div className='max-w-lg mx-auto text-center mt-12 mb-6'>
				<p>If you remembered your password  you can login here! <Link to="/login" className='font-bold hover:underline' >Login</Link></p>
			</div>

			<footer className='max-w-lg mx-auto flex justify-center'>
				<a href='/' className='hover:underline'>Contact</a>
				<span className='mx-3'>.</span>
				<a href='/' className='hover:underline'>Privacy</a>
			</footer>
</>
)
}

export default PassResetPage