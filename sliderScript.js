
    const slider = document.getElementById('slider');
    const slideCount = 7;
    const slides = [];

    const imageUrls = [
      "https://raw.githubusercontent.com/Bobbyxxxxx/creators-core/main/images/sneakPeaks/sneakPeak-1.jpg",
      "https://raw.githubusercontent.com/Bobbyxxxxx/creators-core/main/images/sneakPeaks/sneakPeak-2.jpg",
      "https://raw.githubusercontent.com/Bobbyxxxxx/creators-core/main/images/sneakPeaks/sneakPeak-3.jpg",
      "https://raw.githubusercontent.com/Bobbyxxxxx/creators-core/main/images/sneakPeaks/sneakPeak-4.jpg",
      "https://raw.githubusercontent.com/Bobbyxxxxx/creators-core/main/images/sneakPeaks/sneakPeak-5.jpg",
      "https://raw.githubusercontent.com/Bobbyxxxxx/creators-core/main/images/sneakPeaks/sneakPeak-6.jpg",
    ];

    const screenWidth = window.innerWidth;
    const centerX = screenWidth / 2;

    // Track hover state
    let isHovered = false;

    for (let i = 0; i < slideCount; i++) {
      const div = document.createElement('div');
      div.className = 'slide';
      const img = document.createElement('img');
      img.src = imageUrls[i % imageUrls.length];
      div.appendChild(img);
      slider.appendChild(div);

      // Detect hover
      div.addEventListener('mouseenter', () => {
        isHovered = true;
      });
      div.addEventListener('mouseleave', () => {
        isHovered = false;
      });

      slides.push({
        el: div,
        x: Math.random() * screenWidth,
        speed: 1 + Math.random() * 0.5
      });
    }

    function updateSlides() {
      if (!isHovered) {
        for (let s of slides) {
          s.x += s.speed;
          if (s.x > screenWidth + 150) s.x = -150;

          const distToCenter = Math.abs(s.x - centerX);
          const maxScale = 1.6;
          const scale = maxScale - (distToCenter / centerX) * (maxScale - 0.6);
          const opacity = 1 - (distToCenter / centerX) * 0.6;

          s.el.style.left = `${s.x}px`;
          s.el.style.transform = `translate(-50%, -50%) scale(${scale})`;
          s.el.style.opacity = opacity;
          s.el.style.zIndex = Math.round(scale * 100);
        }
      }

      requestAnimationFrame(updateSlides);
    }

    updateSlides();