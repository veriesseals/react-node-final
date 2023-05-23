import React from "react";
import axios from "axios";
import {useState} from 'react';


function SteakMealInput() {
    // This will be a state to handle the objects.
    // -----------------------------------------------
    const [post, setPost] = useState({
        fName: '',
        lName:'',
        email:'',
        restuarant:'',
        steak:'',
        image:''

    })

    // This will handle the data from the inputs
    // -----------------------------------------------
    const handleInput = (event) => {
        setPost({...post, [event.target.name]: event.target.value})

    }

    // This will handle the submit button
    // -----------------------------------------------
    function handleSubmit(event) {
        event.preventDefault()
        // console.log(post)
        // Create a PORT request using Axios and Pass data from the post object
        // API END POINT http://localhost:3002/favSteak/api
        axios.post('http://localhost:3002/favSteak/api/create', post)
        // Return Response
        .then(response => console.log(response))
        // If not a Respnse return an error
        .catch(err => console.log(err))

        
    }

    return (
        <div className="wrapper">
            <div className="container">
                <div className="row">
                    <form onSubmit={handleSubmit}>
                        {/* Inputs */}
                        {/* nameGroup */}
                        <div className="container nameGroup">
                            <div className="col-md-4">
                                    {/* First Name */}
                                    <div class="input-group input-group-sm mb-3">
                                        <span class="input-group-text" id="fName">First Name</span>
                                        <input type="text" class="form-control" onChange={handleInput} name="fName" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" required/>
                                    </div>
                            </div>
                            <div className="col-md-4">
                                    {/* Last Name */}
                                    <div class="input-group input-group-sm mb-3">
                                        <span class="input-group-text" id="lName">Last Name</span>
                                        <input type="text" class="form-control" onChange={handleInput} name="lName" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" required/>
                                    </div>
                            </div>
                        </div>
                            {/* ------------------------------------------- */}
                        {/* Gather Info Group */}
                        <div className="container">
                            <div className="gatherInfoGroup">
                                <div className="col-md-4">
                                    {/* Email */}
                                    <div class="input-group input-group-sm mb-3">
                                        <span class="input-group-text" id="email">Email</span>
                                        <input type="email" class="form-control" onChange={handleInput} name="email" id="email" placeholder="name@example.com" required/>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                {/* Restuarant */}
                                    <div class="input-group input-group-sm mb-3">
                                        <span class="input-group-text" id="restuarant">Favorite Restuarant</span>
                                        <input type="text" class="form-control" onChange={handleInput} name="restuarant" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" required/>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    {/* Favorite Steak */}
                                    <div class="input-group input-group-sm mb-3">
                                        <span class="input-group-text" id="steak">Favorite Steak</span>
                                        <input type="text" class="form-control" onChange={handleInput} name="steak" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" required/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                        <div className="container">
                            <div className="col">
                                {/* Image URL */}
                                <div class="input-group input-group-sm mb-3">
                                    <span class="input-group-text" id="imageSub">Submit an image of your favorite Steak</span>
                                    <input type="text" class="form-control" onChange={handleInput} name="image" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
                                </div>
                            </div>
                        </div>
                        </div>
                        {/* Button */}
                        <button className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default SteakMealInput;




