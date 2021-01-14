import {
    Box,
    Button,
    Flex,
    Heading,
    HStack,
    Tag,
    TagLabel,
    Tooltip,
    useBreakpointValue,
    useColorMode,
    VStack,
    Wrap,
    Link,
    WrapItem
} from '@chakra-ui/react';
import React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import MotionBox from './MotionBox';

interface ProjectHeaderProps {
    title: string;
    summary: string;
    source: string;
    stack: string[];
    live?: string;
}

const ProjectHeader = ({
    title,
    summary,
    source,
    live,
    stack
}: ProjectHeaderProps) => {
    const buttonSize = useBreakpointValue({ base: 'sm', sm: 'md' });
    const { colorMode } = useColorMode();

    return (
        <Flex
            as="header"
            width="100%"
            justify="space-between"
            align={{ base: 'flex-start', md: 'center' }}
            direction={{ base: 'column', md: 'row' }}
        >
            <Box>
                <Heading as="h1" size="xl">
                    {title}
                </Heading>
                <Heading
                    as="h2"
                    fontWeight="500"
                    size="md"
                    role="doc-subtitle"
                    color={colorMode === 'light' ? 'teal.600' : 'teal.400'}
                >
                    {summary}
                </Heading>
                <Wrap spacing="0.4rem" width="100%" mt="1rem">
                    {stack.map((tech) => (
                        <WrapItem key={tech}>
                            <Tag
                                size="sm"
                                borderRadius="4px"
                                variant="solid"
                                colorScheme="teal"
                            >
                                <TagLabel>{tech}</TagLabel>
                            </Tag>
                        </WrapItem>
                    ))}
                </Wrap>
            </Box>
            <VStack
                spacing="1rem"
                align="center"
                justify="center"
                display={{ base: 'none', md: 'flex' }}
                ml="4rem"
            >
                {live && (
                    <Tooltip label="Live website">
                        <MotionBox
                            as={Link}
                            aria-label={`${title} live website`}
                            href={live}
                            rel="noopener noreferrer"
                            target="_blank"
                            onClick={(e) => e.stopPropagation()}
                            whileHover={{ scale: 1.4 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <FaExternalLinkAlt size="2.5rem" />
                        </MotionBox>
                    </Tooltip>
                )}
                <Tooltip label="Source code" colorScheme="white">
                    <MotionBox
                        as={Link}
                        onClick={(e) => e.stopPropagation()}
                        aria-label={`${title} source code`}
                        href={source}
                        rel="noopener noreferrer"
                        target="_blank"
                        whileHover={{ scale: 1.4 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <FaGithub size="2.5rem" />
                    </MotionBox>
                </Tooltip>
            </VStack>
            <HStack
                width="100%"
                mt="1rem"
                spacing="1rem"
                display={{ base: 'flex', md: 'none' }}
            >
                {live && (
                    <Button
                        as="a"
                        href={live}
                        colorScheme="teal"
                        rel="noopener noreferrer"
                        target="_blank"
                        size={buttonSize}
                        leftIcon={<FaExternalLinkAlt />}
                    >
                        Live Website
                    </Button>
                )}
                <Button
                    as="a"
                    href={source}
                    colorScheme="teal"
                    rel="noopener noreferrer"
                    target="_blank"
                    size={buttonSize}
                    leftIcon={<FaGithub />}
                >
                    Source Code
                </Button>
            </HStack>
        </Flex>
    );
};

export default ProjectHeader;
