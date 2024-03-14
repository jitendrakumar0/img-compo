import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import About from './pages/about/About'
import Sidebar from './pages/sidebar/Sidebar'
import Uicomponents from './pages/uicomponents/Uicomponents'
import Layout from './pages/layout/Layout'

const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about-us' element={<About/>}></Route>
        <Route path='/side-bar' element={<Sidebar/>}></Route>
        <Route path='/ui-component' element={<Uicomponents/>}></Route>
        <Route path='/layout' element={<Layout/>}></Route>


      </Routes>
      {/* <Footer/> */}
    </BrowserRouter>
  )
}

export default App