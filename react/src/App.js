import React from "react";
import Header from "./components/Header";
import MainContent from  "./components/MainContent";
import SteakMealInput from "./components/SteakMealInput";
import About from "./components/About";
import Footer from "./components/Footer";


function App() {
    return (
        <div>
            <Header />
            <MainContent />
            <SteakMealInput />
            <About />
            <Footer />
        </div>
    )
};

export default App;