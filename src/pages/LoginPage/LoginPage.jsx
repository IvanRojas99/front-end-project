import React from 'react'
import { Link } from 'react-router-dom'
import Login from '../../components/login/Login'

const LoginPage = () => {
  return (
    <>
      <div className='bg-white max-w-lg mx-auto p-8 md:p-12 my-5 rounded-lg shadow-2xl'>

        <section className='flex flex-col items-center'>
          <h3 className='font-bold text-2xl'>Welcome to PokéDex</h3>
          <p className='text-gray-600 pt-2'>Sign in to your account</p>
        </section>

        <section className='mt-5'>
          <Login/>
        </section>

      </div>

      <div className='max-w-lg mx-auto text-center mt-5 mb-6'>
        <p>If you don't have an account you can register here! <Link to="/signup" className="font-bold hover:underline">Sign up</Link></p>
      </div>

      <div className='max-w-lg mx-auto flex justify-center'>
        <a href='/' className='hover:underline'>Contact</a>
        <span className='mx-3'>.</span>
        <a href='/' className='hover:underline'>Privacy</a>
      </div>
    </>
  )
}

export default LoginPage