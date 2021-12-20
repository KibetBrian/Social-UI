import React, {useState } from 'react'
import SignUpPage from './Pages/SignUpPage/SignUpPage'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import SignInPage from './Pages/SignInPage/SignInPage'
import HomePage from './Pages/HomePage/HomePage';
import TopBar from './Components/TopBar/TopBar';
function App() {
  const [user, setUser] = useState(true);
  return (
    <BrowserRouter>    
    <div className='app'>
      <TopBar />
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



