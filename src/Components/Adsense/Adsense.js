import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';

const AdSenseComponent = () => {
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    if (window.adsbygoogle) {
      window.adsbygoogle.push({});
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
    script.async = true;
    script.crossOrigin = 'anonymous';

    script.onload = () => {
      setScriptLoaded(true);
      if (window.adsbygoogle) {
        window.adsbygoogle.push({});
      }
    };

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div style={{ width: '100%' }}>
      <Helmet>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
          crossOrigin="anonymous"
        ></script>
      </Helmet>

      <div>
        <p>Ad</p>
        {scriptLoaded && (
          <ins
            className="adsbygoogle"
            style={{ display: 'block' }}
            data-ad-client="ca-pub-2334117942638644"
            data-ad-slot="5257105614"
            data-ad-format="auto"
            data-full-width-responsive="true"
          ></ins>
        )}
      </div>
    </div>
  );
};

export default AdSenseComponent;
