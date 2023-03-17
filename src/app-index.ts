import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { Router } from '@vaadin/router';
import { appStyles } from "./app-index-styles";

import './pages/app-home/app-home';
import './components/pwa-header/pwa-header';
import './components/pwa-button/pwa-button';
import './components/pwa-input/pwa-input';
import './styles/global.css';

const BASE_URL: string = (import.meta.env.BASE_URL).length > 2 ? (import.meta.env.BASE_URL).slice(1,-1) : (import.meta.env.BASE_URL);

@customElement('app-index')
export class AppIndex extends LitElement {
  static get styles() {
    return appStyles;
  }

  constructor() {
    super();
  }

  firstUpdated() {
    const router = new Router(this.shadowRoot?.querySelector('#routerOutlet'));
    router.setRoutes([
      // temporarily cast to any because of a Type bug with the router
      {
        path: BASE_URL,
        animate: true,
        children: [
          { path: '', component: 'app-home' },
          {
            path: 'game',
            component: 'app-game',
            action: async () => {
              await import('./pages/app-game/app-game');
            },
          }
        ],
      } as any,
    ]);
  }

  render() {
    return html`<div><main><div id="routerOutlet"></div></main></div>`;
  }
}
