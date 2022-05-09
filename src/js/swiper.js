


new Swiper('.brand--swiper', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  slidesPerView: 1.3,
  spaceBetween: 16,
  speed: 600,
})


new Swiper('.swiper--repair', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  slidesPerView: 1.3,
  spaceBetween: 16,
  speed: 600,
})


new Swiper('.price--swiper', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  breakpoints: {
    320: {
      slidesPerView: 1.2
    },
    400: {
      slidesPerView: 1.5
    },
    500: {
      slidesPerView: 2
    },
    600: {
      slidesPerView: 2.2
    },
    700: {
      slidesPerView: 2.8
    },
  },

  spaceBetween: 16,
  speed: 600,
})
