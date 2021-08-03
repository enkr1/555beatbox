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
        <p>find us on</p>
            <ul class="nav-list contact-social-media-ul">
                <li>
                    <a target="_blank" href="https://www.facebook.com/555-Beatbox-Initiative-104202838540152" class="icon-link">
                        <i class="fab fa-facebook-square"></i></a>
                </li>

                <li>
                    <a target="_blank" href="https://www.instagram.com/555beatboxsg/" class="icon-link">
                        <i class="fab fa-instagram"></i></a>
                </li>

                <li>
                    <a target="_blank" href="https://www.youtube.com/channel/UC6jcQdnBe8A6nhaubvY6xNw"
                        class="icon-link">
                        <i class="fab fa-youtube-square"></i></a>
                </li>

                <li>
                    <a href="mailto:555beatboxsg@gmail.com" class="icon-link">
                        <i class="far fa-envelope"></i></a>
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