import React, { useEffect } from 'react'
import Header from '../../components/Header/Header';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function UserMain(props) {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('userData'));
  
  const handleLogOut = (e) => {
    e.preventDefault()
    localStorage.removeItem('userData');
    props.setAuth(false)
    navigate('/');
  }
 
  return (
    <div className='userMain'>
      <Header user={user}/>
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