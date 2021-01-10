import Navbar from 'components/Navbar';
import { Project } from 'components/Project';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import MotionBox from 'components/MotionBox';
import {
    Box,
    Flex,
    Heading,
    Stack,
    Text,
    Link,
    Tooltip,
    useColorMode,
    HStack,
    Button,
    Wrap,
    Tag,
    TagLabel,
    WrapItem,
    VStack,
    useBreakpointValue
} from '@chakra-ui/react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { Carousel } from 'react-responsive-carousel';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';

const ProjectPage = () => {
    const router = useRouter();
    const buttonSize = useBreakpointValue({ base: 'sm', sm: 'md' });
    const { colorMode } = useColorMode();
    const { projectId } = router.query;
    const [projects, setProjects] = useState<Project[]>([
        {
            id: 'asdf123',
            name: 'Fabflix',
            shortDescription: 'An IMDb-like movie directory website',
            longDescription: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, eligendi? Ducimus corrupti nisi perspiciatis nulla recusandae quaerat temporibus mollitia, veniam cumque nemo autem eveniet cum repudiandae dolor impedit nostrum? Cumque fuga dolore labore nihil obcaecati doloribus. Quia sint assumenda cupiditate, consequatur eligendi, corrupti dolore velit aspernatur sequi ullam mollitia voluptatum! `,
            stack: ['html5', 'css3', 'jquery', 'java', 'javascript'],
            images: ['https://www.jasonbugallon.com/assets/images/fabflix.png'],
            source: 'https://github.com/iSDestiny/Fabflix',
            live: 'https://github.com/iSDestiny/Fabflix'
        },
        {
            id: 'gbxcv123',
            name: 'MarkdownV',
            shortDescription:
                'Markdown notetaking web app with vim or vscode keybindings',
            longDescription: `
       I usually take all my notes using the code editor, Visual Studio Code, and store it all on github. The biggest reason why I take my notes this way is because of vscode's vim plugin. I prefer to do all of my writing with vim keybindings if it is possible and vscode's vim plugin makes that possible. I was looking for a project to work on in order to improve my skills and thought about the way that I took notes. I thought that it would be interesting to make a full stack web app of how I currently take notes so here I am.

I looked at several applications as references for MarkdownV. Specifically, I took vscode's material ui palenight theme and tried my best to replicate it with MarkdownV. I also used Notable, another markdown notetaking application, and Evernote, a rich text note taking application, as references for the design of my UI.
        `,
            stack: [
                'Typescript',
                'React',
                'Next',
                'SASS',
                'React Query',
                'Redux',
                'Node',
                'Next API Routes',
                'Mongodb',
                'JWT'
            ],
            images: [
                'https://i.imgur.com/5OuZY7r.png',
                'https://i.imgur.com/PNwUMpj.png',
                'https://i.imgur.com/WN2Hm6z.png',
                'https://i.imgur.com/UBMQdwy.png'
            ],
            source: 'https://github.com/iSDestiny/markdown-v',
            live: 'https://markdown-v.vercel.app/'
        }
    ]);

    const project = projects.find((proj) => proj.id === projectId);

    useEffect(() => {
        OverlayScrollbars(document.querySelectorAll('body'), {
            className:
                colorMode === 'light' ? 'os-theme-dark' : 'os-theme-light',
            scrollbars: { autoHide: 'scroll' }
        });
    }, [colorMode]);

    return (
        <>
            <Head>
                <title>
                    Jason Bugallon's Web Developer Portfolio | {project?.name}
                </title>
            </Head>
            <Navbar />
            <Flex
                as="main"
                width="100%"
                justify="center"
                align="center"
                px="2rem"
                pt="1rem"
                pb="2rem"
            >
                <MotionBox
                    as={Flex}
                    opacity="0"
                    display={project ? 'flex' : 'none'}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    exit={{ opacity: 0 }}
                    direction="column"
                    maxW="1000px"
                    w="100%"
                >
                    <Flex
                        as="header"
                        width="100%"
                        justify="space-between"
                        align={{ base: 'flex-start', md: 'center' }}
                        direction={{ base: 'column', md: 'row' }}
                    >
                        <Box>
                            <Heading as="h1" size="xl">
                                {project?.name}
                            </Heading>
                            <Heading
                                as="h2"
                                fontWeight="500"
                                size="md"
                                role="doc-subtitle"
                                color={
                                    colorMode === 'light'
                                        ? 'teal.600'
                                        : 'teal.400'
                                }
                            >
                                {project?.shortDescription}
                            </Heading>
                            <Wrap spacing="0.7rem" width="100%" mt="1rem">
                                {project?.stack.map((tech) => (
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
                            {project?.live && (
                                <Tooltip label="Live website">
                                    <MotionBox
                                        as={Link}
                                        aria-label={`${name} live website`}
                                        href={project?.live}
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
                            {project?.source && (
                                <Tooltip
                                    label="Source code"
                                    colorScheme="white"
                                >
                                    <MotionBox
                                        as={Link}
                                        onClick={(e) => e.stopPropagation()}
                                        aria-label={`${name} source code`}
                                        href={project?.source}
                                        rel="noopener noreferrer"
                                        target="_blank"
                                        whileHover={{ scale: 1.4 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <FaGithub size="2.5rem" />
                                    </MotionBox>
                                </Tooltip>
                            )}
                        </VStack>
                        <HStack
                            width="100%"
                            mt="1rem"
                            spacing="1rem"
                            display={{ base: 'flex', md: 'none' }}
                        >
                            <Button
                                as="a"
                                href={project?.live}
                                colorScheme="teal"
                                rel="noopener noreferrer"
                                target="_blank"
                                size={buttonSize}
                                leftIcon={<FaExternalLinkAlt />}
                            >
                                Live Website
                            </Button>
                            <Button
                                as="a"
                                href={project?.source}
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
                    <Box
                        as={Carousel}
                        boxShadow="5px 5px 5px rgba(0,0,0,0.6)"
                        my="1rem"
                        _focus={{
                            outline: '4px solid teal'
                        }}
                        showStatus={false}
                        showThumbs={false}
                        swipeable
                        infiniteLoop
                        emulateTouch
                        useKeyboardArrows
                        dynamicHeight
                    >
                        {project?.images.map((image, index) => (
                            <Box key={index}>
                                <img src={image} />
                            </Box>
                        ))}
                    </Box>
                    <Box as="main" mt="1rem">
                        <Heading as="h2" size="lg" mb="0.8rem">
                            About this project
                        </Heading>
                        <Text fontSize="lg">{project?.longDescription}</Text>
                    </Box>
                </MotionBox>
            </Flex>
        </>
    );
};

export default ProjectPage;
