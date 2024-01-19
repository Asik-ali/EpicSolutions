import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

const AdSenseComponent = () => {
  useEffect(() => {
    if (window && window.adsbygoogle) {
      window.adsbygoogle.push({});
    }
  }, []);

  return (
    <div style={{ width: '50%' }}>
      <Helmet>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
          crossOrigin="anonymous"
        ></script>
      </Helmet>

      <div>
        <p>Ad</p>
        <ins
          className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client="ca-pub-2334117942638644"
          data-ad-slot="5257105614"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
      </div>
    </div>
  );
};

export default AdSenseComponent;
