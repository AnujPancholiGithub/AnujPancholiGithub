import React, { useState } from 'react';
import Home from "./Home";
import AboutComponent from "./About"
import Navbar from "./Navbar";
import Resume from "./Resume";
import Test from "./Test";
import Works from "./Works";
import ContactMe from "./ContactMe";
import OnePage from "./Onepage";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@chakra-ui/react';

function BackGroundComponent() {
    let backgroundImage = "https://imgpile.com/images/hivnrj.jpg";



    return (
        <Box backgroundImage={`url(${backgroundImage})`}
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            h="100%">
            <div className="bg-no-repeat" >
                <div className="z-50 ">
                    <div className="container">
                        <Navbar />
                        <BrowserRouter>
                            <Routes>
                                <Route exact path="/" element={<OnePage />} />
                                <Route exact path="/onepage" element={<OnePage />} />
                                <Route exact path="/home" element={<OnePage />} />
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
        </Box>

    )
}
export default BackGroundComponent;