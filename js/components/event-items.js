class Event {
    constructor(name, date, desc, imgSrc, ridirectionPath, buttonName) {
        this.name = name;
        this.date = date;
        this.desc = desc;
        this.imgSrc = imgSrc;
        this.ridirectionPath = ridirectionPath;
        this.buttonName = buttonName ?? "view";
    }

    // images/coming-soon.jpg
    display(index) {
        // this.imgSrc = "images/coming-soon.jpg";

        let item =
            `<div class="swiper-slide event-item">` +

            `<picture class="event-img-div">` +
            `<img src="${this.imgSrc}" alt="Event Image" class="swiper-lazy"/>` +
            `</picture>` +

            `<div class="event-content">` +
            `<h1 class="event-title">${this.name}</h1>` +

            `<div class="event-description">` +
            `<span class="event-date">${this.date}</span>` +
            `<p>${this.desc}</p>` +
            `<a target="_blank" href="${this.ridirectionPath}" class="cta">${this.buttonName}</a>` +
            `</div>` +
            `</div>` +

            `<div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>` +

            `</div>`;

        return item;
    }
}

var listOfEvents = [];


listOfEvents.push(
    new Event("Bijou 1",
        "09 Nov 2021",
        "We are rising 555. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa laboriosam, earum esse libero nostrum consequuntur nesciunt?",
        "https://cdn.discordapp.com/attachments/826877621061156904/826879203403759686/33.jpg",
        "https://enkr1.github.io",
        "sign up"),
    new Event("Radiance 2",
        "18 Jan 2020",
        "We are rising 555555. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa laboriosam, earum esse libero nostrum consequuntur nesciunt?",
        "https://media.discordapp.net/attachments/826877621061156904/826879201029521468/20.jpg",
        "https://enkr1.github.io"),
    new Event("Radiance 1",
        "09 Nov 2019",
        "We are rising 555. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa laboriosam, earum esse libero nostrum consequuntur nesciunt?",
        "https://media.discordapp.net/attachments/826877621061156904/826879196735209492/24.jpg",
        "https://enkr1.github.io"),
);

// NOTE: For debugging purposes only.
const jsonData = JSON.stringify(listOfEvents, null, 2);
// console.log(jsonData);

class EventItems extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        // this.innerHTML = "<div class='event-list'>";
        for (let i = 0; i < listOfEvents.length; i++) {
            this.innerHTML += listOfEvents[i].display(i + 1);
        }
        // this.innerHTML += "</div>";
        this.innerHTML = `
        <div class="swiper event-swiper">
        <div class="swiper-wrapper">
        ${this.innerHTML}
        </div>

        <!--<div class="swiper-pagination"></div>-->

        <!--<div class="swiper-button-prev"></div>-->
        <!--<div class="swiper-button-next"></div>-->
      
        <div class="swiper-scrollbar"></div>

        </div>`;
    }
}


customElements.define('event-items-component', EventItems);


// Official site: https://swiperjs.com/get-started
// gh: https://github.com/nolimits4web/swiper/
const swiper = new Swiper('.event-swiper', {
    spaceBetween: 30,
    centeredSlides: true,
    direction: 'horizontal',
    loop: true,
    lazy: true,
    mousewheel: false, // true is good for vertical 
    freeMode: false, // scroll without section parting

    keyboard: {
        enabled: true,
    },

    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },

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
        hide: false,
    },

});