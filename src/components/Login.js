import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const [isSignedin, setIsSignedIn] = useState(true)
  const toogleSignInForm = () => setIsSignedIn(!isSignedin)
  return (
    <div>
      <Header />
      <div className='absolute'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/36a4db5b-dec2-458a-a1c0-662fa60e7473/1115a02b-3062-4dcc-aae0-94028a0dcdff/IN-en-20240820-TRIFECTA-perspective_WEB_eeff8a6e-0384-4791-a703-31368aeac39f_small.jpg' alt='bg' />
      </div>
      <form className='w-3/12 bg-black my-36 mx-auto right-0 left-0 absolute p-12 text-white rounded-lg bg-opacity-75'>
      <h1 className='font-bold text-3xl py-4'>{isSignedin ? 'Sign In' : 'Sing up'}</h1>
      {!isSignedin && <input type='text' placeholder='  Full name' className='py-4 my-4 w-full bg-gray-700' />}
        <input type='text' placeholder='  Email address' className='py-4 my-4 w-full bg-gray-700' />
        <input type='password' placeholder='  Password' className='py-4 my-4 w-full bg-gray-700' />
        <button className='p-4 my-6 bg-red-700 w-full rounded-lg cursor-pointer'>{isSignedin ? 'Sign In' : 'Sing up'}</button>
        {
          isSignedin ? 
          <p className='py-4 cursor-pointer' onClick={toogleSignInForm}> Are you new to neflix ? sign up here</p>
          : 
          <p className='py-4 cursor-pointer' onClick={toogleSignInForm}> Already have an account ? sign in here</p>
        }
      </form>
    </div>
  )
}

export default Login