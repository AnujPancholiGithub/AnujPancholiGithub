

import React, { useState } from 'react';
import { Box, SimpleGrid } from "@chakra-ui/react";
import CardDetails from './Work/CardDetails';

const projectsData = [
    {
        title: "Nykaa Clone",
        description: "Developed functional e-commerce clone of Nykaa in a week. Collaborated effectively with team to overcome challenges, utilizing problem-solving and critical thinking skills for project success",
        fullDescription: "As a motivated and skilled developer, I undertook the challenge of building a fully functional e-commerce clone of Nykaa in just one week, showcasing my agility and expertise. Working collaboratively with my team members, I effectively leveraged our collective knowledge and strengths to overcome any obstacles and achieve our shared project goals. With a sharp problem-solving mindset and exceptional critical thinking skills, I ensured the project's success, delivering high-quality results.",
        techStack: "HTML, CSS, JavaScript",
        imageUrl: "https://miro.medium.com/v2/resize:fit:640/1*i7LYX4Wy9Lkenz4c8fq0Hw.gif",
        liveUrl: "https://code735.github.io/Nykaa_Clone/",
        githubUrl: "https://github.com/code735/Nykaa_Clone",
        date: "12/2022 - 12/2022",
        blogLink: "https://medium.com/username/my-nykaa-clone-project-12345",
    },
    {
        title: "Airbnb Clone",
        description: "Collaborated with 5-person team to develop an Airbnb-inspired web app using HTML, CSS, and JavaScript. Completed project remotely within a tight deadline.",
        fullDescription: "As part of a dynamic 5-person team, I developed a cutting-edge web application that emulated Airbnb's online marketplace. My role included utilizing HTML, CSS, and JavaScript to create an intuitive user experience. I excelled in communicating with my team members remotely, ensuring seamless collaboration and timely project completion. Through my technical expertise and ability to work effectively in a fast-paced environment, I contributed significantly to the project's success.",
        techStack: "HTML, CSS, JavaScript",
        imageUrl: "https://imgpile.com/images/hscqt1.gif",
        liveUrl: "https://dashing-lokum-307e4a.netlify.app/html/product",
        githubUrl: "https://github.com/Prathameshschavan/Project_Airbnb.com",
        date: "01/2023 - 01/2023",
        blogLink: "",
    },
    {
        title: "IKEA Clone",
        description: "Built IKEA-inspired e-commerce web app with 3-person team in one week. Key contributions: Cart, Wishlist Page, and Footer development.",
        fullDescription: "I played a crucial role in developing a web application that replicated IKEA's e-commerce platform with a team of 3 members. I utilized Git and GitHub for effective code collaboration, and with my contributions, we successfully delivered the project within a week. My key responsibilities included designing and building essential features such as the Cart, Wishlist Page, and Footer, demonstrating my proficiency in React, Redux, and Chakra UI. With a keen eye for detail, problem-solving skills, and a results-driven mindset, I made a significant contribution to the project's success, exhibiting my ability to work collaboratively and efficiently with my team.",
        techStack: "React, Redux, JavaScript, CSS, ChakraUI",
        imageUrl: "https://imgpile.com/images/hslhRu.gif",
        liveUrl: "https://ikea-clone.netlify.app/",
        githubUrl: "https://github.com/AnujPancholiGithub/Ikea-clone",
        date: "02/2023 - 02/2023",
        blogLink: "",
    }
];

function Works() {

    return (
        <Box mt={{ sm: 1, md: 2, lg: 3 }}>
            <Box display={"flex"} justifyContent={"center"}>
                <h2 className="after-effect text-4xl after:left-44 mb-[40px] mt-12 lg:mt-0 text-[#6a6dfc]">
                    PROJECTS
                </h2>
            </Box>
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} gap={8} pl={8} pr={8}>

                {projectsData.map((project) => {
                    return <CardDetails title={project.title} description={project.description} techStack={project.techStack} imageUrl={project.imageUrl} liveUrl={project.liveUrl} githubUrl={project.githubUrl} fullDescription={project.fullDescription} />
                })}

            </SimpleGrid>

        </Box>
    )
};

export default Works;