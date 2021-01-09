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
    Tooltip
} from '@chakra-ui/react';
import { MouseEvent, useState } from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import MotionBox from './MotionBox';

export interface Project {
    name: string;
    shortDescription: string;
    longDescription: string;
    stack: string[];
    images?: string[];
    source?: string;
    live?: string;
}

interface ProjectProps {
    project: Project;
}

const Project = ({
    project: { name, shortDescription, stack, images, source, live }
}: ProjectProps) => {
    const [isOverlayOpen, setisOverlayOpen] = useState(false);
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
        event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
    ) => {
        event.stopPropagation();
    };

    return (
        <MotionBox
            aria-label={`${name} project`}
            as={Flex}
            onMouseEnter={() => setisOverlayOpen(true)}
            onMouseLeave={() => setisOverlayOpen(false)}
            position="relative"
            opacity="0"
            animate={{ opacity: 1 }}
            transition={{
                delay: 0.2
            }}
            exit={{ opacity: 0 }}
            bg={`url(${images[0]}) no-repeat`}
            bgSize="100% 100%"
            bgPos="center"
            overflow="hidden"
            width={{ base: '350px', sm: '450px', xl: '550px' }}
            height={{ base: '200px', sm: '300px', xl: '400px' }}
            justify="center"
            align="center"
            cursor="pointer"
            boxShadow="5px 5px 5px rgba(0,0,0,0.6)"
            borderRadius="5px"
        >
            <MotionBox
                bgColor="rgba(0,0,0,0.6)"
                as={Flex}
                direction="column"
                align="center"
                justify="space-between"
                zIndex="1"
                width="100%"
                height="100%"
                transform="translateX(-100%)"
                animate={isOverlayOpen ? 'open' : 'closed'}
                variants={variants}
                transition={{ delay: 0.2 }}
                padding="1rem 3rem"
                cursor="pointer"
            >
                <Box>
                    <Heading
                        as="h1"
                        textAlign="center"
                        fontSize="1.3rem"
                        mb="10px"
                        color="white"
                    >
                        {name}
                    </Heading>
                    <Text
                        as="main"
                        textAlign="center"
                        fontSize="1rem"
                        color="white"
                    >
                        {shortDescription}
                    </Text>
                    <HStack
                        wrap="wrap"
                        spacing="10px"
                        justify="center"
                        mt="1rem"
                    >
                        {stack.map((tech) => (
                            <Tag
                                key={tech}
                                size="sm"
                                mb="10px"
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
                                aria-label={`${name} live website`}
                                rel="noopener noreferrer"
                                href={live}
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
                                ariaLabel={`${name} source code`}
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
                    <Button
                        onClick={(e) => learnMoreHandler(e)}
                        variant="solid"
                        colorScheme="teal"
                    >
                        Learn More
                    </Button>
                </Box>
            </MotionBox>
        </MotionBox>
    );
};

export default Project;