import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth';
import Alert from '../alert/Alert'

const Login = () => {

  const navigate = useNavigate();
	const [userData, setUser] = useState({ email: '', password:'' });
	const [error, setError] = useState()

	const { login, loginWithGoogle, resetPassword } = useAuth();

	const onInputChange = (e) => {
		const { name, value } = e.target
		
		setUser((prev) => ({...prev, [name]: value}))
	}

	const handleSubmit = async (e) => {
		e.preventDefault();
		
		if(userData.email !== '' && userData.password !== ''){
			try {
				// Signed in
				const userCredentials = await login(userData.email, userData.password)
				const { user } = userCredentials
				localStorage.setItem('user', JSON.stringify(user))
				navigate('/home')
			} catch (error) {
				// console.log(error.code)
				setError(error.message);
			}
		}
	}

	
	const handleGoogleSignIn = async () => {
		try {
			const userCredentials= await loginWithGoogle();
			const { user } = userCredentials;
			localStorage.setItem('user', JSON.stringify(user));
			
			navigate("/home")
		} catch (error) {
			setError(error.message);
		}
	}

	const handleResetPassword = async () => {
		if (!userData.email) return setError("Please enter your email");
		try {
			await resetPassword(userData.email)
			
		} catch (error) {
			setError(error.message);
		}
	}



  return (
        <>
					{error && <Alert type="error" message={error}/>}

					<form className='flex flex-col'>
						<div className='mb-6 pt-3 rounded bg-gray-200'>            
							<label className='block text-gray-700 text-sm font-bold mb-2 ml-3'> Username </label>
							<input 
								className='bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3'
								type="email" 
								name="email" 
								onChange={onInputChange}/>
						</div>

						<div className='mb-6 pt-3 rounded bg-gray-200'>
							<label className='block text-gray-700 text-sm font-bold mb-2 ml-3'> Password </label>
							<input        
								className='bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3'
								type="password" 
								name="password" 
								
								onChange={onInputChange}/>
						</div>

						<button onClick={handleSubmit} type="submit" className='bg-gray-900 rounded hover:bg-gray-700 text-white font-bold py-2 shadow-lg hover:shadow-xl transition duration-200 '>
							Login
						</button>
					</form>
					<button onClick={handleGoogleSignIn} className="bg-slate-50 hover:bg-slate-200 text-black shadow-md rounded border-2 flex justify-evenly items-center border-gray-300 mt-2 py-2 px-4 w-full">
						Login with Google
						<img
								className="h-8 w-8"
								src='googleicon.svg'
								alt="pokemon main"
							/>
					</button>

          <div className='flex justify-around my-3'>
						<p>
							Forgot your password?
						</p>					
            <Link to="/resetpass" className='text-gray-900 hover:text-purple-700 hover:underline'>Reset it here</Link>					
          </div>
        </>
  )
}

export default Login