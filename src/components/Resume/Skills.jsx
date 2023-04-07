import { Box, Grid, Text, Heading, Button, Flex, SimpleGrid, Stack } from "@chakra-ui/react";

const ProgressBar = ({ skill, percentage, color }) => {
    return (
        <Box mb="7">
            <Box display="flex" justifyContent="space-between" py="1">
                <Box
                    as="span"
                    fontSize="base"
                    fontWeight="semibold"
                    color="gray-lite"
                    className="dark:text-[#A6A6A6]"
                >
                    {skill}
                </Box>
                <Box
                    as="span"
                    fontSize="base"
                    fontWeight="semibold"
                    pr="5"
                    color="gray-lite"
                    className="dark:text-[#A6A6A6]"
                >
                    {percentage}%
                </Box>
            </Box>
            <svg
                className="rc-progress-line"
                viewBox="0 0 100 1"
                preserveAspectRatio="none"
            >
                <path
                    className="rc-progress-line-trail"
                    d="M 0.5,0.5 L 99.5,0.5"
                    strokeLinecap="round"
                    stroke="#EDF2F2"
                    strokeWidth={1}
                    fillOpacity={0}
                />
                <path
                    className="rc-progress-line-path"
                    d="M 0.5,0.5 L 99.5,0.5"
                    strokeLinecap="round"
                    stroke={color}
                    strokeWidth={1}
                    fillOpacity={0}
                    style={{
                        strokeDasharray: `${percentage * 0.992}px, 100px`,
                        strokeDashoffset: 0,
                        transition:
                            "stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s linear 0s, 0.06s",
                    }}
                />
            </svg>
        </Box>
    );
};

const Skills = () => {
    return (
        <Stack spacing={5} px={4} py={14} minH="100vh" alignItems="center" marginTop={-10}>
            <Box
                mx="auto"
                maxW={{ base: "90vw", sm: "80vw", md: "70vw", lg: "100vw" }}
                bg={{ base: "transparent", md: "#f8fbfb" }}
                px={{ base: 4, sm: 5, md: 10, lg: 20 }}
                py={{ base: 8, md: 12 }}
                borderRadius="lg"
                boxShadow={{ base: "none", md: "md" }}
            >
                <Flex direction={{ base: "column", md: "row" }} justify={"center"} alignItems="center" gap={10}>
                    <Box flex={1} bg="">
                        <Box
                            as="h4"
                            fontSize="5xl"
                            fontWeight="medium"
                            mb={{ base: 6, md: 0 }}
                            className="text-5xl dark:text-white font-medium mb-6"
                        >
                            Working Skills
                        </Box>
                        <ProgressBar skill="Programming Proficiency" percentage={90} color="#FF6464" />
                        <ProgressBar skill="Front-End" percentage={80} color="#9272D4" />
                        <ProgressBar skill="Problem Solving" percentage={80} color="#5185D4" />
                        <ProgressBar skill="Backend Development" percentage={95} color="#FFA052" />
                    </Box>
                    <Box flex={1}>
                        <Box bg={{ base: "white", md: "gray.100" }} p={{ base: 0, md: 6 }} borderRadius="lg" boxShadow={{ base: "none", md: "md" }}>
                            <Heading as="h4" size="2xl" mb={8}>
                                Knowledges
                            </Heading>
                            <Flex wrap="wrap" gap={3}>
                                <Button colorScheme="purple" size="lg" mb={3}>
                                    JavaScript (JS)
                                </Button>
                                <Button colorScheme="yellow" size="lg" mb={3}>
                                    Java (Java SE)
                                </Button>
                                <Button colorScheme="purple" size="lg" mb={3}>
                                    React
                                </Button>
                                <Button colorScheme="teal" size="lg" mb={3}>
                                    Node.js (Node)
                                </Button>
                                <Button colorScheme="teal" size="lg" mb={3}>
                                    MongoDB
                                </Button>
                                <Button colorScheme="orange" size="lg" mb={3}>
                                    HTML and CSS
                                </Button>
                                <Button colorScheme="green" size="lg" mb={3}>
                                    API development using REST
                                </Button>
                                <Button colorScheme="blue" size="lg" mb={3}>
                                    CRUD operations
                                </Button>
                                <Button colorScheme="red" size="lg" mb={3}>
                                    Axios HTTP library
                                </Button>
                                <Button colorScheme="pink" size="lg" mb={3}>
                                    JSON data structure
                                </Button>
                                <Button colorScheme="cyan" size="lg" mb={3}>
                                    JWT authentication with Node.js
                                </Button>


                            </Flex>
                        </Box>
                    </Box>
                </Flex>
            </Box>
        </Stack>

    );
};

export default Skills;
