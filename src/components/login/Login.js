import React, { useState } from 'react'
import Header from '../Header';

const Login = () => {
    const [isSignIn,setIsSignIn]=useState(true);
    const toggleSignInForm =()=>{
        setIsSignIn(!isSignIn);
    }
  return (
    <div>
        <Header/>
        <div className='absolute '>
             <img src ="https://assets.nflxext.com/ffe/siteui/vlv3/5e16108c-fd30-46de-9bb8-0b4e1bbbc509/29d8d7d7-83cc-4b5f-aa9b-6fd4f68bfaa6/IN-en-20240205-popsignuptwoweeks-perspective_alpha_website_large.jpg"/>
        </div>
        <div className='absolute p-12 w-3/12 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-black bg-opacity-80' >
        <form>
            <h1 className='text-3xl font-bold m-2' > {isSignIn ? "Sign In":"Sign Up"}</h1>
           { !isSignIn && <input type='text' placeholder='Name' className='p-4 m-4 w-full bg-gray-700'/>}
            <input type='text' placeholder='Email' className='p-4 m-4 w-full bg-gray-700'/>
            <input type='password' placeholder='Password' className='p-4 m-4 w-full  bg-gray-700'/>
            <button className='p-4 m-4 bg-red-700 w-full font-semibold rounded-lg'>{isSignIn ? "Sign In":"Sign Up"}</button>
            <p  className='p-4 m-4 w-full font-semibold cursor-pointer' onClick={toggleSignInForm}>{isSignIn ? "New to Netflix? Sign Up Now":"Alredy registered? Sign In Now"}</p>
        </form>
        </div>
        
       
    </div>
  )
}

export default Login;