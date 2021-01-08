// import styles from 'styles/Home.module.scss';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import {
    Flex,
    Box,
    Text,
    Button,
    Link,
    HStack,
    useColorMode
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import MotionBox from 'components/MotionBox';
import Navbar from 'components/Navbar';

const About = () => {
    const router = useRouter();
    const { colorMode } = useColorMode();

    return (
        <>
            <Navbar />
            <Flex
                as="main"
                justify="center"
                align="center"
                height="calc(100vh - 80px)"
            >
                <Flex
                    justify="center"
                    align="center"
                    direction="column"
                    width={['100%', '100%', 700]}
                    p="0 1rem"
                >
                    <Box>
                        <Text
                            align="center"
                            as="h1"
                            fontWeight="bold"
                            fontSize="2rem"
                        >
                            Hi, I'm Jason
                        </Text>
                        <Text align="center">
                            I am a software developer and a class of 2020
                            Computer Science graduate from the University of
                            California, Irvine. I am actively looking for
                            backend, frontend, or full stack opportunities. My
                            favorite stack is: React, Next, Node, Express,
                            MongoDB, Typescript
                        </Text>
                    </Box>
                    <HStack spacing="1.3rem" justify="center" p="1rem">
                        <Button
                            onClick={() => router.push('projects')}
                            colorScheme="teal"
                        >
                            Projects
                        </Button>
                        <Button
                            as="a"
                            href="/resume.pdf"
                            target="_blank"
                            colorScheme="teal"
                        >
                            Resume
                        </Button>
                    </HStack>
                    <HStack spacing="1rem" pos="fixed" bottom="0" my="2rem">
                        <MotionBox
                            as={Link}
                            aria-label="linkedin"
                            href="https://twitter.com/JasonBugallon"
                            target="_blank"
                            whileHover={{ scale: 1.3 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <FaLinkedin size="3rem" color="#0E76A8" />
                        </MotionBox>
                        <MotionBox
                            as={Link}
                            aria-label="github"
                            href="https://twitter.com/JasonBugallon"
                            target="_blank"
                            whileHover={{ scale: 1.3 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <FaGithub
                                size="3rem"
                                color={
                                    colorMode === 'light'
                                        ? '#24292E'
                                        : '#f6f8fa'
                                }
                            />
                        </MotionBox>
                        <MotionBox
                            as={Link}
                            aria-label="twitter"
                            href="https://twitter.com/JasonBugallon"
                            target="_blank"
                            whileHover={{ scale: 1.3 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <FaTwitter size="3rem" color="#1DA1F2" />
                        </MotionBox>
                    </HStack>
                </Flex>
            </Flex>
        </>
    );
};

export default About;
