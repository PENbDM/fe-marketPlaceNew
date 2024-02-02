import { useState,useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { createContext } from 'react'
import { UserContext } from './Context.jsx'
import ItemsPage from "./Pages/Items";
import Cart from "./Pages/Cart";
import Home from './Pages/Home/Home';
import User from "./Pages/User/User";
import UserMain from "./Pages/User/UserMain";
function App() {
  const user = JSON.parse(localStorage.getItem('userData'));
  const [isAuth,setAuth] = useState(false)
  useEffect(()=>{
    if(user!==null){
      setAuth(true)
    }
  })
  return (
        <UserContext.Provider value={{user,setAuth}} >
        <Routes>
        <Route path="/" element={<Home />} />
        {user ? (
          <Route path="/auth" element={<Navigate to="/user" />} />
        ) : (
          <Route path="/auth" element={<User setAuth={setAuth} />} />
        )}

        {user ? (
          <Route path="/user" element={<UserMain setAuth={setAuth} />} />
        ) : (
          <Route path="/user" element={<Navigate to="/auth" />} />
        )}
        {user ? (
          <Route path="/cart" element={<Cart/>}/>
        ) : (
          <Route path="/cart" element={<Navigate to='/'/>}/>
        )}
        {user ? (
          <Route path="/items" element={<ItemsPage />}/>
        ) : (
          <Route path="/items" element={<Navigate to='/'/>}/>
        )}
      </Routes>
      </UserContext.Provider>

  
  );
}

export default App;

