import {
    Box,
    Button,
    Flex,
    Heading,
    HStack,
    Text,
    useColorMode
} from '@chakra-ui/react';
import MotionBox from 'components/MotionBox';
import Socials from 'components/Socials';
import { useRouter } from 'next/router';
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
                <MotionBox
                    as={Flex}
                    opacity="0"
                    animate={{ opacity: 1 }}
                    transition={{
                        delay: 0.2
                    }}
                    exit={{ opacity: 0 }}
                    justify="center"
                    align="center"
                    direction="column"
                    maxWidth="700px"
                    p="0 1rem"
                >
                    <Box>
                        <Heading
                            textAlign="center"
                            as="h1"
                            fontWeight="bold"
                            fontSize="2rem"
                            mb="0.6rem"
                        >
                            Hi, I'm Jason
                        </Heading>
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
