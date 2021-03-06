import { useColorMode, HStack, Link } from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import MotionBox from './MotionBox';

const Socials = () => {
    const { colorMode } = useColorMode();
    return (
        <HStack
            spacing="1rem"
            pos="fixed"
            bottom="0"
            my="2rem"
            width="100%"
            zIndex="2"
            justify="center"
        >
            <MotionBox
                as={Link}
                aria-label="linkedin"
                href="https://www.linkedin.com/in/jason-matthew-bugallon-37a046147/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.9 }}
            >
                <FaLinkedin size="3rem" color="#0E76A8" />
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
                    size="3rem"
                    color={colorMode === 'light' ? '#24292E' : '#f6f8fa'}
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
                <FaTwitter size="3rem" color="#1DA1F2" />
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
                <HiOutlineMail size="3rem" />
            </MotionBox>
        </HStack>
    );
};

export default Socials;
