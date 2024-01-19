import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AD1 = () => {
  const navigate = useNavigate();
  const [timer, setTimer] = useState(5);
  const [player, setPlayer] = useState(null);
  const [showButton, setShowButton] = useState(false);
  const [showAds, setShowAds] = useState(true);

  useEffect(() => {
    // Redirect to another page when the timer reaches 0
    const redirectToNextPage = () => {
      navigate('/next'); // Replace '/next' with the path you want to navigate to
    };

    // Load the YouTube API script
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // Setup YouTube player
    let ytPlayer;
    window.onYouTubeIframeAPIReady = () => {
      ytPlayer = new window.YT.Player('player', {
        height: '315',
        width: '560',
        videoId: 'tgbNymZ7vqY',
        playerVars: {
          autoplay: 1,
          mute: 1,
          controls: 0,
          disablekb: 1, // Disable keyboard controls
        },
        events: {
          onReady: (event) => {
            event.target.playVideo();
            setPlayer(event.target);
          },
          onStateChange: (event) => {
            if (event.data === window.YT.PlayerState.ENDED) {
              redirectToNextPage();
            } else if (event.data === window.YT.PlayerState.PAUSED) {
              // Pause the timer when the video is paused
              clearInterval(timerInterval);
            } else if (event.data === window.YT.PlayerState.PLAYING) {
              // Resume the timer when the video is playing
              startTimer();
            }
          },
        },
      });
    };

    let timerInterval;

    // Function to start the timer
    const startTimer = () => {
      timerInterval = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer <= 1) {
            clearInterval(timerInterval);
            setShowButton(true);
            setShowAds(false); // Hide ads when the timer reaches 0
            //redirectToNextPage(); // Automatically redirect when the timer reaches 0
          }
          return prevTimer - 1;
        });
      }, 1000);
    };

    return () => {
      // Cleanup interval and player on component unmount
      clearInterval(timerInterval);
      if (ytPlayer) {
        ytPlayer.destroy();
      }
    };
  }, [navigate]);

  // Function to handle button click and navigate to the next page
  const handleButtonClick = () => {
    navigate('/next'); // Replace '/next' with the path you want to navigate to
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800 text-white">

      {/* Ad 1 at the top */}
      {showAds && (
        <div className="ad-container" style={{ marginBottom: '10px' }}>
          <h1>Ad1</h1>
          <ins
            className="adsbygoogle"
            style={{ display: 'block' }}
            data-ad-client="ca-pub-2334117942638644"
            data-ad-slot="5257105614" /* Replace with your ad slot */
            data-ad-format="auto"
            data-full-width-responsive="true"
          ></ins>
          <script>(adsbygoogle = window.adsbygoogle || []).push({ });</script>
        </div>
      )}

      <div id="player" className="mb-4"></div>

      {timer > 0 && (
        <p className="text-xl font-bold">
          Redirecting in <span className="text-red-500">{timer}</span> seconds...
        </p>
      )}

      {showButton && (
        <button
          onClick={handleButtonClick}
          className="bg-green-500 text-white px-4 py-2 mt-4 rounded-full"
        >
          Go to Next Page
        </button>
      )}

      {/* Ad 2 - Space for ads */}
      {showAds && (
        <div className="ad-container" style={{ marginTop: '10px', marginBottom: '10px' }}>
          <h1>Ad2</h1>
          <ins
            className="adsbygoogle"
            style={{ display: 'block' }}
            data-ad-client="ca-pub-2334117942638644"
            data-ad-slot="6653361035"
            data-ad-format="auto"
            data-full-width-responsive="true"
          ></ins>
          <script>(adsbygoogle = window.adsbygoogle || []).push({ });</script>
        </div>
      )}

      {/* Ad 3 - Space for ads */}
      {showAds && (
        <div className="ad-container" style={{ marginTop: '10px', marginBottom: '10px' }}>
          <h1>Ad3</h1>
          <ins
            className="adsbygoogle"
            style={{ display: 'block' }}
            data-ad-client="ca-pub-2334117942638644"
            data-ad-slot="7272910777" /* Replace with your ad slot */
            data-ad-layout="in-article"
            data-ad-format="fluid"
            data-full-width-responsive="true"
          ></ins>
          <script>(adsbygoogle = window.adsbygoogle || []).push({ });</script>
        </div>
      )}

      {/* Ad 4 - Space for ads */}
      {showAds && (
        <div className="ad-container" style={{ marginTop: '10px', marginBottom: '10px' }}>
          <h1>Ad4</h1>
          <ins
            className="adsbygoogle"
            style={{ display: 'block' }}
            data-ad-format="autorelaxed"
            data-ad-client="ca-pub-2334117942638644"
            data-ad-slot="5576685729"
            data-full-width-responsive="true"
          ></ins>
          <script>(adsbygoogle = window.adsbygoogle || []).push({ });</script>
        </div>
      )}

      {/* Ad 5 at the bottom */}
      {showAds && (
        <div className="ad-container" style={{ marginTop: '10px' }}>
          <h1>Ad5</h1>
          <ins
            className="adsbygoogle"
            style={{ display: 'block' }}
            data-ad-client="ca-pub-2334117942638644"
            data-ad-slot="1794203448" 
            data-ad-format="auto"
            data-full-width-responsive="true"
          ></ins>
          <script>(adsbygoogle = window.adsbygoogle || []).push({ });</script>
        </div>
      )}
    </div>
  );
};

export default AD1;
