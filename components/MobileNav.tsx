import NextLink from 'next/link';
import { Box, Link, useColorMode, VStack } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { Dispatch, SetStateAction, useEffect } from 'react';
import MotionBox from './MotionBox';
import { AnimatePresence } from 'framer-motion';

interface MobileNavProps {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const MobileNav = ({ isOpen, setIsOpen }: MobileNavProps) => {
    const router = useRouter();
    const { colorMode } = useColorMode();

    const menuVariants = {
        open: {
            y: 0,
            transition: {
                type: 'spring',
                stiffness: 300,
                damping: 40
            }
        },
        closed: {
            y: '-100%',
            transition: {
                type: 'spring',
                stiffness: 300,
                damping: 40
            }
        }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Escape') setIsOpen(false);
    };

    useEffect(() => {
        document.body.style.overflowY = isOpen ? 'hidden' : 'auto';
        document.addEventListener('keydown', handleKeyDown);
    }, [isOpen]);

    return (
        <MotionBox
            display={{ base: 'block', md: 'none' }}
            key="menu"
            initial="closed"
            animate={isOpen ? 'open' : 'closed'}
            as="nav"
            overflow="hidden"
            width="100%"
            variants={menuVariants}
            exit="closed"
            height="100vh"
            bg={colorMode === 'light' ? 'gray.50' : 'gray.900'}
            position="fixed"
            zIndex="3"
            top="0"
        >
            <VStack
                listStyleType="none"
                as="ul"
                justify="center"
                align="center"
                width="100%"
                height="100%"
                spacing="1.5rem"
            >
                <Box as="li">
                    <NextLink href="/" passHref>
                        <Link
                            onClick={() => setIsOpen(false)}
                            fontSize="2rem"
                            borderBottom={
                                router.pathname === '/'
                                    ? '6px solid teal'
                                    : 'none'
                            }
                            pb="3px"
                            _hover={{
                                borderBottom: '6px solid teal'
                            }}
                        >
                            About
                        </Link>
                    </NextLink>
                </Box>
                <Box as="li">
                    <NextLink href="/projects" passHref>
                        <Link
                            onClick={() => setIsOpen(false)}
                            fontSize="2rem"
                            borderBottom={
                                router.pathname === '/projects'
                                    ? '6px solid teal'
                                    : 'none'
                            }
                            pb="3px"
                            _hover={{
                                borderBottom: '6px solid teal'
                            }}
                        >
                            Projects
                        </Link>
                    </NextLink>
                </Box>
                <Box as="li">
                    <Link
                        onClick={() => setIsOpen(false)}
                        fontSize="2rem"
                        href="mailto:jasonbugallon@gmail.com"
                        rel="noopener noreferrer"
                        target="_blank"
                        pb="3px"
                        _hover={{
                            borderBottom: '6px solid teal'
                        }}
                    >
                        Contact
                    </Link>
                </Box>
                <Box as="li">
                    <Link
                        onClick={() => setIsOpen(false)}
                        fontSize="2rem"
                        href="/resume.pdf"
                        target="_blank"
                        pb="3px"
                        _hover={{
                            borderBottom: '6px solid teal'
                        }}
                    >
                        Resume
                    </Link>
                </Box>
            </VStack>
        </MotionBox>
    );
};

export default MobileNav;
