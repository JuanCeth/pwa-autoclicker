import { LitElement, css, html } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import { Router } from '@vaadin/router';
import { styles } from '../styles/shared-styles';


@customElement('app-home')
export class AppHome extends LitElement {

  @property() message = 'Welcome!';

  @property({ type: String, reflect: true }) inputValue = '';

  @property({type: Boolean}) buttonDisabled = true;

  private userData: any;

  static get styles() {
    return [
      styles,
      css`
        
      #mainContainer {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding-top: 50px;
      }
        
      .new-player-section {
        margin-bottom: 50px;
      }
    `];
  }

  constructor() {
    super();
  }

  async firstUpdated() {
    console.log('This is the home page');
  }

  handleInputValueChange(event: any) {
    this.inputValue = event.detail?.value;
  }

  handleButtonClick() {
    this.submitForm();
  }

  navigateToGame() {
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

  submitForm() {
    // Here we have to validate the input, if it's ok we navigate
    if(this.inputValue && this.inputValue.length && this.inputValue !== '') {
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
      // if not we have to show error at input
    } else {
      console.log('Please review the introduced text');
    }
  }

  handleInputKeyUp(event: any){
    /// Control for enter button press
    if (event.detail?.keyCode === 13) {
      this.submitForm();
    }
  }

  render() {
    return html`
      <pwa-header></pwa-header>
      <main>
        <div id="mainContainer">
          <img height="200" width="200" src="https://png.pngtree.com/element_our/png_detail/20181119/male-medical-doctor-icon-png_242549.jpg">
          <div class="new-player-section"><h2>Create new player</h2></div>
          <pwa-input placeholder="Introduce your name" required="true" validate="true"
                      @pwa-input-change="${(e: CustomEvent) => this.handleInputValueChange(e)}" @pwa-input-keyup="${(e: KeyboardEvent) => this.handleInputKeyUp(e)}"></pwa-input>
          <pwa-button type="primary" @pwa-button-click="${() => this.handleButtonClick()}">JOIN</pwa-button>
        </div>
      </main>
    `;
  }
}
