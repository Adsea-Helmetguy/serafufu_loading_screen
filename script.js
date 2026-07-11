// script.js

// Keep track of the current image index to avoid repeating the same image consecutively
let currentImageIndex = -1;
const bgImageEl = document.getElementById('bg-image');
const chibiImgEl = document.getElementById('chibi-img');

// Preload images to prevent lag/flashing during local loading
function preloadImages() {
  if (CONFIG.images && CONFIG.images.length > 0) {
    CONFIG.images.forEach(img => {
      const tempImg = new Image();
      tempImg.src = CONFIG.imageFolder + img;
    });
  }
}

// Select a random image index that is different from the current one
function getRandomImageIndex() {
  if (!CONFIG.images || CONFIG.images.length === 0) return -1;
  if (CONFIG.images.length === 1) return 0;

  let newIndex;
  do {
    newIndex = Math.floor(Math.random() * CONFIG.images.length);
  } while (newIndex === currentImageIndex);

  return newIndex;
}

// Change the background image source and fade it in
function displayRandomImage() {
  const index = getRandomImageIndex();
  if (index === -1) return;

  currentImageIndex = index;
  const imageName = CONFIG.images[currentImageIndex];
  
  // Set the image src
  bgImageEl.src = CONFIG.imageFolder + imageName;

  // Apply B&W and contrast styling filter if enabled
  if (CONFIG.enableBWFilter) {
    bgImageEl.classList.add('bw-filter');
  } else {
    bgImageEl.classList.remove('bw-filter');
  }

  // Once loaded (or immediately if cached), fade in
  bgImageEl.onload = () => {
    bgImageEl.classList.add('visible');
  };
  
  // Backup in case onload doesn't fire (e.g. cached images on some browsers)
  if (bgImageEl.complete) {
    bgImageEl.classList.add('visible');
  }
}

// Fade out the background image
function hideImage() {
  bgImageEl.classList.remove('visible');
}

// Transition loop controller
function runTransitionLoop() {
  setTimeout(() => {
    // Hide background image
    hideImage();

    // Wait exactly 1 second (invisibleDuration) before displaying the next random image
    setTimeout(() => {
      displayRandomImage();
      // Start the next cycle
      runTransitionLoop();
    }, CONFIG.invisibleDuration);

  }, CONFIG.visibleDuration);
}

// Initialize the screen components
function init() {
  // Set chibi image source from config
  if (chibiImgEl && CONFIG.chibiImage) {
    chibiImgEl.src = CONFIG.chibiImage;
    chibiImgEl.alt = "Chibi Sera";
  }

  preloadImages();

  // 1. Show the first image immediately
  displayRandomImage();

  // 2. Start the transition loop (14s visible, 1s invisible, repeat)
  runTransitionLoop();
}

// Run init when DOM content is loaded
document.addEventListener('DOMContentLoaded', init);
