
import { describe, test, beforeEach } from '@jest/globals';
//import { fixture, html } from "@open-wc/testing";
//import { StorageService } from "../src/services/storage-service";

describe('app-game page test', () => {

    //let element: any;

    beforeEach(async () => {
        /*element = await fixture(html`<app-game></app-game>`);
        await element.updateComplete;
        const initialData = { name: "Juan", numberOfClicks: 0, autoClicksBought: 0, autoClickerCost: 0 };
        element.setProperty('userData', initialData);*/
    });

    test('should load page with the correct components', async () => {
        /*const headerElement = element.shadowRoot.querySelector('pwa-header');
        const mainContainer = element.shadowRoot.querySelector('.main-container');
        const imageElement = element.shadowRoot.querySelector('img');
        const inputElement = element.shadowRoot.querySelector('pwa-input');
        const buttonElement = element.shadowRoot.querySelector('pwa-button');
        expect(headerElement).toBeDefined();
        expect(mainContainer).toBeDefined();
        expect(imageElement).toBeDefined();
        expect(inputElement).toBeDefined();
        expect(buttonElement).toBeDefined();*/
    });

    test('when clicking the button, should validate the input, apply the logic and navigate to the game', async () => {
        /*const pwaInputElement = element.shadowRoot.querySelector('pwa-input');
        const buttonElement = element.shadowRoot.querySelector('pwa-button');
        pwaInputElement.setAttribute("inputValue", "Juan");
        await element.updateComplete;
        buttonElement.click();
        await element.updateComplete;
        expect(element.validateInput()).toBeTruthy();
        const finalData = { name: "Juan", numberOfClicks: 1, autoClicksBought: 0, autoClickerCost: 20 };
        expect(StorageService.getUserData('Juan')).toEqual(finalData);*/
    })

});
