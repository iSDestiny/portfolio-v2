import { Box, Link, useColorMode, VStack } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import MotionBox from './MotionBox';

const MobileNav = ({ isOpen }: { isOpen: boolean }) => {
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

    return (
        <MotionBox
            initial={'closed'}
            animate={isOpen ? 'open' : 'closed'}
            as="nav"
            width="100%"
            variants={menuVariants}
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
                {['About', 'Projects', 'Contact'].map((path) => (
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
