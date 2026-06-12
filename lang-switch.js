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
});
