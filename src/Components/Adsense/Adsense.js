// AdSense.js
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const AdSense = ({ adClient, adSlot, format, layout }) => {
  useEffect(() => {
    if (!window.adsbygoogle) {
      const script = document.createElement('script');
      script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
      script.async = true;
      document.head.appendChild(script);

      script.onload = () => {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      };

      return () => {
        document.head.removeChild(script);
      };
    }
  }, []);

  return (
    <div>
      <p>Ad</p>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-layout={layout}
        data-ad-format={format}
        data-ad-client={adClient}
        data-ad-slot={adSlot}
      />
    </div>
  );
};

AdSense.propTypes = {
  adClient: PropTypes.string.isRequired,
  adSlot: PropTypes.string.isRequired,
  format: PropTypes.string.isRequired,
  layout: PropTypes.string.isRequired,
};

export default AdSense;
