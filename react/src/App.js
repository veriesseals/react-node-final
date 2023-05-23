import React from "react";
import Header from "./components/Header";
import MainContent from  "./components/MainContent";
import SteakMealInput from "./components/SteakMealInput";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";



function App() {
    return (
        <div>
            <Header />
            <Routes>
                {/* <Route path="/" element={<Home/>}/> */}
                {/* <Route path="/About" element={<Logged Meals/>}/> */} */}
                {/* <Route path="./About" element={<About/>}/> */}
            </Routes>
            <MainContent />
            <SteakMealInput />
            <Footer />
        </div>
    )
};

export default App;