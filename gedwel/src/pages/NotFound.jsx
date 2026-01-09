import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/layout/SEO';

const NotFound = () => {
    return (
        <>
            <SEO title="Page Not Found" description="The page you are looking for does not exist." />
            <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
                <h1 className="text-9xl font-bold text-gray-200 dark:text-gray-800">404</h1>
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white mt-4">Page Not Found</h2>
                <p className="text-gray-600 dark:text-gray-400 mt-2 mb-8 max-w-md">
                    The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                </p>
                <Link
                    to="/"
                    className="bg-secondary hover:bg-secondary/90 text-white font-bold py-3 px-8 rounded transition duration-300"
                >
                    Go Back Home
                </Link>
            </div>
        </>
    );
};

export default NotFound;
