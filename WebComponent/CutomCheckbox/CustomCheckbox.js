class CustomCheckbox extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.innerHTML = `        
        <style>
            :host { display: inline-block;  background-color:transparent; }
            input[type=checkbox] { visibility: hidden; }
            input[type=checkbox]:checked + label:after { opacity: 1; }  

            .chk-ctx {
                width: 28px;
                height: 28px;
                position: relative;
                margin: 2px;
                background: #fcfff4;
                background: linear-gradient(to bottom, #fcfff4 0%, #dfe5d7 40%, #b3bead 100%);
                box-shadow: inset 0px 1px 1px white, 0px 1px 3px rgba(0, 0, 0, 0.5);
                // display:inline-block;
                // background-color:#989;
            }
            .chk-ctx label {
                width: 20px;
                height: 20px;
                cursor: pointer;
                position: absolute;
                left: 4px;
                top: 4px;
                background: linear-gradient(to bottom, #222222 0%, #45484d 100%);
                box-shadow: inset 0px 1px 1px rgba(0, 0, 0, 0.5), 0px 1px 0px white;
            }
            .chk-ctx label:after {
                content: '';
                width: 9px;
                height: 5px;
                position: absolute;
                top: 4px;
                left: 4px;
                border: 3px solid #fcfff4;
                border-top: none;
                border-right: none;
                background: transparent;
                opacity: 0;
                transform: rotate(-45deg);
            }
            .chk-ctx label:hover:after {
                opacity: 0.2;
            }            
              
        </style>
        <div class="chk-ctx">
            <input type="checkbox" value="None" id="chk-ctx" name="check" checked />
            <label for="chk-ctx"></label>
        </div>
        `;
        this.type = 'checkbox';
        // this.classList.add('squaredTwo');
    }

    // static get observedAttributes() { return ['checked']; }
    // attributeChangedCallback(name, oldValue, newValue, namespaceURI) {
    //     if (name === 'checked') {
    //         const value = newValue === null ? false : newValue;
    //     }
    // }
}