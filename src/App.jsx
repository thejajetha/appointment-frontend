import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="signup" element={<SignUp></SignUp>}></Route>
      <Route path='' element={<SignIn></SignIn>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
