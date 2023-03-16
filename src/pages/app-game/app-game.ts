import { LitElement, css, html } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import { styles } from './app-game-styles';
import {Router} from "@vaadin/router";


@customElement('app-game')
export class AppGame extends LitElement {

  @property({ type: Number}) numberOfClicks = 0;

  @property({ type: Boolean}) canBuyAutoClicks = false;

  @property({ type: Object }) userData = { name: '', numberOfClicks: 0, autoClicksBought: 0, autoClickerCost: 0 };

  private autoClicksBought = 0;
  private autoClickerCost = 0;


  static get styles() {
    return [
      styles,
      css`
      .user-section {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-direction: column;
        padding-top: 40px;
      }
        
      #mainContainer {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding-top: 40px;
      }

      .goBack-section {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        width: 100%;
        padding-top: 12px;
      }
    `];
  }

  constructor() {
    super();
  }

  async firstUpdated() {
    const storedData = localStorage.getItem('userData') || '';
    this.userData = JSON.parse(storedData)
    this.setInternalVars();
  }

  setInternalVars() {
    this.numberOfClicks = this.userData.numberOfClicks;
    this.autoClicksBought = this.userData.autoClicksBought;
    this.autoClickerCost = this.userData.autoClickerCost;
  }

  handleButtonClick(autoclick: Boolean) {
    if (autoclick) {
      this.autoClicksBought = this.autoClicksBought + 1;
      this.numberOfClicks = this.numberOfClicks - this.autoClickerCost;
      this.canBuyAutoClicks = false;
    } else {
      this.numberOfClicks = this.numberOfClicks + 1;
      this.canBuyAutoClicks = this.numberOfClicks >= this.autoClickerCost;
    }
  }

  calculateAutoClickerCost() {
    const autoClickerBaseCost = 20;
    const numAutoClickers = this.autoClicksBought;
    this.autoClickerCost = autoClickerBaseCost + autoClickerBaseCost * numAutoClickers;
    return this.autoClickerCost;
  }

  renderAutoClicksBought() {
    return html`
      <h2>Autoclicks bought: ${this.autoClicksBought}</h2>
    `;
  }

  goBack() {
    this.userData = {
      name: this.userData.name,
      numberOfClicks: this.numberOfClicks,
      autoClicksBought: this.autoClicksBought,
      autoClickerCost: this.autoClickerCost
    };
    localStorage.setItem('userData', JSON.stringify(this.userData));
    Router.go("/");
  }

  render() {
    return html`
      <pwa-header></pwa-header>
      <div class="goBack-section">
            <pwa-button type="secondary" @pwa-button-click="${() => this.goBack()}">< Back</pwa-button>
      </div>
      <div class="user-section"><h3>Hi ${this.userData.name}</h3></div>
      <div id="mainContainer">
        <h2>Number of clicks: ${this.numberOfClicks}</h2>
        ${this.autoClicksBought > 0 ? this.renderAutoClicksBought() : ''}
        <pwa-button type="primary" @pwa-button-click="${() => this.handleButtonClick(false)}">Click Request</pwa-button>
        <pwa-button type="primary" ?disabled="${!this.canBuyAutoClicks}"
                    @pwa-button-click="${() => this.handleButtonClick(true)}">Buy Auto Clicks (${this.calculateAutoClickerCost()})</pwa-button>
      </div>
    `;
  }
}
