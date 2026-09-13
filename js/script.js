const openNav = document.querySelector('.hamburger');
const navItems = document.querySelector('.mobileVide');
const mobileLinks = document.querySelectorAll('.mobileVide a');

if (openNav && navItems) {
  openNav.addEventListener('click', () => {
    const isOpen = navItems.classList.toggle('open');
    openNav.setAttribute('aria-expanded', String(isOpen));
  });

  mobileLinks.forEach((link) => {
    link.addEventListener('click', () => {
      navItems.classList.remove('open');
      openNav.setAttribute('aria-expanded', 'false');
    });
  });
}

const copy = document.querySelector('.copy');
let now = new Date().getFullYear();
copy.textContent =  now + ' Developed with 🤍 by Famous Tech';