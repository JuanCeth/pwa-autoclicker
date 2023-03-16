import { LitElement, css, html } from 'lit';
import { property, customElement } from 'lit/decorators.js';

@customElement('pwa-input')
export class PwaInput extends LitElement {
    @property({ type: String, reflect: true }) type = 'text';

    @property({ type: Boolean, reflect: true }) disabled = false;

    @property({ type: Boolean, reflect: true }) required = false;

    @property({ type: Boolean, reflect: true }) validate = false;

    @property({ type: String, reflect: true }) value = '';

    @property({ type: String, reflect: true }) placeholder = 'Introduce text';

    static get styles() {
        return css`
          
          input {
            border: 2px solid lightskyblue;
            height: 32px;
            margin-bottom: 30px;
            padding: 10px 16px;
            width: 250px;
          }
        `;
    }

    constructor() {
        super();
    }

    handleInputKeyUp(event: KeyboardEvent) {
        this.dispatchEvent(new CustomEvent('pwa-input-keyup',
            {
                bubbles: true,
                composed: true,
                detail: event
            }));
    }

    handleInputChange(event: any) {
        this.value = event.target?.value;
        this.dispatchEvent(new CustomEvent('pwa-input-change',
            {
                bubbles: true,
                composed: true,
                detail: {
                    value: this.value
                }
            }));
    }

    render() {
        return html`
            <input .type="${this.type}" .placeholder="${this.placeholder}" .value="${this.value}" ?required="${this.required}" ?validate="${this.validate}"
                   ?disabled="${this.disabled}" @change="${(e: CustomEvent) => this.handleInputChange(e)}" @keyup="${(e: KeyboardEvent) => this.handleInputKeyUp(e)}"></input>
    `;
    }
}
