import React, { useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';

const AdSense = ({ adClient, adSlot, format, layout }) => {
  const adScript = useMemo(() => {
    if (!window.adsbygoogle) {
      const script = document.createElement('script');
      script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
      script.async = true;
      document.head.appendChild(script);

      script.onload = () => {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      };

      return script;
    }
  }, []); // Empty dependency array ensures the script is created only once

  useEffect(() => {
    return () => {
      if (adScript) {
        document.head.removeChild(adScript);
      }
    };
  }, [adScript]);

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

AdSense.defaultProps = {
  layout: 'in-article', // Provide a default value for layout
};

export default AdSense;
