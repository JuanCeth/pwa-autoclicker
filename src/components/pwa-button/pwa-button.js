import { LitElement, css, html } from 'lit';
import { property, customElement } from 'lit/decorators.js';

@customElement('pwa-button')
export class PwaHeader extends LitElement {
    @property({ type: String }) label = 'PWA Autoclicker App';

    @property({ type: String, reflect: true }) type = 'primary';

    @property({ type: Boolean, reflect: true }) disabled = false;

    static get styles() {
        return css`
          button {
            align-items: center;
            background-color: grey;
            border: 2px solid darkgrey;
            border-radius: 8px;
            cursor: pointer;
            color: white;
            height: 40px;
            margin: 4px 2px;
            padding: 10px 20px;
            text-align: center;
            text-decoration: none;
          }

          button:hover {
            box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 rgba(0, 0, 0, 0.19);
          }

          button:active {
            transform: scale(0.98);
          }

          button[disabled] {
            box-shadow: none;
            cursor: default;
            opacity: 0.5;
            transform: none;
          } 
    `;
    }

    constructor() {
        super();
    }

    handleClick(event) {
        this.dispatchEvent(new CustomEvent('pwa-button-click',
            {
                bubbles: true,
                composed: true,
                detail: event
            }));
    }

    render() {
        return html`
            <button class="${this.type}" href="${this.href}" disabled="${this.disabled}" @click="${(e) => this.handleClick(e)}"><slot></slot></button>
    `;
    }
}
