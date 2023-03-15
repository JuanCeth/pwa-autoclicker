import { LitElement, css, html } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import { Router } from '@vaadin/router';

import { styles } from '../styles/shared-styles';

@customElement('app-home')
export class AppHome extends LitElement {

  // For more information on using properties and state in lit
  // check out this link https://lit.dev/docs/components/properties/
  @property() message = 'Welcome!';

  @property({ type: String, reflect: true }) inputValue = '';

  @property({type: Boolean}) buttonDisabled = true;

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

      button {
        align-items: center;
        background-color: grey;
        border: 2px solid darkgrey;
        border-radius: 4px;
        cursor: pointer;
        color: white;
        height: 40px;
        margin: 4px 2px;
        padding: 10px 40px;
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
      .primary {
        background-color: #004481;
        border: 2px solid lightskyblue;
      }

      input {
        border: 2px solid lightskyblue;
        height: 32px;
        margin-bottom: 30px;
        padding: 10px 16px;
        width: 250px;
      }
      `];
  }

  constructor() {
    super();
  }

  async firstUpdated() {
    console.log('This is the home page');
  }

  handleInputChange(event: any) {
    this.inputValue = event.target?.value;
  }

  handleButtonClick() {
    this.submitForm();
  }

  navigateToGame() {
    Router.go("/game");
  }

  submitForm() {
    // Here we have to validate the input, if it's ok we navigate
    if(this.inputValue && this.inputValue.length && this.inputValue !== '') {
      console.log('this.inputValue', this.inputValue);
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

  handleInputKeyUp(event: KeyboardEvent){
    /// Control for enter button press
    if (event.keyCode === 13) {
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
          <input placeholder="Introduce your name" required="true" validate="true"
                 @change="${(e: CustomEvent) => this.handleInputChange(e)}" @keyup="${(e: KeyboardEvent) => this.handleInputKeyUp(e)}"></input>
            <!---<pwa-button class="primary" href="${(import.meta as any).env.BASE_URL}game" disabled="${this.buttonDisabled}" label="JOIN"></pwa-button>-->
          <button @click="${() => this.handleButtonClick()}" class="primary">JOIN</button>
        </div>
      </main>
    `;
  }
}
