import Navbar from 'components/Navbar';
import { projectFilePaths, PROJECTS_PATH } from 'utils/mdxUtils';
import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import hydrate from 'next-mdx-remote/hydrate';
import renderToString from 'next-mdx-remote/render-to-string';
import { KeyboardEvent, useEffect, useState } from 'react';
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
    useBreakpointValue,
    UnorderedList,
    ListItem
} from '@chakra-ui/react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { Carousel } from 'react-responsive-carousel';
import { SRLWrapper, useLightbox } from 'simple-react-lightbox';
import Footer from 'components/Footer';
import ProjectHeader from 'components/ProjectHeader';
import useCustomScrollbar from 'hooks/useCustomScrollbar';
import ProjectBody from 'components/ProjectBody';
import { GetStaticPaths, GetStaticProps } from 'next';

interface ProjectPageProps {
    source: string;
    frontMatter: {
        title: string;
        summary: string;
        source: string;
        images: string[];
        stack: string[];
        live?: string;
    };
}

interface mdxNodeProps {
    children: any;
    href?: string;
}

const components = {
    a: ({ children, href }: mdxNodeProps) => {
        const { colorMode } = useColorMode();

        return (
            <Link
                rel="noopener noreferrer"
                href={href}
                color={colorMode === 'light' ? 'teal.600' : 'teal.400'}
                _hover={{
                    color: colorMode === 'light' ? 'teal.700' : 'teal.500',
                    textDecor: 'underline'
                }}
                target="_blank"
            >
                {children}
            </Link>
        );
    },
    h1: ({ children }: mdxNodeProps) => (
        <Heading size="xl" as="h1" my="1.5rem">
            {children}
        </Heading>
    ),
    h2: ({ children }: mdxNodeProps) => (
        <Heading size="lg" as="h2" my="1.5rem">
            {children}
        </Heading>
    ),
    h3: ({ children }: mdxNodeProps) => (
        <Heading size="md" as="h3" my="1.5rem">
            {children}
        </Heading>
    ),
    h4: ({ children }: mdxNodeProps) => (
        <Heading size="sm" as="h4" my="1.5rem">
            {children}
        </Heading>
    ),
    h5: ({ children }: mdxNodeProps) => (
        <Heading size="sm" as="h5" my="1.5rem">
            {children}
        </Heading>
    ),
    h6: ({ children }: mdxNodeProps) => (
        <Heading size="sm" as="h6" my="1.5rem">
            {children}
        </Heading>
    ),
    p: ({ children }: mdxNodeProps) => <Text fontSize="lg">{children}</Text>,
    ul: ({ children }: mdxNodeProps) => (
        <UnorderedList pl="1rem">{children}</UnorderedList>
    ),
    li: ({ children }: mdxNodeProps) => <ListItem>{children}</ListItem>
};

const ProjectPage = ({ source, frontMatter }: ProjectPageProps) => {
    const {
        title,
        summary,
        source: sourceCode,
        images,
        stack,
        live
    } = frontMatter;
    const { openLightbox } = useLightbox();
    const content = hydrate(source, { components });

    const handleCarouselKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
        if (event.key === 'Enter') openLightbox();
    };

    useCustomScrollbar();

    return (
        <>
            <Head>
                <title>
                    Jason Bugallon's Web Developer Portfolio | {title}
                </title>
            </Head>
            <Navbar />
            <Flex
                as="main"
                direction="column"
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
                    display={source ? 'flex' : 'none'}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    exit={{ opacity: 0 }}
                    direction="column"
                    maxW="1000px"
                    w="100%"
                >
                    <ProjectHeader
                        title={title}
                        summary={summary}
                        source={sourceCode}
                        stack={stack}
                        live={live}
                    />
                    <SRLWrapper>
                        <Box
                            as={Carousel}
                            boxShadow="5px 5px 5px rgba(0,0,0,0.6)"
                            my="1rem"
                            _focus={{
                                outline: '4px solid teal'
                            }}
                            id="hello"
                            showStatus={false}
                            showThumbs={false}
                            cursor="pointer"
                            swipeable
                            emulateTouch
                            useKeyboardArrows
                            dynamicHeight
                        >
                            {images.map((image, index) => (
                                <Box
                                    key={index}
                                    tabIndex={0}
                                    onClick={() => openLightbox(index)}
                                    onKeyDown={(e) => handleCarouselKeyDown(e)}
                                >
                                    <img src={image} />
                                </Box>
                            ))}
                        </Box>
                    </SRLWrapper>
                    <Box as="main" mt="1rem">
                        <Box as="main" mt="1rem">
                            {content}
                        </Box>
                    </Box>
                </MotionBox>
            </Flex>
            <Footer />
        </>
    );
};

export default ProjectPage;

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const projectFilePath = path.join(PROJECTS_PATH, `${params.slug}.mdx`);
    const source = fs.readFileSync(projectFilePath);
    const { content, data } = matter(source);

    const mdxSource = await renderToString(content, {
        components,
        scope: data
    });

    return {
        props: {
            source: mdxSource,
            frontMatter: data
        }
    };
};

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = projectFilePaths
        .map((path) => path.replace(/\.mdx?$/, ''))
        .map((slug) => ({ params: { slug } }));

    return {
        paths,
        fallback: false
    };
};
