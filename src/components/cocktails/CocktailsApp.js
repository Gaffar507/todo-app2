import React from 'react';
import { BrowserRouter,Routes, Route, Link, } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Error from './pages/Error';
import Navbar from './components/Navbar';
import SingleCocktail from './pages/SingleCocktail';


import './cocktailsApp.css';
const CocktailsApp = () => {
    return (
        <BrowserRouter>
        <Navbar/>
            <Routes>
                <Route exact path="/" element={<Home/>}></Route>
                <Route  path="/about" element={<About/>}></Route>
                <Route  path="/home/:id" element={<SingleCocktail/>}></Route>
                <Route  path="*" element={<Error/>}></Route>
            </Routes>
        </BrowserRouter>
    );
};

export default CocktailsApp;
