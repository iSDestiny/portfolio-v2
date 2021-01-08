import {
    Box,
    Button,
    Flex,
    HStack,
    Text,
    useColorMode
} from '@chakra-ui/react';
import MotionBox from 'components/MotionBox';
import Socials from 'components/Socials';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

const Navbar = dynamic(() => import('components/Navbar'), { ssr: false });

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
                <MotionBox
                    as={Flex}
                    opacity="0"
                    animate={{ opacity: 1 }}
                    transition={{
                        delay: 0.3
                    }}
                    exit={{ opacity: 0 }}
                    justify="center"
                    align="center"
                    direction="column"
                    maxWidth="700px"
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
                </MotionBox>
            </Flex>
        </>
    );
};

export default About;
