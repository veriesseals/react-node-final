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
                <h2 id="steakWelcome">Welcome to Log Your Favorite Steak!</h2>
            </div>
        </section>

        <section class="container">
            <div class="row">
                <hr></hr>
            </div>
        </section>

        {/* Form */}
        <main>
            <section class="container">
                <div class="row">
                
                    <form action="#" id="steak-form">
                        {/* <!-- Enter your name --> */}
                        <div class="persoalInfo d-flex justify-content-between">
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label for="firstName" class="form-label">What's Your First Name?</label>
                                    <input type="text" class="form-control" id="firstName" placeholder="Please type your first name"/>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label for="lastName" class="form-label">What's Your Last Name?</label>
                                    <input type="text" class="form-control" id="lastName" placeholder="Please type your last name"/>
                                </div>
                            </div>
                        </div>

                        
                        <div class="row">
                            
                            <div class="col-md-5">
                                <div class="input-group mb-3">
                                    <input type="email" class="form-control" placeholder="Enter Steak Lovers Email" aria-label="Steak Lovers email" aria-describedby="basic-addon2" id="steakLoversEmail" />
                                    <span class="input-group-text">@example.com</span>
                                </div>
                            </div>

                            
                            <div class="col-md-7">
                                <div class="dropdown" id="restuarant-group">
                                    <label for="restuarant">Pick your favorite top 10 Restuarant:</label>
                                    <select id="restuarant">
                                        <option value="Baires Grill Las Olas">Baires Grill Las Olas</option>
                                        <option value="Morton's The Steakhouse">Morton's The Steakhouse</option>
                                        <option value="Fleming's Prime Steakhouse">Fleming's Prime Steakhouse</option>
                                        <option value="StripSteak by Micheal Mina">StripSteak by Micheal Mina</option>
                                        <option value="Edge Steak and Bar">Edge Steak and Bar</option>
                                        <option value="Ruth's Chris Steakhouse">Ruth's Chris Steakhouse</option>
                                        <option value="STK Steakhouse">STK Steakhouse</option>
                                        <option value="The Capital Grille">The Capital Grille</option>
                                        <option value="RED South Beach">RED South Beach</option>
                                        <option value="Ole Ole Steak House">Ole Ole Steak House</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <section class="container">
                            <div class="row">
                                <hr></hr>
                            </div>
                        </section>

                        <div class="row">
                            <div class="col-md-6">
                                <div class="dropdown" id="steak-group">
                                    <label for="steak">Select your favorite steak:</label>
                                    <select id="steak">
                                        <option value="Flank Steak">Flank Steak</option>
                                        <option value="New York Strip">New York Strip</option>
                                        <option value="Skirt Steak">Skirt Steak</option>
                                        <option value="Ribeye Steak">Ribeye Steak</option>
                                        <option value="Prime Rib">Prime Rib</option>
                                        <option value="Tenderloin">Tenderloin Steak</option>
                                        <option value="Sirloin">Sirloin</option>
                                        <option value="Porthouse">Porthouse</option>
                                        <option value="T-BONE Steak">T-BONE Steak</option>
                                        <option value="Filet Mignon">Filet Mignon</option>
                                    </select>
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="row">
                                    <label for="inputImage">Enter Image URL</label>
                                    <input type="url" id="inputImage" name="inputImage" placeholder="Enter Image URL"/>
                                </div>
                            </div>

                            
                        </div>
                        
                       
                        <section class="container">
                            <div class="mb-3 row">
                                <div class="col">
                                    <input type="submit" id="submitBtn" class="btn btn-light" value="Submit"/>
                                </div>
                            </div>
                        </section>

                    </form>
                    
                    <section class="container">
                        <div class="row">
                            <hr></hr>
                        </div>
                    </section>
                    
                    <div class="row">
                        <h2 id="steakCardsTitle">Steak Cards</h2>
                    </div>
                </div>
            </section>

            
            <section class="container">
                <div class="row" id="steakCardDisplay">
                    {/* <!-- <div class="card mb-3">
                        <div class="row g-0">
                        <div class="col-md-4">
                            <img src="${this.show.inputImage}" class="img-fluid rounded-start" alt="...">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                            <h2 class="card-title">${this.favChoice.steak}</h2>
                            <p class="card-text">${this.favChoice.firstName}</p>
                            <p class="card-text">${this.favChoice.lastName}</p>
                            <p class="card-text">${this.favChoice.email}</p>
                            <p class="card-text">${this.favChoice.restuarant}</p>
                            </div>
                        </div>
                        </div>
                    </div> --> */}
                </div>
            </section>
        </main>
    
        
    </div>

    
    );
}

export default MainContent;
