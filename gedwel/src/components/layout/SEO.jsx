import React from 'react';
import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';

const SEO = ({ title, description, keywords, image, url }) => {
    const siteTitle = 'GEDWEL SOLUTION LIMITED';
    const defaultDescription = 'GEDWEL SOLUTION LIMITED - Construction & Medical Supply Company in Kenya. Specializing in high-quality medical equipment and comprehensive infrastructure solutions.';
    const defaultKeywords = 'construction Kenya, medical equipment Kenya, road construction, water works, civil engineering';
    const defaultImage = '/logo.png'; // Using logo as default image
    const siteUrl = 'https://gedwelsolution.co.ke';

    return (
        <Helmet>
            {/* Standard Metadata */}
            <title>{title ? `${title} | ${siteTitle}` : siteTitle}</title>
            <meta name="description" content={description || defaultDescription} />
            <meta name="keywords" content={keywords || defaultKeywords} />
            <link rel="canonical" href={url ? `${siteUrl}${url}` : siteUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={url ? `${siteUrl}${url}` : siteUrl} />
            <meta property="og:title" content={title ? `${title} | ${siteTitle}` : siteTitle} />
            <meta property="og:description" content={description || defaultDescription} />
            <meta property="og:image" content={image || defaultImage} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={url ? `${siteUrl}${url}` : siteUrl} />
            <meta property="twitter:title" content={title ? `${title} | ${siteTitle}` : siteTitle} />
            <meta property="twitter:description" content={description || defaultDescription} />
            <meta property="twitter:image" content={image || defaultImage} />
        </Helmet>
    );
};

SEO.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    keywords: PropTypes.string,
    image: PropTypes.string,
    url: PropTypes.string,
};

export default SEO;
