// From 
// https://dev.to/anuradha9712/create-reusable-web-components-in-html-1llc

class Footer extends HTMLElement {
    constructor() {
        // Always call super first in constructor
        super();
        // write element functionality in here
        // ...
    }

    /*
    connectedCallback() {
        const shadowRoot = this.attachShadow({
            mode: 'open'
        });
        shadowRoot.appendChild(footerTemplate.content);
    }
    */

    connectedCallback() {
        this.innerHTML = `
<footer class="main-footer">
    <div class="footer-nav-container">
        <div class="">
            <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Rerum sint doloribus distinctio vitae numquam laboriosam sapiente dolore, at suscipit, 
            quae nobis? Ducimus consectetur magnam inventore voluptas vitae distinctio cupiditate 
            repellendus.
            </p>
        </div>
        <div class="">
            <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Rerum sint doloribus distinctio vitae numquam laboriosam sapiente dolore, at suscipit, 
            quae nobis? Ducimus consectetur magnam inventore voluptas vitae distinctio cupiditate 
            repellendus.
            </p>
        </div>
        <div class="contact-social-media">
        <h6>find us on</h6>
            <ul class="nav-list contact-social-media-ul">

                <li>
                    <a target="_blank" href="https://discord.gg/csZukuUcN2" class="icon-link">
                        <img src="images/social-media-icons/discord-logo-coloured.svg" alt="555 Beatbox Initiative | Discord">
                    </a>
                </li>

                <li>
                    <a target="_blank" href="https://www.facebook.com/555-Beatbox-Initiative-104202838540152" class="icon-link">
                        <img src="images/social-media-icons/facebook-logo-coloured.svg" alt="555 Beatbox Initiative | Facebook">
                    </a>
                </li>

                <li>
                    <a target="_blank" href="https://www.instagram.com/555beatboxsg/" class="icon-link">
                        <img src="images/social-media-icons/instagram-logo-coloured.svg" alt="555 Beatbox Initiative | Instagram">
                    </a>
                </li>

                <li>
                    <a target="_blank" href="https://www.youtube.com/channel/UC6jcQdnBe8A6nhaubvY6xNw"
                        class="icon-link">
                        <img src="images/social-media-icons/youtube-logo-coloured.svg" alt="555 Beatbox Initiative | YouTube">
                    </a>
                </li>

                <li>
                    <a href="mailto:555beatboxsg@gmail.com" class="icon-link">
                        <img src="images/social-media-icons/envelope-logo-coloured.png" alt="555 Beatbox Initiative | Email">
                    </a>
                </li>
            </ul>
        </div>
    </div>

    <div class="up" id="up" onclick="topFunction()">
        <i class="fas fa-chevron-up"></i>
    </div>

    <p>&copy; 2021 ENKR. All rights reserved.</p>
    <p>Developed and designed by <a target="_blank" href="https://enkr1.github.io/">ENKR</a></p>

</footer>
        `;
    }
}

customElements.define('footer-component', Footer);

//  $('#up').on('click', function () {
//     $('html, body').animate({
//         scrollTop: 0
//     }, 3000)
// });

$(window).scroll(function () {
    if ($(this).scrollTop() > 800) {
        $('.up').fadeIn();
    } else {
        $('.up').fadeOut();
    }
});

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}