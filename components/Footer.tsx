import { Flex, HStack, Link, Text, useColorMode } from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import MotionBox from './MotionBox';

const Footer = () => {
    const { colorMode } = useColorMode();
    return (
        <Flex
            as="footer"
            justify="center"
            align="center"
            direction="column"
            pb="2rem"
        >
            <MotionBox
                opacity="0"
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                exit={{ opacity: 0 }}
            >
                <HStack justify="center" align="center" spacing="1rem">
                    <MotionBox
                        as={Link}
                        aria-label="linkedin"
                        href="https://www.linkedin.com/in/jason-matthew-bugallon-37a046147/"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.3 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <FaLinkedin size="2rem" color="#0E76A8" />
                    </MotionBox>
                    <MotionBox
                        as={Link}
                        aria-label="github"
                        href="https://github.com/iSDestiny"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.3 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <FaGithub
                            size="2rem"
                            color={
                                colorMode === 'light' ? '#24292E' : '#f6f8fa'
                            }
                        />
                    </MotionBox>
                    <MotionBox
                        as={Link}
                        aria-label="twitter"
                        rel="noopener noreferrer"
                        href="https://twitter.com/JasonBugallon"
                        target="_blank"
                        whileHover={{ scale: 1.3 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <FaTwitter size="2rem" color="#1DA1F2" />
                    </MotionBox>
                    <MotionBox
                        as={Link}
                        aria-label="twitter"
                        rel="noopener noreferrer"
                        href="mailto:jasonbugallon@gmail.com"
                        target="_blank"
                        whileHover={{ scale: 1.3 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <HiOutlineMail size="2rem" />
                    </MotionBox>
                </HStack>
                <Text size="sm" textAlign="center" mt="0.5rem">
                    Jason Bugallon © {new Date().getFullYear()}
                </Text>
            </MotionBox>
        </Flex>
    );
};

export default Footer;
