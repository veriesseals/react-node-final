import React from "react";
import Header from "./components/Header";
import MainContent from  "./components/MainContent";
import SteakMealInput from './components/SteakMealInput';
import Footer from "./components/Footer";



function App() {
    return (
        <div>
            <Header />
            <MainContent />
            <SteakMealInput />
            <Footer />
        </div>
    )
};

export default App;