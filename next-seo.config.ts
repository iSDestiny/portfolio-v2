const title = `Jason Bugallon's developer portfolio`;
const description =
    'Software developer and UCI Class of 2020 Graduate, actively seeking new opportunities';

const SEO = {
    title,
    description,
    canonical: 'https://jasonbugallon.com',
    openGraph: {
        type: 'website',
        locale: 'en_IE',
        url: 'https://jasonbugallon.com',
        title,
        description,
        images: [
            {
                url: 'https://jasonbugallon.com/static/images/banner.png',
                alt: title,
                width: 1250,
                height: 650
            }
        ]
    },
    twitter: {
        handle: '@JasonBugallon',
        site: '@JasonBugallon',
        cardType: 'summary_large_image'
    }
};

export default SEO;
