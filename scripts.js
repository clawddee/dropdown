document.addEventListener('DOMContentLoaded', () => {
  const dropdowns = document.querySelectorAll('.menu-item.dropdown');

  dropdowns.forEach(dropdown => {
    dropdown.addEventListener('click', (event) => {
      event.stopPropagation();
      const dropdownMenu = dropdown.querySelector('.dropdown-menu');
      const isVisible = dropdownMenu.style.display === 'block';
      document.querySelectorAll('.dropdown-menu').forEach(menu => menu.style.display = 'none');
      dropdownMenu.style.display = isVisible ? 'none' : 'block';
    });
  });

  document.addEventListener('click', () => {
    document.querySelectorAll('.dropdown-menu').forEach(menu => menu.style.display = 'none');
  });

  const hamburgerMenu = document.querySelector('.hamburger-menu');
  const mobileMenu = document.querySelector('.mobile-menu');

  if (hamburgerMenu && mobileMenu) {
    hamburgerMenu.addEventListener('click', () => {
      mobileMenu.classList.toggle('show');
    });

    document.addEventListener('click', (event) => {
      if (!event.target.closest('.nav-container') && !event.target.closest('.mobile-menu')) {
        mobileMenu.classList.remove('show');
      }
    });
  }
});
