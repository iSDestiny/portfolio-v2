import dynamic from 'next/dynamic';
const Navbar = dynamic(() => import('components/Navbar'), { ssr: false });

const Contact = () => {
    return (
        <>
            <Navbar />
        </>
    );
};

export default Contact;
