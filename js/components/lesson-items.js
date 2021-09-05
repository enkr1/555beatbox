class Lesson {
    constructor(imgSrc, ridirectionPath) {
        this.imgSrc = imgSrc;
        this.ridirectionPath = ridirectionPath;
    }

    // images/coming-soon.jpg

    display(index) {
        // this.imgSrc = "images/coming-soon.jpg";

        let item =
            `<div class="swiper-slide lesson-item">` +

            `<a target="_blank" href="${this.ridirectionPath}">` +

            `<picture class="lesson-img-div">` +
            `<img src="${this.imgSrc}" alt="555 Beatbox Initiative | Lesson Image" class="swiper-lazy"/>` +
            `</picture>` +

            `</a>` +

            `<div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>` +

            `</div>`;

        return item;
    }
}

var listOfLessons = [];

listOfLessons.push(
    new Lesson(
        "images/lessons/trial-1.png",
        "https://enkr1.github.io",
        "sign up"
    ),
    new Lesson(
        "images/lessons/course-1.png",
        "https://enkr1.github.io",
        "view"
    ),
    new Lesson(
        "https://media.discordapp.net/attachments/826877621061156904/826879196735209492/24.jpg",
        "https://enkr1.github.io",
        null
    ),
);

// NOTE: For debugging purposes only.
let jsonData_lesson = JSON.stringify(listOfLessons, null, 2);
// console.log(jsonData_lesson);

class LessonItems extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        // this.innerHTML = "<div class='event-list'>";
        for (let i = 0; i < listOfLessons.length; i++) {
            this.innerHTML += listOfLessons[i].display(i + 1);
        }
        // this.innerHTML += "</div>";
        // data-aos="slide-up" data-aos-delay="200"
        this.innerHTML = `
        <div class="swiper lesson-swiper">
        <div class="swiper-wrapper">
        ${this.innerHTML}
        </div>

        <!--<div class="swiper-pagination"></div>-->

        <div class="swiper-button-prev swiper-button"></div>
        <div class="swiper-button-next swiper-button"></div>
      
        <!--<div class="swiper-scrollbar"></div>-->

        </div>`;
    }
}


customElements.define('lesson-items-component', LessonItems);


// Official site: https://swiperjs.com/get-started
// gh: https://github.com/nolimits4web/swiper/
const lessonSwiper = new Swiper('.lesson-swiper', {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    spaceBetween: 30,
    centeredSlides: true,
    slidesPerView: (screen.width > 992) ? "auto" : 1,
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

    // autoplay: {
    //     delay: 5000,
    //     disableOnInteraction: false,
    // },

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
        // renderBullet: function (index, className) {
        //   return '<span class="' + className + '">' + (index + 1) + "</span>";
        // },
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
        hide: true,
    },

});