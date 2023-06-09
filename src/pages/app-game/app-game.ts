import { LitElement, html } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import { styles } from './app-game-styles';
import { Router } from "@vaadin/router";
import { GameService } from '../../services/game-service';
import { StorageService } from '../../services/storage-service';


@customElement('app-game')
export class AppGame extends LitElement {
  /**
   * Prop to set the number of clicks in the button
   */
  @property({ type: Number}) numberOfClicks = 0;
  /**
   * Prop to set the if the user can buy auto clicks
   */
  @property({ type: Boolean}) canBuyAutoClicks = false;
  /**
   * Prop to set the user data
   */
  @property({ type: Object }) userData = { name: '', numberOfClicks: 0, autoClicksBought: 0, autoClickerCost: 0 };

  private autoClicksBought = 0;
  private autoClickerCost = 0;
  private bonusInterval: any;

  static get styles() {
    return styles;
  }

  constructor() {
    super();
  }

  async firstUpdated() {
    const playerName = StorageService.getGamePlayerName() || '';
    this.userData = StorageService.getUserData(playerName);
    this.setInternalVars();
  }

  /**
   * Sets the internal variables to be able to apply the correct logic in the page.
   */
  setInternalVars() {
    this.numberOfClicks = this.userData.numberOfClicks;
    this.autoClicksBought = this.userData.autoClicksBought;
    this.autoClickerCost = this.userData.autoClickerCost;
    if (this.autoClicksBought >= 1) {
      this.setAutoclickerBonus();
    }
  }

  /**
   * Handles the buttons click
   * @param autoclick boolean to control which button have been clicked
   */
  handleButtonClick(autoclick: Boolean) {
    if (autoclick) {
      this.setAutoclickerBonus();
      this.autoClicksBought = this.autoClicksBought + 1;
      this.numberOfClicks = this.numberOfClicks - this.autoClickerCost;
      this.canBuyAutoClicks = false;
    } else {
      this.numberOfClicks = this.numberOfClicks + 1;
      this.canBuyAutoClicks = this.numberOfClicks >= this.autoClickerCost;
    }
  }

  /**
   * Checks if the user can buy autoclicks
   */
  canBuyAutoclicks() {
    return GameService.checkCanBuyAutoclicker(this.numberOfClicks, this.autoClickerCost);
  }

  /**
   * Calculates the cost of the autoclicker
   */
  calculateAutoClickerCost() {
    this.autoClickerCost = GameService.calculateAutoClickerCost(this.autoClicksBought)
    return this.autoClickerCost;
  }

  /**
   * Sets the autoclicker bonus with an interval
   */
  setAutoclickerBonus() {
    this.bonusInterval = setInterval(() => {
      this.numberOfClicks = this.numberOfClicks + 1;
    }, 100);
  }

  /**
   * Navigates to previous step saving the actual info of the game.
   */
  goBack() {
    this.userData = {
      name: this.userData.name,
      numberOfClicks: this.numberOfClicks,
      autoClicksBought: this.autoClicksBought,
      autoClickerCost: this.autoClickerCost
    };
    StorageService.saveUserData(this.userData);
    this.bonusInterval && clearInterval(this.bonusInterval);
    const path = (import.meta as any).env.BASE_URL
    Router.go(path);
  }

  /**
   * Renders autoclicks bough section
   */
  renderAutoClicksBought() {
    return html`<h2>Autoclicks bought: ${this.autoClicksBought}</h2>`;
  }

  render() {
    return html`
      <pwa-header></pwa-header>
      <div class="goBack-section">
            <pwa-button type="secondary" @pwa-button-click="${() => this.goBack()}">< Back</pwa-button>
      </div>
      <div class="user-section"><h3>Hi ${this.userData.name}!</h3></div>
      <div id="mainContainer">
        <h2>Number of clicks: ${this.numberOfClicks}</h2>
        ${this.autoClicksBought > 0 ? this.renderAutoClicksBought() : ''}
        <pwa-button type="primary" @pwa-button-click="${() => this.handleButtonClick(false)}">Click Request</pwa-button>
        <pwa-button type="primary" ?disabled="${!this.canBuyAutoclicks()}"
                    @pwa-button-click="${() => this.handleButtonClick(true)}">Buy Auto Clicks (${this.calculateAutoClickerCost()})</pwa-button>
      </div>
    `;
  }
}
