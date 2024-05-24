import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/header'
import Footer from './components/footer'
import Home from './pages/home'


ReactDOM.createRoot(document.querySelector('#root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  </React.StrictMode>,
)
