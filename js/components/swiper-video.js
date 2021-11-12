class Video {
    constructor(ytId, temp) {
        this.ytId = ytId;
        this.temp = temp;
    }

    // images/coming-soon.jpg

    display(index) {
        // this.imgSrc = "images/coming-soon.jpg";

        let item =
            `<div class="swiper-slide video-item">` +
            `<iframe 
            class="video-iframe"
            src="https://www.youtube.com/embed/pFyA-TIpNAw?autoplay=0&mute=0&modestbranding=1&rel=0&controls=1&disablekb=0"
            width="100%" 
            height="100%"
            title="YouTube video player" 
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>` +
            `</div>`;

        return item;
    }
}

var listOfVideos = [];

listOfVideos.push(
    new Video(
        "1",
        "temp_param"
    ),
    new Video(
        "2",
        "temp_param"
    ),
    new Video(
        "3",
        "temp_param"
    ),
    new Video(
        "4",
        "temp_param"
    ),
);

// NOTE: For debugging purposes only.
let jsonData_video = JSON.stringify(listOfVideos, null, 2);
// console.log(jsonData_video);

class VideoItems extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        // this.innerHTML = "<div class='event-list'>";
        for (let i = 0; i < listOfVideos.length; i++) {
            this.innerHTML += listOfVideos[i].display(i + 1);
        }
        // this.innerHTML += "</div>";
        // data-aos="slide-up" data-aos-delay="200"
        this.innerHTML = `
        <div class="swiper video-swiper">
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


customElements.define('swiper-video-component', VideoItems);


// Official site: https://swiperjs.com/get-started
// gh: https://github.com/nolimits4web/swiper/
const swiperVideo = new Swiper('.video-swiper', {
    grabCursor: false,
    spaceBetween: 30,
    centeredSlides: true,
    slidesPerView: 1.2, // https://stackoverflow.com/questions/38406690/swiper-slides-showing-end-start-of-previous-next-slides-like-airbnb-slider
    direction: 'horizontal',
    loop: true,
    lazy: false,
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
        hide: true,
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