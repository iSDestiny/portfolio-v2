import 'styles/globals.scss';
import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import { useEffect } from 'react';
import Head from 'next/head';
import { AnimatePresence } from 'framer-motion';

function MyApp({ Component, pageProps, router }: AppProps) {
    useEffect(() => {
        if (router.pathname === '/') require('styles/about-globals.scss');
    });

    return (
        <>
            <Head>
                <title>Jason Bugallon's Software Developer Portfolio</title>
            </Head>
            <ChakraProvider>
                <AnimatePresence exitBeforeEnter>
                    <Component {...pageProps} key={router.route} />
                </AnimatePresence>
            </ChakraProvider>
        </>
    );
}

export default MyApp;
