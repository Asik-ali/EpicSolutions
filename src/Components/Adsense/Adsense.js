import React, { useEffect } from 'react';

const AdSenseComponent = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
    script.async = true;
    script.crossOrigin = 'anonymous';

    document.head.appendChild(script);

    script.onload = () => {
      // Check if there are existing ads before pushing an empty object
      if (window.adsbygoogle && window.adsbygoogle.length === 0) {
        window.adsbygoogle.push({});
      }
    };

    return () => {
      // Clean up: remove the script from the head when the component is unmounted
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div style={{ width: '10%' }}>
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
