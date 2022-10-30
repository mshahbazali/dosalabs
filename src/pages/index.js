import React from 'react'
import {
    BrowserRouter,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from './Home'
import Product from './Product'
export default function index() {
    return (
        <BrowserRouter>
            <Route path="/" element={Home} />
            <Route path="/product" element={Product} />
        </BrowserRouter>
    )
}
