
class SocialMedia extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        
        `;
    }
}

customElements.define('social-media-component', SocialMedia);
