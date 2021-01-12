import { Box, Link } from '@chakra-ui/react';
import hydrate from 'next-mdx-remote/hydrate';

const components = {
    a: (props) => <button onClick={() => console.log(props)}>a</button>,
    heading: (props) => <button onClick={() => console.log(props)}>a</button>,
    text: (props) => <button onClick={() => console.log(props)}>a</button>
};

const ProjectBody = ({ source }: { source: string }) => {
    const content = hydrate(source, { components });
    return (
        <Box as="main" mt="1rem">
            {content}
        </Box>
    );
};

export default ProjectBody;
