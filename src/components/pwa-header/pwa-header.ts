import { LitElement, css, html } from 'lit';
import { property, customElement } from 'lit/decorators.js';

@customElement('pwa-header')
export class PwaHeader extends LitElement {
  @property({ type: String }) title = 'PWA Autoclicker App';

  @property({ type: Boolean}) enableBack: boolean = false;

  static get styles() {
    return css`
      header {
        align-items: center;
        background: var(--app-color-primary);
        color: white;
        display: flex;
        height: env(titlebar-area-height, 50px);
        justify-content: space-between;
        left: env(titlebar-area-x, 0);
        padding-left: 16px;
        padding-top: 12px;
        position: fixed;
        top: env(titlebar-area-y, 0);
        width: env(titlebar-area-width, 60%);
        -webkit-app-region: drag;
      }

      header h1 {
        color: black;
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 0;
        margin-top: 0;
      }
      
    `;
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <header>
        <div id="back-button-block">
          <h1>${this.title}</h1>
        </div>
      </header>
    `;
  }
}
