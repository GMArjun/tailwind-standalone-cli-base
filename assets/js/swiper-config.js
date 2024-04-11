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
