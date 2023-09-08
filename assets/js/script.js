'use strict';

/**
 * navbar toggle
 */

const overlay = document.querySelector("[data-overlay]");
const navbar = document.querySelector("[data-navbar]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");

const navToggleFunc = function () {
  navToggleBtn.classList.toggle("active");
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
}

navToggleBtn.addEventListener("click", navToggleFunc);
overlay.addEventListener("click", navToggleFunc);

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", navToggleFunc);
}



/**
 * header active on scroll
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  window.scrollY >= 10 ? header.classList.add("active")
    : header.classList.remove("active");
});

const bannerElement = document.getElementById('hero-banner');
const imageArray = ['hero-banner.jpg', 'hero-banner2.jpg'];
let currentIndex = 0;

function changeBannerImage() {
  // Alterna para a próxima imagem no array
  currentIndex = (currentIndex + 1) % imageArray.length;
  const imageUrl = '/autofix/assets/images/' + imageArray[currentIndex];

  // Aplica a nova imagem com uma transição suave
  bannerElement.style.backgroundImage = `url(${imageUrl})`;

  // Adicione uma pequena pausa antes de iniciar a próxima transição
  setTimeout(() => {
    changeBannerImage();
  }, 3500);
}

// Inicie a troca de imagens
changeBannerImage();

/*=============== POPULAR SWIPER ===============*/
let swiperPopular = new Swiper(".popular__container", {
  loop: true,
  spaceBetween: 24,
  slidesPerView: 'auto',
  grabCursor: true,

  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  breakpoints: {
      768: {
        slidesPerView: 3,
      },
      1024: {
        spaceBetween: 48,
      },
  },
});