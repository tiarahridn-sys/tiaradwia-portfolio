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
    });
  }
});
