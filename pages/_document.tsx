import Document, { Html, Head, Main, NextScript } from 'next/document';
import { GA_TRACKING_ID } from 'utils/gtag';

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html lang="en">
                <Head>
                    {process.env.NODE_ENV === 'production' && (
                        <>
                            <script
                                async
                                src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
                            />
                            <script
                                dangerouslySetInnerHTML={{
                                    __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
          `
                                }}
                            />
                        </>
                    )}
                    <meta content="#4FD1C5" name="theme-color" />
                    <meta content="#4FD1C5" name="msapplication-TileColor" />
                    <link
                        rel="apple-touch-icon"
                        sizes="180x180"
                        href="/static/favicons/apple-touch-icon.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="32x32"
                        href="/static/favicons/favicon-32x32.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="16x16"
                        href="/static/favicons/favicon-16x16.png"
                    />
                    <link
                        rel="manifest"
                        href="/static/favicons/site.webmanifest"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
