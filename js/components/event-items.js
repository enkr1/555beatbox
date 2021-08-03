class Event {
    constructor(name, date, desc, imgSrc, ridirectionPath) {
        this.name = name;
        this.date = date;
        this.desc = desc;
        this.imgSrc = imgSrc;
        this.ridirectionPath = ridirectionPath;
    }

    // images/coming-soon.jpg
    display(index) {
        let order = (index % 2 === 0) ? 'even' : 'odd';
        this.imgSrc = "images/coming-soon.jpg";
        let item =
            `<div class="event-item ${order}">` +
            `<div class="event-img-div ${order}">
                    <img src="${this.imgSrc}" alt="Event Image" />
                </div>` +
            `<div class="event-description ${order}">
                <h6>${this.date}</h6>
                <h1>${this.name}</h1>
                <p>${this.desc}</p>` +
            `<a target="_blank" href="${this.ridirectionPath}" class="cta">view</a>
                </div>
            </div>`;

        return item;
    }
}

var listOfEvents = [];


listOfEvents.push(
    new Event("Bijou 1",
        "09 Nov 2021",
        "We are rising 555. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa laboriosam, earum esse libero nostrum consequuntur nesciunt?",
        "https://cdn.discordapp.com/attachments/826877621061156904/826879203403759686/33.jpg",
        "https://enkr1.github.io"),
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
        for (let i = 0; i < listOfEvents.length; i++) {
            this.innerHTML += listOfEvents[i].display(i + 1);
        }
    }

}

customElements.define('event-items-component', EventItems);