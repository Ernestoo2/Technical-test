import React from "react";

import Accessories from "./NavElement/Accessories";
import Clothing from "./NavElement/Clothing";
import Services from "./NavElement/Services";
import NavBar from "./NavBar";
import Categories from "./NavElement/Categories";
import { 
    
    Route, 
    Routes } from 'react-router-dom';
const RouTes = () => {
    return (
        <div>
            <NavBar/>
            <Routes>
                <Route path="/Category" element={<Categories/>} ></Route>
                <Route path="/accessories" element={<Accessories/>}></Route>
                <Route path="/services" element={<Services/>}></Route>
                <Route path="/clothing" element={<Clothing/>}></Route>
            </Routes>
        </div>
        
            
            
       
       
        
    );
};

export default RouTes;