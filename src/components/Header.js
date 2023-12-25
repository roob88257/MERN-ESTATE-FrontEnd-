import React from 'react'
import { CiSearch } from "react-icons/ci";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className='flex flex-row px-20 py-4 bg-slate-200 place-content-between shadow-md' >
        <Link to='/'>
        <h1 className='font-bold flex flex-wrap'>
            <span className='text-slate-500 text-xl'>Sahand</span>
            <span className='text-slate-900 text-xl'>Estate</span>
        </h1>
        </Link>
        <form className='flex flex-row bg-slate-100 rounded-lg'>
            <input type="text" name="q" placeholder="Search..."  className='mx-4 my-2 bg-inherit focus:outline-none'/>
            <button type='submit' className='px-2'><CiSearch /></button>
        </form>
        <div className='flex flex-row space-x-3'>
           <Link to='/'><div className='hover:underline hover:cursor-pointer hover:font-bold'>Home</div> </Link> 
           <Link to='/about'><div className='hover:underline hover:cursor-pointer hover:font-bold'>About</div></Link>
           <Link to='/sign-in'><div className='hover:underline hover:cursor-pointer hover:font-bold'>Sign In</div></Link>
        </div>
    </header>
  )
}

export default Header