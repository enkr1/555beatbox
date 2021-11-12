// From 
// https://dev.to/anuradha9712/create-reusable-web-components-in-html-1llc

class Preloader extends HTMLElement {
    constructor() {
        // Always call super first in constructor
        super();
    }

    // it was after .preload div
    // <div class="loading-leave"></div>
    // <svg id="svg-loading" class="svg-loading" width="295" height="57" viewBox="0 0 295 57" fill="none"
    // xmlns="http://www.w3.org/2000/svg">
    // <path
    // d="M33.7344 48.4805V47.7305H32.9844H9.47656V2.8125V2.0625H8.72656H1.94141H1.19141V2.8125V54V54.75H1.94141H32.9844H33.7344V54V48.4805ZM78.8903 43.5164L78.891 43.5148C80.6305 39.6492 81.4883 35.1575 81.4883 30.0586V26.8242C81.4883 21.7482 80.6303 17.2683 78.891 13.4032C77.1505 9.51205 74.6449 6.52015 71.3658 4.46383C68.1158 2.38758 64.364 1.35938 60.1367 1.35938C55.9741 1.35938 52.2455 2.40205 48.9744 4.50124C45.7209 6.58071 43.217 9.58256 41.4537 13.4715C39.6911 17.3588 38.8203 21.8153 38.8203 26.8242L38.8203 30.5156L38.8203 30.5229C38.8681 35.4378 39.7633 39.8004 41.5269 43.5936L41.5294 43.5988C43.3182 47.3698 45.8337 50.3069 49.0805 52.382L49.0839 52.3841C52.332 54.4356 56.0478 55.4531 60.207 55.4531C64.4563 55.4531 68.2091 54.4374 71.4378 52.3827C74.6684 50.3269 77.1498 47.3598 78.8903 43.5164ZM69.7667 13.2462L69.7682 13.2483C72.0696 16.302 73.2734 20.7692 73.2734 26.7539V30.5464C73.2036 36.3873 71.9906 40.764 69.7335 43.7747C67.5001 46.7305 64.3581 48.2227 60.207 48.2227C56.0987 48.2227 52.9172 46.6516 50.5809 43.5011C48.2459 40.2975 47.0352 35.8441 47.0352 30.0586V26.3014C47.1049 20.6323 48.3382 16.3103 50.6458 13.2483C52.9577 10.1882 56.0942 8.66016 60.1367 8.66016C64.3044 8.66016 67.483 10.194 69.7667 13.2462ZM92.0938 54.75H92.6206L92.7993 54.2544L97.437 41.3906H117.831L122.538 54.2576L122.718 54.75H123.242H130.168H131.258L130.868 53.732L111.286 2.54452L111.102 2.0625H110.586H104.68H104.163L103.979 2.54494L84.4322 53.7324L84.0436 54.75H85.1328H92.0938ZM138.309 54V54.75H139.059L153.227 54.75L153.234 54.75C157.934 54.702 162.081 53.6819 165.653 51.6653C169.254 49.6457 172.017 46.7464 173.933 42.9859C175.872 39.2297 176.828 34.8782 176.828 29.9531L176.828 26.6836L176.828 26.6799C176.804 21.8698 175.834 17.5791 173.898 13.8267C171.983 10.0692 169.246 7.15913 165.694 5.11554C162.145 3.07328 158.075 2.0625 153.508 2.0625H139.059H138.309V2.8125V54ZM164.481 43.1276L164.479 43.1299C161.767 46.1727 157.946 47.7305 152.91 47.7305H146.559V9.11719H153.68C158.52 9.16316 162.16 10.7374 164.711 13.7717L164.715 13.7761C167.304 16.8077 168.648 21.1232 168.648 26.8242V29.8125C168.648 35.6737 167.224 40.0752 164.481 43.1276ZM192.551 54.75H193.301V54V2.8125V2.0625H192.551H185.801H185.051V2.8125V54V54.75H185.801H192.551ZM243.266 54.75H244.016V54V2.8125V2.0625H243.266H236.551H235.801V2.8125V39.9106L211.339 2.4028L211.117 2.0625H210.711H203.926H203.176V2.8125V54V54.75H203.926H210.711H211.461V54V17.074L235.853 54.4102L236.075 54.75H236.48H243.266ZM293.662 47.7145L293.797 47.521V47.2852V28.5117V27.7617H293.047H274.484H273.734V28.5117V33.9961V34.7461H274.484H285.582V45.1906C284.471 46.3113 283.086 47.1234 281.408 47.6207C279.595 48.158 277.455 48.4336 274.977 48.4336C270.72 48.4336 267.393 46.8439 264.918 43.6626C262.424 40.4337 261.137 36.0421 261.137 30.4102V26.2295C261.16 20.2855 262.319 15.8739 264.507 12.8896C266.687 9.92382 269.879 8.41406 274.203 8.41406C277.477 8.41406 279.997 9.22814 281.842 10.7783C283.688 12.3296 284.949 14.6926 285.56 17.962L285.674 18.5742H286.297H293.047H293.913L293.789 17.7167C293.041 12.5556 290.977 8.50631 287.551 5.64683C284.126 2.76556 279.641 1.35938 274.168 1.35938C267.474 1.35938 262.186 3.54784 258.409 7.98664L258.408 7.98848C254.67 12.4104 252.852 18.5825 252.852 26.4023L252.852 30.8672L252.852 30.8746C252.899 35.7233 253.82 40.0201 255.634 43.7464L255.636 43.7499C257.476 47.4785 260.078 50.3783 263.442 52.4258L263.445 52.4279C266.809 54.4506 270.648 55.4531 274.941 55.4531C279.139 55.4531 282.845 54.8332 286.044 53.5728L286.047 53.5717C289.285 52.2813 291.835 50.3318 293.662 47.7145ZM100.019 34.3359L107.634 13.3402L115.28 34.3359H100.019Z"
    // stroke="white" stroke-opacity="0.3" stroke-width="1.5" />
    // </svg>
    // <div class="preload-box"></div>
    // <div class="preload-top"></div>
    // <div class="preload-bot"></div>
    connectedCallback() {
        this.innerHTML = `
<div class="preload">
    <div class="preload-box">
        <picture>
            <img class="preload-gif" src="images/logo/logo-animation.gif" alt="555 Beatbox Initiative">
        </picture>
    </div>
</div>
        `;
    }
}

customElements.define('preloader-component', Preloader);

docReady(function () {
    // DOM is loaded and ready for manipulation here
    const preload = document.querySelector('.preload');
    const gif = document.querySelector('.preload-gif');
    // const preloadTop = document.querySelector('.preload-top');
    // const preloadBot = document.querySelector('.preload-bot');
    // const svgLoading = document.querySelector('.svg-loading');
    // const preloadBox = document.querySelector('.preload-box');

    document.body.classList.remove("hide-all-in-body");

    // dump("Preloading...");
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
        // dump("Final unload...");

        // svgLoading.classList.add('loading-finish');

        // /*
        preload.classList.add('preload-finish');
        // */

        // preloadTop.classList.add('moveup');
        // preloadBot.classList.add('movedown');
        // preloadBox.classList.add('clear-blur');
        // REMOVE THE HIDE CLASS FROM BODY

        // /*
        // only when finish loading, add y scroll 
        var root = document.getElementsByTagName('html')[0]; // '0' to assign the first (and only `HTML` tag)
        root.classList.add('enablescroll');
        // */

    });
});