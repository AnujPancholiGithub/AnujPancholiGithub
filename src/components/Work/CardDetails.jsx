import { useState } from 'react'
import {
    Button,
    Image,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    useDisclosure,
    Box,
    Text,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from '@chakra-ui/react'




const CardDetails = ({ title, description, fullDescription, techStack, imageUrl, liveUrl, githubUrl }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Box
                maxW="sm"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                onClick={onOpen}
                _hover={{ cursor: 'pointer' }}
                bgColor="#F3FCF7"
            >
                <Image src={imageUrl} alt={title} />

                <Box p="6">
                    <Box d="flex" alignItems="baseline">
                        <Text fontSize="sm" fontWeight="semibold" color="gray.500" mr={2}>
                            Tech Stack:
                        </Text>
                        <Text fontSize="sm" fontWeight="semibold" color="blue.500">
                            {techStack}
                        </Text>
                    </Box>

                    <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
                        {title}
                    </Box>

                    <Text mt="2" fontSize="sm">
                        {description}
                    </Text>
                </Box>
            </Box>
            <Modal isOpen={isOpen} onClose={onClose} bgColor="#F3FCF7">
                <ModalOverlay />
                <ModalContent bgColor="#F3FCF7">
                    <ModalHeader>{title}</ModalHeader>
                    <ModalBody>
                        <Image src={imageUrl} alt={title} borderRadius="md" />

                        <Accordion allowMultiple mt="4">
                            <AccordionItem>
                                <h2>
                                    <AccordionButton>
                                        <Box flex="1" textAlign="left">
                                            Full Description
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    <Text fontSize="sm">{fullDescription}</Text>
                                </AccordionPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <h2>
                                    <AccordionButton >
                                        <Box flex="1" textAlign="left" >
                                            Live Deploy
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    <Button
                                        as="a"
                                        href={liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        size="sm"
                                        colorScheme="blue"
                                        bgGradient="linear(to-r, #12B3EB, #5460F9)"
                                    >
                                        View Live
                                    </Button>
                                </AccordionPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <h2>
                                    <AccordionButton>
                                        <Box flex="1" textAlign="left">
                                            GitHub Repo
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    <Button
                                        as="a"
                                        href={githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        size="sm"
                                        colorScheme="blue"
                                        bgGradient="linear(to-r, #12B3EB, #5460F9)"
                                    >
                                        View Code
                                    </Button>
                                </AccordionPanel>
                            </AccordionItem>
                        </Accordion>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme="blue" size="sm" mr={3} onClick={onClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default CardDetails
