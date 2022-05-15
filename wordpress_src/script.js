
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


// =============== Global functions ===============
// https://stackoverflow.com/questions/9899372/pure-javascript-equivalent-of-jquerys-ready-how-to-call-a-function-when-t
function docReady(fn) {
  // see if DOM is already available
  if (document.readyState === "complete" || document.readyState === "interactive") {
    // call on next available tick
    setTimeout(fn, 1);
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
}

docReady(function () {
  let startAt = performance.now();

  // ==================== SWIPER ====================
  // Official site: https://swiperjs.com/get-started
  // gh: https://github.com/nolimits4web/swiper/
  const swiperLesson = new Swiper('.lesson-swiper', {
    effect: "coverflow",
    grabCursor: true,
    spaceBetween: 30,
    centeredSlides: true,
    slidesPerView: (screen.width > 992) ? "auto" : 1.1, // TODO: Check if this is what causes the problem
    // slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    direction: 'horizontal',
    loop: true,
    lazy: true,
    mousewheel: false, // true is good for vertical
    freeMode: false, // scroll without section parting

    keyboard: {
      enabled: false,
    },

    // Pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
      // renderBullet: function (index, className) {
      //   return '<span class="' + className + '">' + (index + 1) + "</span>";
      // },
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    scrollbar: {
      el: '.swiper-scrollbar',
      hide: true,
    },

  });

  const swiperEvent = new Swiper('.event-swiper', {
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

  // This generates the animation of the main landing text
  const svgBeatbox = document.querySelectorAll("#svg-beatbox path");

  // Deley 4.5s before executing because of the GIF animation which will take 4.5s to load.
  setTimeout(() => {
    for (let i = 0; i < svgBeatbox.length; i++) {
      svgBeatbox[i].classList.add("animated");
      svgBeatbox[i].style.strokeDasharray = svgBeatbox[i].getTotalLength();
      svgBeatbox[i].style.strokeDashoffset = svgBeatbox[i].getTotalLength();
    }
  }, 4400);


  // Preload
  docReady(function () {
    // DOM is loaded and ready for manipulation here
    const preload = document.querySelector('.preload');
    const gif = document.querySelector('.preload-gif');

    document.body.classList.remove("hide-all-in-body");

    // https://medium.com/@moulayjam/what-is-settimeout-in-javascript-and-how-to-use-settimeout-synchronously-5653c5ffee3e
    var secondStep = function (call_back) {
      setTimeout(function () {
        gif.classList.add('preload-finish');
        // dump("GIF Removed!");
        call_back(); // This will be the parameter function.
      },
        // TODO: Change back to 4.5s before pushing
        // 0
        4500
      );
    };

    secondStep(function () {
      preload.classList.add('preload-finish');
      // only when finish loading, add y scroll
      var root = document.getElementsByTagName('html')[0]; // '0' to assign the first (and only `HTML` tag)
      root.classList.add('enablescroll');
    });
  });

  let endAt = performance.now();
  console.log(`🧪 The time spent to load: ${(endAt - startAt) / 1000} second(s).`);
});
