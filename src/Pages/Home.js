import React from 'react';
import Hero from '../../src/Components/Hero/Hero';
import Welcome from '../Components/Welcome/Welcome';

function Home() {
  return (
    <>
      <Hero />
      <Welcome />
      
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2334117942638644"
        crossOrigin="anonymous"
      ></script>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-2334117942638644"
        data-ad-slot="5257105614"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
      <script>{(adsbygoogle = window.adsbygoogle || []).push({})}</script>

      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2334117942638644"
        crossOrigin="anonymous"
      ></script>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-2334117942638644"
        data-ad-slot="6653361035"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
      <script>{(adsbygoogle = window.adsbygoogle || []).push({})}</script>
    </>
  );
}

export default Home;
