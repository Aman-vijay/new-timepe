import 'react-router-dom';
import React from 'react';
import "./Home.css";
import Navbar from './Navbar';
import Footer from './Footer';
import MainComp from './MainComponent';


export default function Homepage() {

  return (
    <div>

       <Navbar />
       <MainComp />
       <Footer />
       
    </div>
);
}

