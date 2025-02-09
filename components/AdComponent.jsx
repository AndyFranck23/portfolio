'use client'
import React, { useEffect } from 'react';

const AdComponent = () => {
    useEffect(() => {
        const loadAdsenseScript = () => {
            if (!window.adsbygoogle) {
                const script = document.createElement('script');
                script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
                script.async = true;
                script.crossOrigin = 'anonymous';
                document.body.appendChild(script);
            }
        };

        loadAdsenseScript();

        try {
            if (window.adsbygoogle) {
                window.adsbygoogle.push({});
            }
        } catch (error) {
            console.error('Erreur lors du chargement d\'AdSense :', error);
        }
    }, []);

    return (
        <ins className="adsbygoogle"
            style={{ display: 'block' }}
            data-ad-client="ca-pub-3065520205265426"
            data-ad-slot="5430239938"
            data-ad-format="auto"
            data-full-width-responsive="true">
        </ins>
    );
};

export default AdComponent;
