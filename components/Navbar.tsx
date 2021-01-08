import NextLink from 'next/link';
import { useRouter } from 'next/router';
import {
    Flex,
    HStack,
    Box,
    Link,
    IconButton,
    useColorMode,
    Tooltip,
    useMediaQuery
} from '@chakra-ui/react';
import { FaSun, FaMoon } from 'react-icons/fa';
import MenuToggle from './MenuToggle';
import { useState } from 'react';
import { useCycle } from 'framer-motion';
import MotionBox from './MotionBox';

const Navbar = () => {
    const [isMenuOpen, toggleMenuOpen] = useCycle(false, true);
    const { colorMode, toggleColorMode } = useColorMode();
    const [isMobileSize] = useMediaQuery('(max-width: 600px)');
    const router = useRouter();
    const selectedBorder = (pathname: string, path: string) => {
        const borderBottom = '4px solid teal';
        if (
            (pathname === 'About' && path === '/') ||
            '/' + pathname.toLowerCase() === path
        )
            return borderBottom;
        return '0';
    };
    const goToNavPath = (path: string) => {
        if (path === 'About') return router.push('/');
        return router.push(path.toLowerCase());
    };

    return (
        <header>
            <Flex
                justify="space-between"
                align="center"
                maxW="1200px"
                margin="auto"
                padding="0.8rem 2rem"
                height="65px"
            >
                <h1>Icon</h1>
                <HStack as="ul" spacing="1.5rem" listStyleType="none">
                    {!isMobileSize && (
                        <>
                            {['About', 'Projects', 'Contact'].map((path) => (
                                <Box as="li" key={path}>
                                    <Link
                                        borderBottom={`${selectedBorder(
                                            path,
                                            router.pathname
                                        )}`}
                                        aria-label={path.toLowerCase()}
                                        href="#"
                                        pb="3px"
                                        _hover={{
                                            borderBottom: '4px solid teal'
                                        }}
                                        onClick={() => goToNavPath(path)}
                                    >
                                        {path}
                                    </Link>
                                </Box>
                            ))}
                            <Box as="li">
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
                        </>
                    )}
                    <HStack as="li" position="relative">
                        <Tooltip label="Toggle light/dark mode">
                            <IconButton
                                size="lg"
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
                    {isMobileSize && (
                        <MotionBox
                            as="nav"
                            initial={false}
                            animate={isMenuOpen ? 'open' : 'closed'}
                        >
                            <MenuToggle toggle={() => toggleMenuOpen()} />
                        </MotionBox>
                    )}
                </HStack>
            </Flex>
        </header>
    );
};

export default Navbar;
