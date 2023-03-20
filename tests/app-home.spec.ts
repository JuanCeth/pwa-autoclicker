import { describe, expect } from '@jest/globals';
// import { AppHome } from "../src/pages/app-home/app-home";

describe('app-home page test', () => {

    beforeEach(async () => {
        /*window.document.createElement('app-home');
        const homeElement = window.document.querySelector('app-home');
        const inputElement = homeElement?.shadowRoot?.querySelector('pwa-input');
        inputElement?.setAttribute('value', 'Juan');
        console.log('homeElement', window.document.createElement('app-home'));
        console.log('homeElement', homeElement);
        console.log('inputElement', inputElement);
        //console.log("element", window.document.querySelector('app-home').innerHTML);*/
    });

    xtest('should load ', () => {
        const homeElement = window.document.createElement('app-home');
        const inputElement = window.document.createElement('pwa-input');
        homeElement.appendChild(inputElement);
        window.document.body.append(homeElement);
        console.log('totalElement', document.body.outerHTML);
        expect('string')
            .toBe('string');
    });

});
