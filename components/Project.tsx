import {
    Box,
    Button,
    Flex,
    Heading,
    HStack,
    Link,
    Tag,
    TagLabel,
    Text,
    Tooltip,
    useBreakpointValue
} from '@chakra-ui/react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import NextLink from 'next/link';
import { KeyboardEvent, MouseEvent, useState } from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import MotionBox from './MotionBox';

export interface Project {
    route: string;
    title: string;
    rank: number;
    summary: string;
    source: string;
    images: { src: string; alt: string }[];
    stack: string[];
    live?: string;
}

interface ProjectProps {
    project: Project;
}

const Project = ({
    project: { route, title, summary, source, live, images, stack }
}: ProjectProps) => {
    const router = useRouter();
    const [isOverlayOpen, setisOverlayOpen] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const buttonSize = useBreakpointValue({ base: 'sm', sm: 'md', xl: 'lg' });
    const variants = {
        open: {
            x: 0,
            transition: {
                type: 'spring',
                stiffness: 300,
                damping: 40
            }
        },
        closed: {
            x: '-100%',
            transition: {
                type: 'spring',
                stiffness: 300,
                damping: 40
            }
        }
    };

    const learnMoreHandler = (
        event: MouseEvent<HTMLElement, globalThis.MouseEvent>
    ) => {
        event.stopPropagation();
        router.push(`/projects/${route}`);
    };

    const divLinkClickHandler = (
        event: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>
    ) => {
        event.preventDefault();
    };

    const divLinkEnterHandler = (event: KeyboardEvent<HTMLAnchorElement>) => {
        if (event.key === 'Enter') router.push(`/projects/${route}`);
    };

    const linkFocusHandler = () => {
        setisOverlayOpen(true);
        setIsFocused(true);
    };

    const linkBlurHandler = () => {
        setIsFocused(false);
        setisOverlayOpen(false);
    };

    return (
        <MotionBox
            position="relative"
            opacity="0"
            animate={{ opacity: 1 }}
            transition={{
                delay: 0.2
            }}
            borderRadius="5px"
            exit={{ opacity: 0 }}
            width={{ base: '100%', sm: '450px', xl: '550px' }}
            height={{ base: '200px', sm: '300px', xl: '400px' }}
            onMouseEnter={() => setisOverlayOpen(true)}
            onMouseLeave={() => setisOverlayOpen(false)}
            border={isFocused ? '4px solid teal' : 'none'}
            overflow="hidden"
        >
            <NextLink href={`/projects/${route}`} passHref>
                <Link
                    display="block"
                    width="100%"
                    height="100%"
                    onClick={(e) => divLinkClickHandler(e)}
                    onKeyDown={(e) => divLinkEnterHandler(e)}
                    onFocus={linkFocusHandler}
                    onBlur={linkBlurHandler}
                    _hover={{ textDecoration: 'none' }}
                >
                    <Box
                        aria-label={`${title} project`}
                        bgPos="center"
                        width="100%"
                        height="100%"
                        justify="center"
                        align="center"
                        cursor="pointer"
                        boxShadow="5px 5px 5px rgba(0,0,0,0.6)"
                    >
                        <Image src={images[0].src} layout="fill" />
                    </Box>
                </Link>
            </NextLink>
            <MotionBox
                position="absolute"
                top="0"
                bgColor="rgba(0,0,0,0.6)"
                as={Flex}
                display="flex"
                onClick={(e) => learnMoreHandler(e)}
                direction="column"
                align="center"
                justify="space-between"
                zIndex="1"
                width="100%"
                height="100%"
                transform="translateX(-100%)"
                initial={false}
                animate={isOverlayOpen ? 'open' : 'closed'}
                exit={{ opacity: 0 }}
                variants={variants}
                transition={{ delay: 0.2 }}
                p={{ base: '0.7rem 0', sm: '1rem 3rem' }}
                cursor="pointer"
            >
                <Box>
                    <Heading
                        as="h1"
                        textAlign="center"
                        fontSize={{ base: '1rem', sm: '1.3rem' }}
                        mb={{ base: '5px', sm: '10px' }}
                        color="white"
                    >
                        {title}
                    </Heading>
                    <Text
                        as="main"
                        textAlign="center"
                        fontSize={{ base: '0.8rem', sm: '1rem' }}
                        color="white"
                    >
                        {summary}
                    </Text>
                    <HStack
                        wrap="wrap"
                        spacing={{ base: '5px', sm: '10px' }}
                        justify="center"
                        mt={{ base: '0.5rem', sm: '1rem' }}
                    >
                        {stack.map((tech) => (
                            <Tag
                                key={tech}
                                size="sm"
                                mb={{ base: '5px', sm: '10px' }}
                                borderRadius="4px"
                                variant="solid"
                                colorScheme="teal"
                            >
                                <TagLabel>{tech}</TagLabel>
                            </Tag>
                        ))}
                    </HStack>
                </Box>
                <HStack
                    spacing="1.5rem"
                    justify="center"
                    display={{ base: 'none', xl: 'flex' }}
                >
                    {live && (
                        <Tooltip label="Live website">
                            <MotionBox
                                as={Link}
                                aria-label={`${title} live website`}
                                rel="noopener noreferrer"
                                href={live}
                                onFocus={() => setisOverlayOpen(true)}
                                target="_blank"
                                onClick={(e) => e.stopPropagation()}
                                whileHover={{ scale: 1.4 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <FaExternalLinkAlt
                                    size="3rem"
                                    color="#f6f8fa"
                                />
                            </MotionBox>
                        </Tooltip>
                    )}
                    {source && (
                        <Tooltip label="Source code" colorScheme="white">
                            <MotionBox
                                as={Link}
                                onClick={(e) => e.stopPropagation()}
                                aria-label={`${title} source code`}
                                onFocus={() => setisOverlayOpen(true)}
                                rel="noopener noreferrer"
                                href={source}
                                target="_blank"
                                whileHover={{ scale: 1.4 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <FaGithub size="3rem" color="#f6f8fa" />
                            </MotionBox>
                        </Tooltip>
                    )}
                </HStack>
                <Box>
                    <NextLink href={`/projects/${route}`} passHref>
                        <Button
                            as="a"
                            onClick={(e) => e.stopPropagation()}
                            onBlur={() => setisOverlayOpen(false)}
                            onFocus={() => setisOverlayOpen(true)}
                            variant="solid"
                            size={buttonSize}
                            colorScheme="teal"
                        >
                            Learn More
                        </Button>
                    </NextLink>
                </Box>
            </MotionBox>
        </MotionBox>
    );
};

export default Project;
