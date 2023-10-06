document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('sm-menu');
  
    menuButton.addEventListener('click', function() {
      mobileMenu.classList.toggle('hidden');

      if (menuButton.textContent === 'close') {
        menuButton.textContent = 'menu';
      } else {
        menuButton.textContent = 'close';
      }
    });

  });
