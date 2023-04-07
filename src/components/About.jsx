import React from "react";
import Card from "./Cards"
import { Box, Text, Heading } from "@chakra-ui/react";

function AboutComponent() {
    const cards = [
        {
            imgSrc:
                "https://bostamireact.ibthemespro.com/static/media/icon-6.7a458dd3dce6df96d462489320d4a456.svg",
            title: "Full-stack Web Developer",
            description:
                "I'm a full-stack web developer and UI/UX designer with expertise in JavaScript, NodeJS, React, and other exciting languages.",
            bgColor: "#FCE5CD"
        },
        {
            imgSrc:
                "https://bostamireact.ibthemespro.com/static/media/icon-6.7a458dd3dce6df96d462489320d4a456.svg",
            title: "Creative Problem Solver",
            description:
                "My specialty is turning complex problems into simple, beautiful, and intuitive designs that convey your message and identity creatively.",
            bgColor: "#D9E6F5"
        },
        {
            imgSrc:
                "https://bostamireact.ibthemespro.com/static/media/icon-6.7a458dd3dce6df96d462489320d4a456.svg",
            title: "Front-end Development Expert",
            description:
                "On the front-end, I excel in developing visually stunning and responsive web applications with a keen eye for detail.",
            bgColor: "#E6F8E0"
        },
        {
            imgSrc:
                "https://bostamireact.ibthemespro.com/static/media/icon-6.7a458dd3dce6df96d462489320d4a456.svg",
            title: "Backend Development Specialist",
            description:
                "In the backend, I'm skilled in Node.js and Express.js and have hands-on experience working with APIs, CRUD operations, Axios, JSON, and JWT.",
            bgColor: "#F4F1D9"
        }
    ];



    return (
        <Box >
            <Box>
                {/* <Text fontFamily={"body"}>
                    Ram ram ram ram ram ram ram ram ram ram ram ram ram ram ram ram ram ram ram
                </Text> */}
            </Box>
            <div className="bg-homeBg min-h-screen  dark:bg-homeBg-dark bg-no-repeat bg-center bg-cover bg-fixed  md:pb-16 w-full">
                <section>
                    <div className="container lg:rounded-2xl bg-white dark:bg-[#B7E6FC]  px-4 sm:px-5 md:px-10 lg:px-20">
                        <div data-aos="fade" className="aos-init aos-animate">
                            <div className="py-1">
                                <div className="grid grid-cols-12 md:gap-10 pt-4 md:pt-[40px] items-center">
                                    <div className="col-span-12 md:col-span-4">
                                        <img
                                            className="w-full md:w-[330px] md:h-[400px] object-cover overflow-hidden rounded-[35px] mt-20
                                            sm:mb-4
                                            md:mb-2 lg:mb-64"
                                            src="https://imgpile.com/images/hPVf7M.jpg"
                                            alt=""
                                        />
                                    </div>
                                    <div className="col-span-12 md:col-span-8 space-y-2.5">
                                        <div className=" md:mr-12 xl:mr-16">
                                            <Heading as="h3" size="xl" fontWeight="medium" fontFamily={"heading"} colorScheme="dark" mb="2.5">
                                                Who am I?
                                            </Heading>
                                            <p className="text-gray-lite  dark:text-color-910 leading-7">
                                                I'm a creative and dedicated full-stack web developer and UI/UX designer based in Rajasthan, India. I specialize in turning complex problems into simple, beautiful, and intuitive designs that bring across your message and identity in the most creative way possible. With expertise in JavaScript, NodeJS, React, and other exciting languages, I'm always seeking new challenges and opportunities to grow as a developer.


                                            </p>
                                            <p className="text-gray-lite leading-7 mt-2.5 dark:text-color-910">
                                                On the front-end, I have a keen eye for detail and excel in developing visually stunning and responsive web applications. I'm experienced in using JavaScript, CSS, HTML, ChakraUI, and Tailwind CSS to create dynamic and interactive web interfaces. In the backend, I'm skilled in Node.js and Express.js and have hands-on experience working with APIs, CRUD operations, Axios, JSON, and JWT. If you're looking for a passionate and hard-working developer to join your team, let's connect and start building something amazing together!
                                            </p>
                                        </div>
                                        <div>
                                            <h3 className="text-4xl font-medium my-5 dark:text-white" fontFamily="heading">
                                                Personal Info
                                            </h3>
                                            <div className=" grid grid-cols-1 sm:grid-cols-2 gap-6">
                                                <div className="flex">
                                                    <span className="text-oriange dark:bg-color-990 shadow-icon mr-2.5 flex items-center justify-center rounded-md text-2xl w-12 text-">
                                                        <svg
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            strokeWidth={0}
                                                            viewBox="0 0 320 512"
                                                            height="1em"
                                                            width="1em"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z" />
                                                        </svg>
                                                    </span>
                                                    <div className="space-y-1">
                                                        <p className="text-xs text-gray-lite dark:text-color-910">
                                                            Linkedin
                                                        </p>
                                                        <h6 className="font-medium dark:text-white">
                                                            <a
                                                                className="hover:text-[#FA5252] duration-300 transition"
                                                                href="tel:+1234567890"
                                                            >
                                                                Anuj Pancholi
                                                            </a>
                                                        </h6>
                                                    </div>
                                                </div>
                                                <div className="flex">
                                                    <span className="text-oriange-lite dark:bg-color-990 shadow-icon mr-2.5 flex items-center justify-center rounded-md text-2xl w-12 text-">
                                                        <svg
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            strokeWidth={0}
                                                            viewBox="0 0 384 512"
                                                            height="1em"
                                                            width="1em"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z" />
                                                        </svg>
                                                    </span>
                                                    <div className="space-y-1">
                                                        <p className="text-xs text-gray-lite dark:text-color-910">
                                                            Location
                                                        </p>
                                                        <h6 className="font-medium dark:text-white">
                                                            Jaipur, Rajasthan, India
                                                        </h6>
                                                    </div>
                                                </div>
                                                <div className="flex">
                                                    <span className="text-green dark:bg-color-990 shadow-icon mr-2.5 flex items-center justify-center rounded-md text-2xl w-12 text-">
                                                        <svg
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            strokeWidth={0}
                                                            viewBox="0 0 512 512"
                                                            height="1em"
                                                            width="1em"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path d="M176 216h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16H176c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16zm-16 80c0 8.84 7.16 16 16 16h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16H176c-8.84 0-16 7.16-16 16v16zm96 121.13c-16.42 0-32.84-5.06-46.86-15.19L0 250.86V464c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V250.86L302.86 401.94c-14.02 10.12-30.44 15.19-46.86 15.19zm237.61-254.18c-8.85-6.94-17.24-13.47-29.61-22.81V96c0-26.51-21.49-48-48-48h-77.55c-3.04-2.2-5.87-4.26-9.04-6.56C312.6 29.17 279.2-.35 256 0c-23.2-.35-56.59 29.17-73.41 41.44-3.17 2.3-6 4.36-9.04 6.56H96c-26.51 0-48 21.49-48 48v44.14c-12.37 9.33-20.76 15.87-29.61 22.81A47.995 47.995 0 0 0 0 200.72v10.65l96 69.35V96h320v184.72l96-69.35v-10.65c0-14.74-6.78-28.67-18.39-37.77z" />
                                                        </svg>
                                                    </span>
                                                    <div className="space-y-1">
                                                        <p className="text-xs text-gray-lite dark:text-color-910">
                                                            Email
                                                        </p>
                                                        <h6 className="font-medium dark:text-white">
                                                            <a
                                                                className="hover:text-[#9e9797] duration-300 transition"
                                                                href="mailto:ibthemes21@gmail.com"
                                                            >
                                                                anujpanholi@yahoo.com
                                                            </a>
                                                        </h6>
                                                    </div>
                                                </div>
                                                <div className="flex">
                                                    <span className="text-color-50 dark:bg-color-990 shadow-icon mr-2.5 flex items-center justify-center rounded-md text-2xl w-12 text-">
                                                        <svg
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            strokeWidth={0}
                                                            viewBox="0 0 448 512"
                                                            height="1em"
                                                            width="1em"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path d="M148 288h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm108-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 96v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96-260v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z" />
                                                        </svg>
                                                    </span>
                                                    <div className="space-y-1">
                                                        <p className="text-xs text-gray-lite dark:text-color-910">
                                                            Birthday
                                                        </p>
                                                        <h6 className="font-medium dark:text-white">
                                                            7, September
                                                        </h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {
                                <div className="pb-12">
                                    <h3 className="text-[35px] dark:text-white font-medium pb-5">
                                        What I do!
                                    </h3>
                                    <div className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                                        {cards.map((card, i) => (
                                            <Card key={i} {...card} />
                                        ))}
                                    </div>
                                </div>
                            }

                        </div >
                    </div >

                </section >
            </div >

            <div className="Toastify" />
        </Box>
    )
};

export default AboutComponent;