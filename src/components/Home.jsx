import React from "react";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Box, Flex, Image, Text, useMediaQuery, Heading, HStack } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaDribbble } from "react-icons/fa";
import DownloadButton from "./DonloadButton"
import Profile from "./Profile"

const SocialLink = ({ href, color, children }) => (
    <Box
        as="a"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        rounded="full"
        bg={color}
        display="inline-flex"
        alignItems="center"
        justifyContent="center"
        w={10}
        h={10}
    >
        {children}
    </Box>
);

function Home() {


    return (
        <>
            <Box
                bg="homeBg"
                minH="100vh"
                pb={{ base: 0, md: 16 }}
                w="full"
                mt={16}
            >
                <Flex
                    flexDir="column"
                    align="center"
                    h={{ base: "100vh", md: "90vh", lg: "80vh", xl: "71vh" }}
                    justify="center"
                    data-aos="fade"
                    aos-animate
                >
                    <Image
                        rounded="full"
                        w={{ base: "250px", "2xl": "280px" }}
                        h={{ base: "250px", "2xl": "280px" }}
                        src="https://imgpile.com/images/hswPNc.jpg"
                        alt=""
                    />
                    <Box textAlign="center" mt={1}>
                        <Profile />
                        <DownloadButton />
                    </Box>
                </Flex>
            </Box>
            <div className="Toastify" />
        </>
    )
};

export default Home;