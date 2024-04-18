new Swiper(".banner", {
  loop: true,

  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },

  pagination: {
    el: ".banner-pagination",
    clickable: true,
  },
});

new Swiper(".testimonal", {
  loop: true,

  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".testimonal-pagination",
    clickable: true,
  },
});
