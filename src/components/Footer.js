import React from 'react';
import { FaTwitter } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
 
const Footer = () => {
  return (
    <div className='flex justify-around align-bottom w-full h-40  bg-indigo-900 bg-opacity-70  bottom-1'>
        <div className='flex items-center h-full text-white'>
            <li className='text-white px-5 list-none hover:scale-125 duration-300 text-4xl'><a href='https://twitter.com/J0SEQUIJIJE' target="_blank"><FaTwitter/></a></li>
            <li className='text-white px-5 list-none hover:scale-125 duration-300 text-4xl'><a href='https://www.youtube.com/channel/UCuJKlr1Q6TQGlWw3UzLFaPQ' target="_blank"><FaYoutube/></a></li>
            <li className='text-white px-5 list-none hover:scale-125 duration-300 text-4xl'><a href='https://www.instagram.com/joseluquij_/' target="_blank"><FaInstagram/></a></li>
            <p className='px-5 text-4xl'>&copy;</p>
            
        </div>
    </div>
  )
}

export default Footer;