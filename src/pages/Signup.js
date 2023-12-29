import React from 'react'
import { Link } from 'react-router-dom'

function Signup() {
  return (

    <div className='p-3 max-w-lg mx-auto'>
        <h1 className='text-3xl font-semibold text-center my-7'>Sign Up</h1>
        <form className='flex flex-col gap-4 '>
        <input type="text" name="user" placeholder="Username" className='border p-3 rounded-lg focus:outline-slate-300'/>
        <input type="text" name="email" placeholder="Email" className='border p-3 rounded-lg focus:outline-slate-300'/>
        <input type="text" name="password" placeholder="Password" className='border p-3 rounded-lg focus:outline-slate-300'/>
        <button type="submit" className='bg-[#334155] p-3 rounded-md text-white hover:bg-slate-600'>SIGN UP</button>
        </form>
        <div className='flex flex-row gap-2 mt-4'>
            <p>
               Have an account?
            </p>
            <Link to='\sign-in'><div className='text-blue-600 hover:cursor-pointer hover:text-blue-400'>Sign in</div></Link>
        </div>
    </div>
    
  
  )
}

export default Signup