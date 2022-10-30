import React from 'react'
import './css/header.css'
import './css/hero.css'
import './css/sectionOne.css'
import './css/menu.css'
import './css/about.css'
import './css/popup.css'
import './css/product.css'
import "react-multi-carousel/lib/styles.css";

import Home from './pages/Home'
import Product from './pages/Product'
import ReactDOM from "react-dom/client";
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
      </Routes>
    </BrowserRouter>
  )
}

export default App