import { projectFilePaths, PROJECTS_PATH } from 'utils/mdxUtils';
import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
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
import useCustomScrollbar from 'hooks/useCustomScrollbar';
import { GetStaticProps } from 'next';

interface ProjectsProps {
    projects: ProjectType[];
}

const Projects = ({ projects }: ProjectsProps) => {
    useCustomScrollbar();

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
