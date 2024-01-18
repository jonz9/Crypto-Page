import React from 'react'
import Logo from '../assets/Logo.png';
import { Button } from './Button';

const Navbar = () => {
  return (
    <div className='justify-between flex gap-10 bg-primary-color'>
      <img src={Logo} alt='logo' className='w-40 h-15 m-3' />
      <div className='flex justify-center items-center gap-4 m-4'>
        <Button>Log In</Button>
        <Button>Register</Button>
      </div>
      
    </div>
  )
}

export default Navbar