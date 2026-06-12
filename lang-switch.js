(function() {
  // Immediately set language from localStorage to prevent flicker
  var savedLang = localStorage.getItem('portfolio-lang') || 'en';
  document.documentElement.setAttribute('lang', savedLang);
})();

document.addEventListener('DOMContentLoaded', function() {
  var toggleBtn = document.getElementById('lang-toggle');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', function() {
      var currentLang = document.documentElement.getAttribute('lang') || 'en';
      var newLang = currentLang === 'en' ? 'id' : 'en';
      document.documentElement.setAttribute('lang', newLang);
      localStorage.setItem('portfolio-lang', newLang);
      // Re-run the image sizing adjustment on language switch as text length might change
      setTimeout(adjustPhotoCardSize, 50);
    });
  }

  // Adjust photo-card width to match the name text width
  function adjustPhotoCardSize() {
    var nameEl = document.querySelector('.hero-copy h1');
    var photoCard = document.querySelector('.photo-card');
    if (nameEl && photoCard) {
      // Temporarily clear inline maxWidth to measure the natural width of nameEl
      photoCard.style.maxWidth = '';
      
      var nameWidth = nameEl.getBoundingClientRect().width;
      var screenWidth = window.innerWidth;
      
      if (screenWidth > 1100) {
        // Desktop: set max-width of photo card to match name text width, with a max cap of 620px
        var finalWidth = Math.min(nameWidth, 620);
        if (finalWidth > 300) {
          photoCard.style.maxWidth = finalWidth + 'px';
        }
      } else {
        // Mobile/Tablet: clear dynamic width and use standard CSS layout
        photoCard.style.maxWidth = '';
      }
    }
  }

  // Adjust on initial load and resize
  adjustPhotoCardSize();
  window.addEventListener('resize', adjustPhotoCardSize);

  // ── Lightbox Modal for Clickable Images ──
  var lightbox = document.createElement('div');
  lightbox.className = 'lightbox-modal';
  lightbox.setAttribute('role', 'dialog');
  lightbox.setAttribute('aria-label', 'Image preview');
  lightbox.innerHTML = '<img class="lightbox-content" src="" alt="Enlarged preview" />';
  document.body.appendChild(lightbox);

  var lightboxImg = lightbox.querySelector('.lightbox-content');

  // Close lightbox on click
  lightbox.addEventListener('click', function() {
    lightbox.classList.remove('active');
    setTimeout(function() {
      if (!lightbox.classList.contains('active')) {
        lightboxImg.src = '';
      }
    }, 300);
  });

  // Close lightbox on Escape key
  window.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) {
      lightbox.classList.remove('active');
      setTimeout(function() {
        lightboxImg.src = '';
      }, 300);
    }
  });

  // Find all images within main sections or grids and make them clickable
  var images = document.querySelectorAll('.certificate-card img, .gallery-item img, .case-study-block img, main img, article img');
  images.forEach(function(img) {
    // Exclude hero profile photo
    if (img.closest('.photo-card')) return;
    img.classList.add('clickable-image');
    img.addEventListener('click', function(e) {
      e.stopPropagation();
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt || 'Enlarged preview';
      lightbox.classList.add('active');
    });
  });
});
