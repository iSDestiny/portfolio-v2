import styles from 'styles/Home.module.scss';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import { Flex, Box, Text, Button, Link } from '@chakra-ui/react';
import { useRouter } from 'next/router';

const About = () => {
    const router = useRouter();

    return (
        <Flex as="main" justify="center" align="center" height="100vh">
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
                        Hi, I am Jason
                    </Text>
                    <Text align="center">
                        I am a software developer and a recent Computer Science
                        graduate from University of California, Irvine. I am
                        actively looking for backend, frontend, or full stack
                        opportunities. My favorite stack is React, Next, Node,
                        Express, MongoDB, Typescript
                    </Text>
                </Box>
                <Flex justify="center" p="1rem">
                    <Button onClick={() => router.push('projects')}>
                        Projects
                    </Button>
                    <Button ml="1rem" as="a" href="/resume.pdf" target="_blank">
                        Resume
                    </Button>
                </Flex>
                <Flex justify="center" my="2rem">
                    <Link
                        href="https://www.linkedin.com/in/jason-matthew-bugallon-37a046147/"
                        target="_blank"
                    >
                        <FaLinkedin size="3rem" color="#0E76A8" />
                    </Link>
                    <Link
                        href="https://github.com/iSDestiny"
                        target="_blank"
                        mx="1rem"
                    >
                        <FaGithub size="3rem" color="#24292E" />
                    </Link>
                    <Link
                        href="https://twitter.com/JasonBugallon"
                        target="_blank"
                    >
                        <FaTwitter size="3rem" color="#1DA1F2" />
                    </Link>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default About;
