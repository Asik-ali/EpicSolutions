import React, { useEffect } from 'react';
import Hero from '../../src/Components/Hero/Hero';
import Welcome from '../Components/Welcome/Welcome';

function Home() {
  useEffect(() => {
    // Load Google AdSense script only once
    const script = document.createElement('script');
    script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
    script.async = true;
    script.crossOrigin = 'anonymous';
    document.head.appendChild(script);

    return () => {
      // Cleanup script on component unmount
      document.head.removeChild(script);
    };
  }, []);

  useEffect(() => {
    // Reload ads when the component mounts or updates
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  });

  return (
    <>
      <Hero />
      {/* third Ad */}
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-2334117942638644"
        data-ad-slot="9100496759"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
      <Welcome />

      {/* First Ad */}
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-2334117942638644"
        data-ad-slot="1794203448"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>

      {/* Second Ad */}
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-2334117942638644"
        data-ad-slot="6653361035"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </>
  );
}

export default Home;
