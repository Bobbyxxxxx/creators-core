document.addEventListener('DOMContentLoaded', () => {
  const marquee = document.getElementById('marquee');

  marquee.addEventListener('click', (e) => {
    if (e.target.tagName === 'IMG') {
      // Remove clicked class from all images
      [...marquee.querySelectorAll('img.clicked')].forEach(img => img.classList.remove('clicked'));
      // Add clicked class to the clicked image
      e.target.classList.add('clicked');
    }
  });
});
