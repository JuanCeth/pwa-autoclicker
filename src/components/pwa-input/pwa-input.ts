import { LitElement, html } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import { styles } from './pwa-input-styles';

@customElement('pwa-input')
export class PwaInput extends LitElement {
    /**
     * Prop to set the type of the native html input
     */
    @property({ type: String, reflect: true }) type = 'text';
    /**
     * Prop to set if the input is disabled or not
     */
    @property({ type: Boolean, reflect: true }) disabled = false;
    /**
     * Prop to set if the input is required or not
     */
    @property({ type: Boolean, reflect: true }) required = false;
    /**
     * Prop to set if the input has to be validated or not
     */
    @property({ type: Boolean, reflect: true }) validate = false;
    /**
     * Prop to set the value of the input
     */
    @property({ type: String, reflect: true }) value = '';
    /**
     * Prop to set the placeholder
     */
    @property({ type: String, reflect: true }) placeholder = 'Introduce text';
    /**
     * Prop to set the state of the component after validations
     */
    @property({ type: String, reflect: true }) inputState = 'default';

    private errorMessage = '';

    static get styles() {
        return styles;
    }

    constructor() {
        super();
    }

    /**
     * Sets the validation state for the pwa-input element
     * @param inputState could be 'success', 'error' or 'default'
     * @param errorMessage string for the message
     */
    setValidationState(inputState: string, errorMessage: string) {
        this.inputState = inputState;
        this.errorMessage = errorMessage;
    }

    /**
     * Handles the key up event dispatching the event
     * @param event KeyboardEvent
     */
    handleInputKeyUp(event: KeyboardEvent) {
        this.dispatchEvent(new CustomEvent('pwa-input-keyup',
            {
                bubbles: true,
                composed: true,
                detail: event
            }));
    }

    /**
     * Handles the input change event dispatching the event
     * @param event
     */
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

    /**
     * Renders the error message of the input.
     */
    renderErrorMessage() {
        return html `<span class="error-message">${this.errorMessage}</span>`;
    }

    render() {
        return html`
            <input class="${this.inputState}" .type="${this.type}" .placeholder="${this.placeholder}" .value="${this.value}" ?required="${this.required}" ?validate="${this.validate}"
                   ?disabled="${this.disabled}" @change="${(e: CustomEvent) => this.handleInputChange(e)}" @keyup="${(e: KeyboardEvent) => this.handleInputKeyUp(e)}"></input>
            ${this.inputState === 'error' ? this.renderErrorMessage() : ''}
    `;
    }
}
