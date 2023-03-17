import { LitElement, html } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import { styles } from './pwa-header-styles';

@customElement('pwa-header')
export class PwaHeader extends LitElement {
  /**
   * Prop to set the title of the app
   */
  @property({ type: String }) title = 'PWA Autoclicker App';

  static get styles() {
    return styles;
  }

  constructor() {
    super();
  }

  render() {
    return html`<header><div id="back-button-block"><h1>${this.title}</h1></div></header>`;
  }
}
