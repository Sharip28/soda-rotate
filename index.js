document.addEventListener('DOMContentLoaded', function() {
  const backgroundImages = [
    './assets/background.jpg',
    'assets/red_image.png',
    'assets/soda-min.png',
    'assets/yellow_image.png',
    'assets/rock1.png'
  ];
  const loaderOverlay = document.querySelector('.loader-overlay');
  let loadedImagesCount = 0;
  const totalImages = backgroundImages.length;

  backgroundImages.forEach((src) => {
    const img = new Image();
    img.src = src;
    img.onload = imageLoaded;
    img.onerror = imageLoaded; // In case of an error, consider the image loaded
  });

  function imageLoaded() {
    loadedImagesCount++;
    if (loadedImagesCount === totalImages) {
      loaderOverlay.style.display = 'none';
    }
  }
});
