import React, { useState } from 'react'
import './header.css'
import Logo from '../Logo/Logo'
import { Link } from 'react-router-dom';
function Header() {
  const user = JSON.parse(localStorage.getItem('userData'));
  console.log(user,'header');
  return (
    <div className='HeaderBlock'>
      <div className='LeftSide'>     
       <Logo  />
      </div>
    {
      user ?
      <div className='RightSide'>
      <Link to="/items" className="logo-link">
      <button className='btn-home'>Products</button>
      </Link>
      <Link to="/cart" className="logo-link">
      <button className='btn-home'>Cart</button>
      </Link>
      <Link to="/auth" className="logo-link">
      <button className='btn-user'><img src={user.avatar_url} width={40} height={40} alt='Wrong or missing img'/></button>
      </Link>
      </div> : 
      <div className='RightSideUs'>
      <Link to="/auth" className="logo-link">
        <button className='btn-user'>Auth</button>
        </Link>
      </div>
    }
    </div>
  )
}

export default Header