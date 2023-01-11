import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/jjl.png'
import { FaBars } from 'react-icons/fa'
import { FaWindowClose } from 'react-icons/fa';

const Navbar = () => {
  
  const [nav, setNav] = useState(false);

  return (
    <div className='flex justify-between items-center h-20 bg-black bg-opacity-80'>
        <div className='flex text-white text-20px'><img className='w-40 h-30 px-5 ' src={logo} alt='Logo'/></div>

         <ul className='hidden md:flex  '>                
            <li className='text-white text-2xl hover:scale-110 duration-200'><Link className='px-4' to='/'>Home</Link></li>
            <li className='text-white text-2xl hover:scale-110 duration-200'><Link  className='px-4' to='/about'>About</Link></li>
            <li className='text-white text-2xl hover:scale-110 duration-200'><Link className='px-4' to='/youtube'>Youtube</Link></li>
          </ul>
          <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 text-gray-400 md:hidden'>
            {nav ? <FaWindowClose size={30}/> : <FaBars size={30}/>}
          </div> 
          {nav && (
            <ul onClick={() => setNav(!nav)} className='flex flex-col justify-center items-center font-bold text-white absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-cyan-900 via-teal-900 to-green-900' >
            <li className='px-4 capitalize cursor-pointer py-5 text-4xl hover:scale-110 hover:bg-teal-600  hover:rounded-lg duration-200'><Link className='px-4' to='/'>Home</Link></li>
            <li className='px-4 capitalize cursor-pointer py-5 text-4xl hover:scale-110 hover:bg-teal-600  hover:rounded-lg duration-200'><Link  className='px-4' to='/about'>About</Link></li>
            <li className='px-4 capitalize cursor-pointer py-5 text-4xl hover:scale-110 hover:bg-teal-600  hover:rounded-lg duration-200'><Link className='px-4' to='/youtube'>Youtube</Link></li>
          </ul>
          )}
          
    </div>
  )
}

export default Navbar;