import './styles.css'; // Importing global CSS
import React from 'react';

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />;
}

export default MyApp;
