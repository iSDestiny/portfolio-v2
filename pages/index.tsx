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
import Socials from 'components/Socials';

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
                    <Socials />
                </Flex>
            </Flex>
        </>
    );
};

export default About;
