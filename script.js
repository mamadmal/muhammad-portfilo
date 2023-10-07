// sm view header toggle 
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


  // swipper 
  const swiper = new Swiper('.swiper', {
    loop: true,
    //autoplay: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-nextt',
      prevEl: '.swiper-button-prevv',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
