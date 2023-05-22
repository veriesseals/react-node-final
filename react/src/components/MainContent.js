import React from "react";
import FeaturedSteak from "./img/featured-ribeye-sm.jpg";
import SteakMealInput from "./SteakMealInput"


function MainContent() {
    return (
    <div>
        <img src={FeaturedSteak} className="FeaturedSteak" alt="Featured Steak"/>

        <div><hr></hr></div>

        <section class="container">
            <div class="row">
                <h2 id="steakWelcome">Welcome to Log Your Favorite Steak</h2>
            </div>
        </section>

        <section class="container">
            <div class="row">
                <hr></hr>
            </div>
        </section>
    </div>
    
    )
}

export default MainContent;
