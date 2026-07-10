'use strict';

/* eslint-disable no-undef */

let videoplayer;

function initYouTubePlayer() {
  if (typeof YT !== 'undefined' && YT.Player) {
    videoplayer = new YT.Player('videoPlayer', {
      events: {
        onReady: onYouTubePlayerReady,
      },
    });
  }
}

function onYouTubePlayerReady() {
  if (videoplayer && videoplayer.playVideo) {
    videoplayer.playVideo();
  }
}

function openVideo(event) {
  event.preventDefault();

  const video = document.getElementById('video-source');
  const videoScreen = document.getElementById('videoPlayer');

  if (!video || !videoScreen) {
    return;
  }

  video.style.display = 'flex';
  videoScreen.src = 'https://www.youtube.com/embed/26nx1zTAthw?enablejsapi=1&autoplay=1';
  initYouTubePlayer();
}

function closeVideo() {
  const video = document.getElementById('video-source');
  const videoScreen = document.getElementById('videoPlayer');

  if (!video || !videoScreen) {
    return;
  }

  video.style.display = 'none';
  videoScreen.src = '';

  if (videoplayer && videoplayer.stopVideo) {
    videoplayer.stopVideo();
  }
}

export function initVideoModal() {
  const video = document.getElementById('video-source');
  const btnOpen = document.getElementById('video-link');
  const btnOpen2 = document.getElementById('video-link-2');
  const btnClose = document.querySelector('.close');

  if (btnOpen) {
    btnOpen.addEventListener('click', openVideo);
  }

  if (btnOpen2) {
    btnOpen2.addEventListener('click', openVideo);
  }

  if (btnClose) {
    btnClose.addEventListener('click', closeVideo);
  }

  if (video) {
    window.addEventListener('click', (event) => {
      if (event.target === video) {
        closeVideo();
      }
    });
  }

  window.onYouTubeIframeAPIReady = initYouTubePlayer;
}
