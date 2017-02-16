class ButtonAdv extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        shadow.innerHTML= `
            <style>
            </style>
            <slot name='icon'></slot>
            <span id='wrapper'>
                <slot>Button</slot>
            </span>
        `;
    }
}