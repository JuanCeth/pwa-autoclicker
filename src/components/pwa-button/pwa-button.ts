import { LitElement, html } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import { styles } from './pwa-button-styles';

@customElement('pwa-button')
export class PwaButton extends LitElement {
    /**
     * Prop to set the type of the button, primary or secondary.
     */
    @property({ type: String, reflect: true }) type = 'primary';
    /**
     * Prop to set if the button state is disabled or not
     */
    @property({ type: Boolean, reflect: true }) disabled = false;

    static get styles() {
        return styles;
    }

    constructor() {
        super();
    }

    /**
     * Handles the click in the component dispatching an event.
     * @param event customEvent
     */
    handleClick(event: CustomEvent) {
        this.dispatchEvent(new CustomEvent('pwa-button-click',
            {
                bubbles: true,
                composed: true,
                detail: event
            }));
    }

    render() {
        return html`
            <button class="${this.type}" .disabled="${this.disabled}" @click="${(e: CustomEvent) => this.handleClick(e)}"><slot></slot></button>
    `;
    }
}
