// Immediately set language from localStorage to prevent flicker
(function() {
  try {
    var savedLang = localStorage.getItem('portfolio-lang') || 'en';
    document.documentElement.setAttribute('lang', savedLang);
  } catch (e) {
    document.documentElement.setAttribute('lang', 'en');
  }
})();

function togglePortfolioLanguage() {
  var currentLang = document.documentElement.getAttribute('lang') || 'en';
  var newLang = currentLang === 'en' ? 'id' : 'en';
  document.documentElement.setAttribute('lang', newLang);
  try {
    localStorage.setItem('portfolio-lang', newLang);
  } catch (e) {}
}

// Single delegated click listener — only one, no duplicates
document.addEventListener('click', function(e) {
  var btn = e.target.closest('#lang-toggle, .lang-toggle-btn');
  if (btn) {
    e.preventDefault();
    e.stopPropagation();
    togglePortfolioLanguage();
  }
});

// Adjust photo-card width to match the name text width (home page only)
function adjustPhotoCardSize() {
  var nameEl = document.querySelector('.hero-copy h1');
  var photoCard = document.querySelector('.photo-card');
  if (nameEl && photoCard) {
    photoCard.style.maxWidth = '';
    var nameWidth = nameEl.getBoundingClientRect().width;
    var screenWidth = window.innerWidth;
    if (screenWidth > 1100) {
      var finalWidth = Math.min(nameWidth, 620);
      if (finalWidth > 300) {
        photoCard.style.maxWidth = finalWidth + 'px';
      }
    }
  }
}

window.addEventListener('resize', adjustPhotoCardSize);
document.addEventListener('DOMContentLoaded', adjustPhotoCardSize);

// Lightbox Modal for Clickable Images
document.addEventListener('DOMContentLoaded', function() {
  if (document.querySelector('.lightbox-modal')) return;

  var lightbox = document.createElement('div');
  lightbox.className = 'lightbox-modal';
  lightbox.setAttribute('role', 'dialog');
  lightbox.setAttribute('aria-label', 'Image preview');
  lightbox.innerHTML = '<img class="lightbox-content" src="" alt="Enlarged preview" />';
  document.body.appendChild(lightbox);

  var lightboxImg = lightbox.querySelector('.lightbox-content');

  lightbox.addEventListener('click', function() {
    lightbox.classList.remove('active');
    setTimeout(function() {
      if (!lightbox.classList.contains('active')) {
        lightboxImg.src = '';
      }
    }, 300);
  });

  window.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) {
      lightbox.classList.remove('active');
      setTimeout(function() { lightboxImg.src = ''; }, 300);
    }
  });

  var images = document.querySelectorAll('.certificate-card img, .gallery-item img, .case-study-block img, main img, article img');
  images.forEach(function(img) {
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
