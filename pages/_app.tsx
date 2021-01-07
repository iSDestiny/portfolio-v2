import 'styles/globals.scss';
import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import { useEffect } from 'react';
import Head from 'next/head';

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
                <Component {...pageProps} />
            </ChakraProvider>
        </>
    );
}

export default MyApp;
