import 'styles/globals.scss';
import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import { AnimatePresence } from 'framer-motion';
import 'overlayscrollbars/css/OverlayScrollbars.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import 'react-image-lightbox/style.css';
import * as gtag from 'utils/gtag';
import { useEffect } from 'react';

function MyApp({ Component, pageProps, router }: AppProps) {
    useEffect(() => {
        const handleRouteChange = (url: URL) => {
            gtag.pageview(url);
        };
        router.events.on('routeChangeComplete', handleRouteChange);
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, [router.events]);

    return (
        <>
            <ChakraProvider>
                <OverlayScrollbarsComponent>
                    <AnimatePresence exitBeforeEnter>
                        <Component {...pageProps} key={router.route} />
                    </AnimatePresence>
                </OverlayScrollbarsComponent>
            </ChakraProvider>
        </>
    );
}

export default MyApp;
