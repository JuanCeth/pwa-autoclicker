import { LitElement, css, html } from 'lit';
import { property, customElement } from 'lit/decorators.js';

// You can also import styles from another file
// if you prefer to keep your CSS seperate from your component
import { styles } from './app-game-styles';

import { styles as sharedStyles } from '../../styles/shared-styles'

import '@shoelace-style/shoelace/dist/components/card/card.js';

@customElement('app-game')
export class AppGame extends LitElement {

  @property({ type: Number}) numberOfClicks = 0;

  @property({ type: Boolean}) canBuyAutoClicks = false;

  static get styles() {
    return [
      styles,
      css`
      #mainContainer {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding-top: 200px;
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
      `];
  }


  constructor() {
    super();
  }

  handleButtonClick(autoclick: Boolean) {
    if (autoclick) {
      this.numberOfClicks = this.numberOfClicks + 50;
      this.canBuyAutoClicks = false;
    } else {
      this.canBuyAutoClicks = this.numberOfClicks === 50 || this.numberOfClicks === 100 || this.numberOfClicks === 200;
      this.numberOfClicks = this.numberOfClicks + 1;
    }
  }

  renderBuyAutoClicks() {
    return html`
        <button @click="${() => this.handleButtonClick(true)}" ?disabled="${!this.canBuyAutoClicks}" class="primary">Buy Auto Clicks</button>
      </div>
    `;
  }

  render() {
    return html`
      <pwa-header ?enableBack="${true}"></pwa-header>
      <div id="mainContainer">
        <h2>Number of clicks: ${this.numberOfClicks}</h2>
        <button @click="${() => this.handleButtonClick(false)}"  class="primary">Click Request</button>
        ${this.canBuyAutoClicks ? this.renderBuyAutoClicks() : ''}
      </div>
    `;
  }
}
