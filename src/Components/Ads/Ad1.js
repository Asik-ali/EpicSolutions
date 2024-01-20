import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AdSenseComponent from '../Adsense/Adsense';

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
      }, 3000);
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
      <AdSenseComponent />
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
    </div>
  );
};

export default AD1;
