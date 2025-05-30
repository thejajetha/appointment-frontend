import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import AppointmentCreate from './components/AppointmentCreate'
import AppointmentAll from './components/AppointmentAll'
import Header from './components/Header'


function App() {
  return (
    <BrowserRouter>
    <Header></Header>
    <Routes>
      <Route path="signup" element={<SignUp></SignUp>}></Route>
      <Route path='' element={<SignIn></SignIn>}></Route>
      <Route path="appointment-create" element={<AppointmentCreate></AppointmentCreate>}></Route>
      <Route path="appointment-all" element={<AppointmentAll></AppointmentAll>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
