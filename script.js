document.addEventListener("DOMContentLoaded", () => {

  /* Lightbox functionality */
  const images = document.querySelectorAll('.carousel-track img');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const closeBtn = document.querySelector('.lightbox .close');

  if (images.length > 0) {
    images.forEach(img => {
      img.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxImg.src = img.src;
      });
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      lightbox.style.display = 'none';
    });
  }

  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        lightbox.style.display = 'none';
      }
    });
  }

  /* Fade-up scroll animations */
  const faders = document.querySelectorAll(".fade-up");

  if (faders.length > 0) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    });

    faders.forEach(el => observer.observe(el));
  }

});
