import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/header'
import Footer from './components/footer'
import Home from './pages/home'
import List from './pages/list'
import Display from './pages/display'


ReactDOM.createRoot(document.querySelector('#root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/list' element={<List />}></Route>
        <Route path='/display' element={<Display />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
)
