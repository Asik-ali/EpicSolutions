import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

const AdSenseComponent3 = () => {
  useEffect(() => {
    // Load AdSense script
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);

  return (
    <div style={{ width: '50%' }}>
      <Helmet>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
          crossOrigin="anonymous"
        ></script>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2334117942638644"
     crossorigin="anonymous"></script>
      </Helmet>

      <div>
        <p>Ad2</p>
        <ins
          className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-format="autorelaxed"
     data-ad-client="ca-pub-2334117942638644"
     data-ad-slot="5576685729"
        ></ins>
      </div>
    </div>
  );
};

export default AdSenseComponent3;
