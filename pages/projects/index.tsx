import dynamic from 'next/dynamic';
const Navbar = dynamic(() => import('components/Navbar'), { ssr: false });

const Projects = () => {
    return (
        <>
            <Navbar />
        </>
    );
};

export default Projects;
