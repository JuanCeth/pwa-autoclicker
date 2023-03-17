import { LitElement, html } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import { Router } from '@vaadin/router';
import { styles } from '../../styles/shared-styles';
import { homeStyles } from "./app-home-styles";


@customElement('app-home')
export class AppHome extends LitElement {
  /**
   * Prop to set the input value of the component
   */
  @property({ type: String, reflect: true }) inputValue = '';

  private userData: any;
  private pwaInputElement: any;

  static get styles() {
    return [ styles, homeStyles];
  }

  constructor() {
    super();
  }

  async firstUpdated() {
    console.log('This is the home page');
  }

  /**
   * Gets the html element of pwa-input
   */
  get inputElement() {
    if (!this.pwaInputElement) {
      this.pwaInputElement = this.shadowRoot?.querySelector('pwa-input');
    }

    return this.pwaInputElement;
  }

  /**
   * Handles the input value change
   * @param event
   */
  handleInputValueChange(event: any) {
    this.inputValue = event.detail?.value;
    this.inputValue.length ?
        this.inputElement.setValidationState('default', '') :
        this.inputElement.setValidationState('error', 'Required field, you must introduce a name');
  }

  /**
   * Handles the button click and submit the form
   */
  handleButtonClick() {
    this.submitForm();
  }

  getAllStoreddData() {
    let values = []
    let keys = Object.keys(localStorage)
    let i = keys.length;

    while ( i-- ) {
      values.push( localStorage.getItem(keys[i]));
    }
    console.log('stored data', values);
    return values;
  }

  /**
   * Navigates to next step saving the actual data of the user
   */
  navigateToGame() {
    this.getAllStoreddData();
    const storedData = localStorage.getItem('userData') || '';
    this.userData = JSON.parse(storedData)
     const userDataToStore = {
       name: this.inputValue === this.userData.name ? this.userData.name : this.inputValue,
       numberOfClicks: this.inputValue === this.userData.name ? this.userData.numberOfClicks : 0,
       autoClicksBought: this.inputValue === this.userData.name ? this.userData.autoClicksBought : 0,
       autoClickersCost: this.inputValue === this.userData.name ? this.userData.autoClickersCost : 0
     }
    localStorage.setItem('userData', JSON.stringify(userDataToStore));
    Router.go("/game");
  }

  /**
   * Submits the form, validating the introduced data.
   */
  submitForm() {
    if(this.validateInput()) {
      this.dispatchEvent(new CustomEvent('pwa-button-click',
          {
            bubbles: true,
            composed: true,
            detail: {
              userName: this.inputValue
            }
          })
      )
      this.navigateToGame();
    } else {
      this.inputElement.setValidationState('error', 'Required field, you must introduce a name');
    }
  }

  /**
   * Validates the input data
   */
  validateInput() {
    return this.inputValue && this.inputValue.length;
  }

  /**
   * Handles the input key up action, taking into account enter key
   * @param event
   */
  handleInputKeyUp(event: any){
    /// Control for enter button pressing.
    if (event.detail?.keyCode === 13) {
      this.submitForm();
    } else {
      this.inputElement.setValidationState('default', '');
    }
  }

  render() {
    return html`
      <pwa-header></pwa-header>
      <main>
        <div id="mainContainer">
          <img height="150" width="150" src="https://png.pngtree.com/element_our/png_detail/20181119/male-medical-doctor-icon-png_242549.jpg">
          <div class="new-player-section"><h2>Create new player</h2></div>
          <pwa-input placeholder="Introduce your name" required="true" validate="true"
                      @pwa-input-change="${(e: CustomEvent) => this.handleInputValueChange(e)}" @pwa-input-keyup="${(e: KeyboardEvent) => this.handleInputKeyUp(e)}"></pwa-input>
          <pwa-button type="primary" @pwa-button-click="${() => this.handleButtonClick()}">JOIN</pwa-button>
        </div>
      </main>
    `;
  }
}
