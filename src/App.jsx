import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Store from './Pages/Store'
import Mac from './Pages/Mac'
import IPads from './Pages/IPads'
import IPhone from './Pages/IPhone'
import Watch  from './Pages/Watch'
import AirPod from './Pages/AirPod'
import Tvhome from './Pages/Tvhome'
import Entertainment from './Pages/Entertainment'


function App() {

  return (
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path='/' element={<Store/>}></Route>
    <Route path='/store' element={<Store/>} ></Route>
    <Route path='/mac' element={<Mac/>} ></Route>
    <Route path='/ipad'  element={<IPads/>} ></Route>
    <Route path='/iphone' element={<IPhone/>} ></Route>
    <Route path='/watch' element={<Watch/>} ></Route>
    <Route path='/airpods' element={<AirPod/>} ></Route>
    <Route path='/tvhome' element={<Tvhome/>} ></Route>
    <Route path='/entertainment' element={<Entertainment/>} ></Route>
    <Route path='/accessories' element={<h2 className='p-10'>Welcom to accessories</h2>} ></Route>
    <Route path='/support' element={<h2 className='p-10'>Welcom to support</h2>} ></Route>
</Routes>
<Footer/>
   
   </BrowserRouter>
  )
}

export default App
