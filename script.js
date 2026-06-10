const profileImage = document.querySelector('.photo-frame img');
const topButton = document.querySelector('.top-button');

if (profileImage && profileImage.alt.includes('Odoo')) {
  profileImage.src = 'assets/profile-odoo.jpg?v=2';
  profileImage.onerror = () => {
    profileImage.onerror = null;
    profileImage.src = 'assets/profile-odoo.svg?v=4';
  };
}

topButton?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
