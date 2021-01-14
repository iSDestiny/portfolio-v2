import { Flex, Grid, GridItem, Heading } from '@chakra-ui/react';
import Footer from 'components/Footer';
import MotionBox from 'components/MotionBox';
import Navbar from 'components/Navbar';
import Project, { Project as ProjectType } from 'components/Project';
import fs from 'fs';
import matter from 'gray-matter';
import useCustomScrollbar from 'hooks/useCustomScrollbar';
import { GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';
import path from 'path';
import { projectFilePaths, PROJECTS_PATH } from 'utils/mdxUtils';

const title = 'Projects | Jason Bugallon';
const description =
    'My collection of software projects that I have created throughout my time as a developer';
const url = 'https://jasonbugallon.com/projects';

interface ProjectsProps {
    projects: ProjectType[];
}

const Projects = ({ projects }: ProjectsProps) => {
    useCustomScrollbar();

    return (
        <>
            <NextSeo
                title={title}
                description={description}
                canonical={url}
                openGraph={{
                    url,
                    title,
                    description
                }}
            />
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
                        <GridItem key={project.route} width="100%">
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

export const getStaticProps: GetStaticProps = async () => {
    const projects: ProjectType[] = projectFilePaths.map((pathname) => {
        const route = pathname.replace(/\.mdx?$/, '');
        const source = fs.readFileSync(path.join(PROJECTS_PATH, pathname));
        const { data } = matter(source) as any;
        return { ...data, route };
    });

    projects.sort((a, b) => a.rank - b.rank);

    return {
        props: {
            projects
        }
    };
};
