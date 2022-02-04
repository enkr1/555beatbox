
console.log(
  `%c🌍 GitHub:\t\t https://github.com/enkr1 \t\tInstagram:\t https://www.instagram.com/enkr1/ \t\tFacebook:\t\t https://www.facebook.com/enkrbeatbox`,
  `
  color: white;

  font-family: Trebuchet MS;
  // font-family: cursive;
  // font-family: "Gill Sans", sans-serif;
  // font-family: Georgia, serif;
  // font-family: "Open Sans", sans-serif;
  // font-family: "Consolas", monospace;

  font-size: 1.2em;
  // text-shadow: whitegrey 1px 1px;
  // background-color: white;

  // background-image: $theme-background;
  background-image: linear-gradient(0deg, #121212, #b1b1b4);

  border-top-left-radius: .8rem;
  border-bottom-right-radius: .8rem;

  padding: .4rem 1.2rem;
  margin: .4rem;
  `);


// ==================== SWIPER ====================
// Official site: https://swiperjs.com/get-started
// gh: https://github.com/nolimits4web/swiper/
const swiperLesson = new Swiper('.event-swiper', {
  grabCursor: true,
  spaceBetween: 30,
  centeredSlides: true,
  slidesPerView: 1.5, // https://stackoverflow.com/questions/38406690/swiper-slides-showing-end-start-of-previous-next-slides-like-airbnb-slider
  direction: 'horizontal',
  loop: true,
  lazy: true,
  mousewheel: false, // true is good for vertical
  freeMode: false, // scroll without section parting
  keyboard: {
    enabled: false,
  },

  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  // Pagination
  pagination: {
    hide: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  scrollbar: {
    hide: true,
  },
});
