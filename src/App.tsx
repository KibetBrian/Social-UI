import React, { useEffect, useState } from 'react'
import SignUpPage from './Pages/SignUpPage/SignUpPage'
import axios from 'axios';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import SignInPage from './Pages/SignInPage/SignInPage'
import HomePage from './Pages/HomePage/HomePage';
function App() {
  const [user, setUser] = useState(false);

  useEffect( ()=>
  {
      const fetchData  = async ()=>
      {
        const userData = await axios.get('http://localhost:8080/auth/login-success');
        if(userData.status ===200)
        {
          setUser(true);
        }
      }
      fetchData();
  });
  return (
    <BrowserRouter>    
    <div className='app'>
      <Routes>
        <Route path = {'/'} element = {user ? <HomePage/>: <SignInPage />}/>
        <Route path = {'/sign-in'} element = {user ? <Navigate to = {'/'}/>: <SignInPage />} />
        <Route path = {'/sign-up'} element = {user ? <Navigate to = {'/'}/>: <SignUpPage />} />
        <Route path = {'*'} element ={user ? <HomePage/>: <SignInPage />}/>
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App



