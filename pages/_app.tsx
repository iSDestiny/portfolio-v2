import 'styles/globals.scss';
import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import { AnimatePresence } from 'framer-motion';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function MyApp({ Component, pageProps, router }: AppProps) {
    return (
        <>
            <ChakraProvider>
                <AnimatePresence exitBeforeEnter>
                    <Component {...pageProps} key={router.route} />
                </AnimatePresence>
            </ChakraProvider>
        </>
    );
}

export default MyApp;
