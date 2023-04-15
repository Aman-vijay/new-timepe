import React from 'react';
import 'react-router-dom';
import "./Home.css";
import  MarketPlace  from './Marketplace';
import Features from './Features';
import GetStarted from './GetStarted.js';
import Serve from './serve';

export default function MainComp(){
    return(
        <div>
            
            <GetStarted/>
            <Features/>
            {/* <Serve/> */}
            <MarketPlace/>
    

        </div>
    );
}
