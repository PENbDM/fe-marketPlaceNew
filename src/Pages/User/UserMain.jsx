import React, { useEffect } from 'react'
import Header from '../../components/Header/Header';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useContext } from 'react';
import { UserContext } from '../../Context';
function UserMain() {
  const userConsume = useContext(UserContext)
  const user = userConsume.user;


  const navigate = useNavigate();
  
  const handleLogOut = (e) => {
    e.preventDefault()
    localStorage.removeItem('userData');
    userConsume.setAuth(false)
    navigate('/');
  }
 
  return (
    <div className='userMain'>
      <Header />
      <div className='userMain-info'>
        <div className='userLogo'>
          <img src={user.avatar_url} width={200} height={200}/>
        </div>
        <div className='userInfo'>
              <p>User name: {user.username}</p>
              <p>Items in Cart: {user.items_in_basket}</p>
              <p>Items ordered: {user.items_ordered}</p>
              <p>Kudos:   {user.kudos}</p>
        </div>
        <div className='LogOutBlock'><button className='btn-logout' onClick={(e)=>handleLogOut(e)}>Log out</button></div>
      </div>
    </div>
  )
}

export default UserMain