import {
    Box,
    Flex,
    HStack,
    IconButton,
    Link,
    Tooltip,
    useColorMode
} from '@chakra-ui/react';
import { AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import FocusLock from 'react-focus-lock';
import { FaMoon, FaSun } from 'react-icons/fa';
import MenuToggle from './MenuToggle';
import MobileNav from './MobileNav';
import MotionBox from './MotionBox';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { colorMode, toggleColorMode } = useColorMode();
    const router = useRouter();

    return (
        <FocusLock disabled={!isMenuOpen}>
            <AnimatePresence>
                {isMenuOpen && (
                    <>
                        <MobileNav
                            isOpen={isMenuOpen}
                            setIsOpen={setIsMenuOpen}
                        />
                    </>
                )}
            </AnimatePresence>
            <Box as="header">
                <Flex
                    as="nav"
                    justify="space-between"
                    align="center"
                    maxW="1200px"
                    margin="auto"
                    padding="2.8rem 1rem"
                    height="90px"
                >
                    <NextLink href="/" passHref>
                        <Link zIndex="4" onClick={() => setIsMenuOpen(false)}>
                            <Image
                                priority
                                width="220"
                                height="50"
                                alt="personal brand logo"
                                src={
                                    colorMode === 'light'
                                        ? '/static/logos/j-full-logo-transparent-black.png'
                                        : '/static/logos/j-full-logo-transparent-white.png'
                                }
                            />
                        </Link>
                    </NextLink>
                    <HStack as="ul" spacing="1.5rem" listStyleType="none">
                        <Box as="li" display={{ base: 'none', md: 'block' }}>
                            <NextLink href="/" passHref>
                                <Link
                                    borderBottom={
                                        router.pathname === '/'
                                            ? '4px solid teal'
                                            : 'none'
                                    }
                                    pb="3px"
                                    _hover={{
                                        borderBottom: '4px solid teal'
                                    }}
                                >
                                    About
                                </Link>
                            </NextLink>
                        </Box>
                        <Box as="li" display={{ base: 'none', md: 'block' }}>
                            <NextLink href="/projects" passHref>
                                <Link
                                    borderBottom={
                                        router.pathname === '/projects'
                                            ? '4px solid teal'
                                            : 'none'
                                    }
                                    pb="3px"
                                    _hover={{
                                        borderBottom: '4px solid teal'
                                    }}
                                >
                                    Projects
                                </Link>
                            </NextLink>
                        </Box>
                        <Box as="li" display={{ base: 'none', md: 'block' }}>
                            <Link
                                href="mailto:jasonbugallon@gmail.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                pb="3px"
                                _hover={{
                                    borderBottom: '4px solid teal'
                                }}
                            >
                                Contact
                            </Link>
                        </Box>
                        <Box as="li" display={{ base: 'none', md: 'block' }}>
                            <Link
                                href="/resume.pdf"
                                target="_blank"
                                pb="3px"
                                _hover={{
                                    borderBottom: '4px solid teal'
                                }}
                            >
                                Resume
                            </Link>
                        </Box>
                        <HStack as="li" position="relative">
                            <Tooltip label="Toggle light/dark mode">
                                <IconButton
                                    size="lg"
                                    zIndex="4"
                                    aria-label="dark light switch"
                                    variant="ghost"
                                    borderRadius="50%"
                                    onClick={toggleColorMode}
                                    icon={
                                        colorMode === 'light' ? (
                                            <FaMoon fontSize="1.5rem" />
                                        ) : (
                                            <FaSun fontSize="1.5rem" />
                                        )
                                    }
                                />
                            </Tooltip>
                        </HStack>
                        <MotionBox
                            as="li"
                            zIndex="4"
                            exit="closed"
                            initial={false}
                            animate={isMenuOpen ? 'open' : 'closed'}
                            display={{ base: 'block', md: 'none' }}
                        >
                            <MenuToggle
                                toggle={() => setIsMenuOpen((prev) => !prev)}
                            />
                        </MotionBox>
                    </HStack>
                </Flex>
            </Box>
        </FocusLock>
    );
};

export default Navbar;
