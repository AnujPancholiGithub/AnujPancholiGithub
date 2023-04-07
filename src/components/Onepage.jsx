import React, { useState } from 'react';
import Home from "./Home";
import AboutComponent from "./About"
import Navbar from "./Navbar";
import Resume from "./Resume";
import Skills from './Resume/Skills';
import Test from "./Test";
import Works from "./Works";
import ContactMe from "./ContactMe";
import { Box } from "@chakra-ui/react";


function OnePage() {
    return (
        <Box>
            <Home />
            <AboutComponent />
            <Works />
            <Resume />
            <Skills />
            <ContactMe />
        </Box>
    );
};

export default OnePage;