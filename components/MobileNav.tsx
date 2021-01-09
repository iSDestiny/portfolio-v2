import { Box, Link, useColorMode, VStack } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import MotionBox from './MotionBox';

interface MobileNavProps {
    isOpen: boolean;
    toggleIsOpen: any;
}

const MobileNav = ({ isOpen, toggleIsOpen }: MobileNavProps) => {
    const router = useRouter();
    const { colorMode } = useColorMode();
    const selectedBorder = (pathname: string, path: string) => {
        const borderBottom = '6px solid teal';
        if (
            (pathname === 'About' && path === '/') ||
            '/' + pathname.toLowerCase() === path
        )
            return borderBottom;
        return '0';
    };
    const goToNavPath = (path: string) => {
        toggleIsOpen();
        if (path === 'About') return router.push('/');
        return router.push(path.toLowerCase());
    };

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

    useEffect(() => {
        document.body.style.overflowY = isOpen ? 'hidden' : 'auto';
    }, [isOpen]);

    return (
        <MotionBox
            display={{ base: 'block', md: 'none' }}
            transform="translateY(-100%)"
            initial={false}
            animate={isOpen ? 'open' : 'closed'}
            as="nav"
            overflow="hidden"
            width="100%"
            variants={menuVariants}
            exit="closed"
            height="100vh"
            bg={colorMode === 'light' ? 'gray.50' : 'gray.900'}
            position="fixed"
            zIndex="1"
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
                {['About', 'Projects'].map((path) => (
                    <Box as="li" key={path}>
                        <Link
                            fontSize="2rem"
                            borderBottom={`${selectedBorder(
                                path,
                                router.pathname
                            )}`}
                            aria-label={path.toLowerCase()}
                            href="#"
                            pb="3px"
                            _hover={{
                                borderBottom: '6px solid teal'
                            }}
                            onClick={() => goToNavPath(path)}
                        >
                            {path}
                        </Link>
                    </Box>
                ))}
                <Box as="li">
                    <Link
                        onClick={toggleIsOpen}
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
                        onClick={toggleIsOpen}
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
