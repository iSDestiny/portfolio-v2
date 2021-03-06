import { Box, Button, Flex, Heading, HStack, Text } from '@chakra-ui/react';
import MotionBox from 'components/MotionBox';
import Socials from 'components/Socials';
import { useRouter } from 'next/router';
import Navbar from 'components/Navbar';
import React from 'react';

const About = () => {
    const router = useRouter();

    return (
        <Box position="fixed" overflow="hidden" width="100%" height="100%">
            <style jsx global>
                {`
                    html,
                    body {
                        overflow: hidden !important;
                    }
                `}
            </style>
            <Navbar />
            <Flex
                as="main"
                justify="center"
                align="center"
                pb="2rem"
                height="calc(100vh - 90px)"
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
        </Box>
    );
};

export default About;
