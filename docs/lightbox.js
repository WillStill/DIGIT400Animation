function openLightbox(videoUrl) {
  const lightbox = document.getElementById('lightbox');
  const video = document.getElementById('video');
  video.setAttribute('src', videoUrl);
  lightbox.style.display = 'flex';
}

function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  const video = document.getElementById('video');
  video.pause();
  video.removeAttribute('src');
  lightbox.style.display = 'none';
}
