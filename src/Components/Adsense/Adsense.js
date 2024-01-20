import React, { useEffect } from 'react';

const AdSense = () => {
  useEffect(() => {
    // Check if the adsbygoogle array exists
    if (!window.adsbygoogle) {
      // Load Google AdSense script
      const script = document.createElement('script');
      script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
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
    <div style={{height: "10%" , width : "10%"}}>
     <p>Ad</p>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-2334117942638644"
        data-ad-slot="5257105614"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
};

export default AdSense;
