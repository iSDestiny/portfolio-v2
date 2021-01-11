import {
    Box,
    Flex,
    Grid,
    GridItem,
    Heading,
    useColorMode
} from '@chakra-ui/react';
import MotionBox from 'components/MotionBox';
import Project, { Project as ProjectType } from 'components/Project';
import { useEffect, useState } from 'react';
import Navbar from 'components/Navbar';
import Head from 'next/head';
import Footer from 'components/Footer';

const Projects = () => {
    const { colorMode } = useColorMode();
    useEffect(() => {
        OverlayScrollbars(document.querySelectorAll('body'), {
            className:
                colorMode === 'light' ? 'os-theme-dark' : 'os-theme-light',
            scrollbars: { autoHide: 'scroll' }
        });
    }, [colorMode]);
    const [projects, setProjects] = useState<ProjectType[]>([
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

    return (
        <>
            <Head>
                <title key="title">
                    Jason Bugallon's Web Developer Portfolio | Projects
                </title>
                <meta
                    name="description"
                    key="description"
                    content="Jason Bugallon's software projects collection"
                />
            </Head>
            <Navbar />
            <Flex
                as="main"
                my="1rem"
                width="100%"
                margin="auto"
                justify="center"
                align="center"
                direction="column"
                px="1rem"
                pb="2rem"
            >
                <MotionBox
                    opacity="0"
                    animate={{ opacity: 1 }}
                    transition={{
                        delay: 0.2
                    }}
                    exit={{ opacity: 0 }}
                >
                    <Heading as="h1" textAlign="center" mb="2rem">
                        Projects
                    </Heading>
                </MotionBox>
                <Grid
                    templateColumns={{ base: '1fr', lg: 'repeat(2, 1fr)' }}
                    width="100%"
                    maxWidth="700px"
                    justifyContent="center"
                    align="center"
                    gap={10}
                >
                    {projects.map((project) => (
                        <GridItem key={project.id} width="100%">
                            <Project project={project} />
                        </GridItem>
                    ))}
                </Grid>
            </Flex>
            <Footer />
        </>
    );
};

export default Projects;
