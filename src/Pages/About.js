import React, { useEffect } from 'react';
import AboutContent from '../Components/About/About';

function About() {
  useEffect(() => {
    // This is equivalent to $(document).ready() in jQuery
    // It ensures that the code inside will run after the DOM is fully loaded
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagservices.com/tag/js/gpt.js';
    document.head.appendChild(script);

    script.onload = () => {
      // This function is called after the Google Publisher Tag (GPT) script is loaded
      window.googletag = window.googletag || { cmd: [] };
      window.googletag.cmd.push(() => {
        window.googletag.display('div-gpt-ad-1709375181924-0');
      });
    };

    // Clean up function to remove the script when the component is unmounted
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div>
      <AboutContent />
      <div id='div-gpt-ad-1709375181924-0' style={{ minWidth: '250px', minHeight: '50px' }} />
    </div>
  );
}

export default About;
