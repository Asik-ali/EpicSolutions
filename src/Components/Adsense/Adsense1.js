import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

const AdSenseComponent1 = () => {
  useEffect(() => {
    // Load AdSense script
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);

  return (
    <div>
      <Helmet>
     
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2334117942638644"
     crossorigin="anonymous"></script>
      </Helmet>

      <div>
        <p>Ad1</p>
        <ins
          className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client="ca-pub-2334117942638644"
          data-ad-slot="7272910777"
          data-ad-layout="in-article"
          data-ad-format="fluid"
        ></ins>
      </div>
    </div>
  );
};

export default AdSenseComponent1;
