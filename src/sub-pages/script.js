// script.js
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1, // Número de slides visibles
  spaceBetween: 10, // Espacio entre los slides
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
