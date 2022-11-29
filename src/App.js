import React from 'react'
import './css/header.css'
import './css/hero.css'
import './css/sectionOne.css'
import './css/menu.css'
import './css/about.css'
import './css/popup.css'
import './css/product.css'
import './css/location.css'
import "react-multi-carousel/lib/styles.css";

import Home from './pages/Home'
import Product from './pages/Product'
import { Menu } from './components'
import {
  BrowserRouter,
  RouterProvider,
  Route,
  Routes,
} from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product/:slug' element={<Product />} />
        <Route path='/menus' element={<Menu />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App