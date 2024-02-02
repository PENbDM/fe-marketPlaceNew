import React, { useState } from 'react';
import './user.css'
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../components/Logo/Logo';
import axios from 'axios';
import { useContext } from 'react';
import { UserContext } from '../../Context';

function User() {
  const userConsume = useContext(UserContext)
  
  const [username, setUsername] = useState('');
  const [avatar, setAvatar] = useState('');
  const [isLoginMode, setLoginMode] = useState(true);
  const [errorLog,setErrorLogin] = useState('')
  const navigate = useNavigate();

  const clearState = () => {
    setUsername('');
    setAvatar('');
  };

  const handleToggle = () => {
    clearState();
    setLoginMode(!isLoginMode);
  };

  const handleSubmit =  (e) => {
    e.preventDefault();
    if (isLoginMode) {
      axios
        .get(`https://nc-marketplace-sem-1.onrender.com/api/users/${username}`)
        .then((response) => {
          if (response.data && response.data.user) {
            setErrorLogin('')
            localStorage.setItem('userData', JSON.stringify(response.data.user));
            userConsume.setAuth(true)
            navigate('/user'); 

          } else {
            console.log(response);
          }

        })
        .catch((error) => {
          if (error.response) {
            setErrorLogin(error.response.data.msg)
            console.error('Response data:', error.response.data);
          }
        });
    } else {
      const registrationData = {
        username: username,
        avatar_url: avatar,
      };
      axios
      .post('https://nc-marketplace-sem-1.onrender.com/api/users', registrationData, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        axios
        .get(`https://nc-marketplace-sem-1.onrender.com/api/users/${response.data.user.username}`).then((res)=>{
          setErrorLogin('')
          localStorage.setItem("userData", JSON.stringify(response.data.user));
          userConsume.setAuth(true)
          navigate('/user');
        })
      })
      .catch((error) => {
        console.error('Registration failed:', error);

        if (error.response) {
          console.error('Response status:', error.response.status);

          if (error.response.data && error.response.data.msg) {
            setErrorLogin(error.response.data.msg)
            console.error('Error message:', error.response.data.msg);
          } else {
            console.error('Response data:', error.response.data);
          }
        } else if (error.request) {
          console.error('Request data:', error.request);
        } else {
          console.error('Error message:', error.message);
        }
      });
  }
};

  return (
    <div className='UserBlock'>
      <div className='userHeader'>
      <Link to="/" className="logo-link">
        <Logo/>
        </Link>
      </div>

      <div className='userAuth'>
        <form className='formM' onSubmit={handleSubmit}>
          <p className='title'>{isLoginMode ? 'Login' : 'Register'}</p>

          <label>User name</label>
          <input
            type='text'
            placeholder='Enter user name'
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {errorLog.length===0 ? null : <p className='errorLogin'>{errorLog}</p>}

          {!isLoginMode && (
            <>
              <label>Avatar Url</label>
              <input
                type='text'
                placeholder='Enter avatar url'
                value={avatar}
                onChange={(e) => setAvatar(e.target.value)}
              />
            </>
          )}

          <div className='blockInfo'>
            <p>{isLoginMode ? "Don't have an account?" : 'Already have an account?'}</p>
            <button type='button' onClick={handleToggle}>
              {isLoginMode ? 'Register' : 'Login'}
            </button>
          </div>

          <div className='submitBlock'>
            <button type='submit'>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default User;
