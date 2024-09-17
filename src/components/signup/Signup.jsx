import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import Alert from '../alert/Alert';

const Signup = () => {
  const [user, setUser] = useState({ email: '', password: '' });
	const [error, setError] = useState()
	const { signup } = useAuth()
	const navigate = useNavigate()


  const onInputChange = (e) => {
    const { name, value } = e.target

    setUser((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
		setError('');
		try {
			await signup(user.email, user.password);
			navigate("/")
		} catch (error) {
			console.log(error.code)
			setError(error.message)
		}
  }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col'>

			{error && <Alert type="error" message={error}/>}

      <div className='mb-6 pt-3 rounded bg-gray-200'>
        <label className='block text-gray-700 text-sm font-bold mb-2 ml-3'> Email </label>
        <input
          className='bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3'
          type="email"
          name="email"
          value={user.email}
          onChange={onInputChange} />
      </div>

      <div className='mb-6 pt-3 rounded bg-gray-200'>
        <label className='block text-gray-700 text-sm font-bold mb-2 ml-3'> Password </label>
        <input
          className='bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3'
          type="password"
          name="password"
          value={user.password}
          onChange={onInputChange} />
      </div>

      <div className="md:flex md:items-center mb-6">
        <label className="block text-gray-600 font-bold">
          <input className="mr-2 leading-tight" type="checkbox" />
          <span className="text-sm">
            By creating your account you agree to the terms of service and our security policy.
          </span>
        </label>
      </div>

      <button type="submit" className='bg-gray-900 rounded hover:bg-gray-700 text-white font-bold py-2 shadow-lg hover:shadow-xl transition duration-200 '>
        Register
      </button>
    </form>
  )
}

export default Signup