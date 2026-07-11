// config.js
const CONFIG = {
  // Folder where the background images are located
  imageFolder: 'serafufu_images/',

  // Array of background images to display randomly
  // Add or remove filenames here to update the slideshow
  images: [
    'serafufu_set1.png',
    'serafufu_set2.png',
    'serafufu_set3.png',
    'serafufu_set4.png'
  ],

  // Path to the chibi character image
  chibiImage: 'loading/Chibi_sera.png',

  // Timing settings (in milliseconds)
  // Total interval is 15 seconds (15000ms)
  // The image disappears for 2 seconds (2000ms) and stays visible for 13 seconds (13000ms)
  visibleDuration: 13000,
  invisibleDuration: 2000,

  // Custom filters
  // Applies a high-contrast grayscale look to the background image
  enableBWFilter: true
};
