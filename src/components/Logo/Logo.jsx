import React from 'react'
import Logoo from '../../assets/logo.png'
import { Link } from 'react-router-dom';

import './logo.css'
function Logo() {
  return (
    <Link to="/" className="logo-link">

    <div className='LogoBlock'>
        <img src={Logoo} width={60} height={60}/>
        NC Marketplace
    </div>
    </Link>

  )
}

export default Logo