import React, { useState } from 'react';
import Home from "./Home";
import AboutComponent from "./About"
import Navbar from "./Navbar";
import Resume from "./Resume";
import Test from "./Test";
import Works from "./Works";
import ContactMe from "./ContactMe";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function BackGroundComponent() {
    let backgroundImage = "https://imgpile.com/images/hivnrj.jpg";



    return (
        <div style={{ backgroundImage: `url(${backgroundImage})` }} className="bg-no-repeat" >
            <div className="z-50 ">
                <div className="container">
                    <Navbar />

                    <BrowserRouter>
                        <Routes>
                            <Route exact path="/" element={<Home />} />
                            <Route exact path="/home" element={<Home />} />
                            <Route path="/about" element={<AboutComponent />} />
                            <Route path="/resume" element={<Resume />} />
                            <Route path="/works" element={<Works />} />
                            <Route path="/Contact" element={<ContactMe />} />
                            <Route path="/test" element={<Test />} />
                        </Routes>
                    </BrowserRouter>

                </div>
            </div>
        </div>

    )
}
export default BackGroundComponent;