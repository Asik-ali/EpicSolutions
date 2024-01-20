// AdSense.js
import React, { useEffect } from 'react';

const AdSense = () => {
  useEffect(() => {
    // Check if the adsbygoogle array exists
    if (!window.adsbygoogle) {
      // Load Google AdSense script
      const script = document.createElement('script');
      script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2334117942638644";
      script.async = true;
      document.head.appendChild(script);

      script.onload = () => {
        // Initialize AdSense
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      };

      // Display ads after script is loaded
      return () => {
        document.head.removeChild(script);
      };
    }
  }, []);

  return (
    <div style={{ height: "200px", width: "300px" }}>
        <p>Ad</p>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-layout="in-article"
        data-ad-format="fluid"
        data-ad-client="ca-pub-2334117942638644"
        data-ad-slot="7272910777"
      />
    </div>
  );
};

export default AdSense;
