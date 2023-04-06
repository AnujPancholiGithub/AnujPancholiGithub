import { Box, Button, Flex, Heading, Icon, Input, Text, Textarea, useToast, Link } from "@chakra-ui/react";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";

const ContactMe = () => {
    const toast = useToast();

    const handleFormSubmit = (event) => {
        event.preventDefault();
        // Add your form submission logic here
        toast({
            title: "Sorry, we were unable to deliver your message.",
            description: "Thank you for reaching out to me! I appreciate your interest in my work. If you have any urgent questions or would like to chat more about my experience, please feel free to contact me directly by Email Or Linkedin. I'm always happy to connect with new people in the industry. Thank you!",
            status: "info",
            duration: 5000,
            isClosable: true,
        });
    };

    return (
        <Flex
            bgGradient="linear(to-b,#FFDFED, #DFFFF1)"
            flexDirection="column"
            minHeight="100vh"
            justifyContent="center"
            alignItems="center"
            p={4}
        >
            <Box
                bg="white"
                borderRadius="lg"
                p={8}
                boxShadow="xl"
                maxW={{ base: "90vw", sm: "80vw", md: "50vw", lg: "40vw" }}
            >
                <Heading mb={4}>Contact Me!</Heading>
                <Text mb={8}>I am open to hearing your thoughts!</Text>

                <Flex alignItems="center" mb={4}>
                    <Icon as={FaEnvelope} mr={2} />
                    <Text>Email:</Text>
                    <Link ml={2} color="blue.500" href="mailto:contact@mycompany.com">
                        anujpancholi@yahoo.com
                    </Link>
                </Flex>

                <Flex alignItems="center" mb={8}>
                    <Icon as={FaLinkedin} mr={2} />
                    <Text>LinkedIn:</Text>
                    <Link ml={2} color="blue.500" href=" https://www.linkedin.com/in/anujpancholi/">
                        linkedin.com/in/anujpancholi/
                    </Link>
                </Flex>


                <form onSubmit={handleFormSubmit}>
                    <Input type="text" placeholder="Name" mb={4} />
                    <Input type="email" placeholder="Email" mb={4} />
                    <Textarea placeholder="Message" mb={4} />

                    <Button colorScheme="blue" type="submit">
                        Send Message
                    </Button>
                </form>
            </Box>
        </Flex>
    );
};

export default ContactMe;
