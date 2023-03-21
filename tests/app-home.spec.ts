import { describe,test } from '@jest/globals';
//import { fixture, html } from "@open-wc/testing";
//import { StorageService } from "../src/services/storage-service";

describe('app-home page test', () => {

    /*let element: any;

    beforeEach(async () => {
        element = await fixture(html`<app-home></app-home>`);
        await element.updateComplete;
    });*/

    test('should load all page with the correct components', async () => {
        /*const headerElement = element.shadowRoot.querySelector('pwa-header');
        const goBackSection = element.shadowRoot.querySelector('.goBack-section');
        const userSection = element.shadowRoot.querySelector('.user-section');
        const numberOfClickSection = element.shadowRoot.querySelector('h2');
        const buttonElement = element.shadowRoot.querySelector('pwa-button');
        expect(headerElement).toBeDefined();
        expect(goBackSection).toBeDefined();
        expect(userSection).toBeDefined();
        expect(numberOfClickSection).toBeDefined();
        expect(buttonElement).toBeDefined();*/
    });

    test('when clicking the button, should refresh the screen with the number of clicks', async () => {
        /*const pwaButtonElement = element.shadowRoot.querySelectorAll('pwa-button')[1];
        pwaButtonElement.click();
        await element.updateComplete;
        const numberOfClicksSection = element.shadowRoot.querySelector('h2');
        expect(numberOfClicksSection.textContent).toBe('Number of clicks: 1');*/
    });

    test('when clicking the goBack button, should save the data and navigates to home page', async () => {
        /*const goBackSection = element.shadowRoot.querySelector('.goBack-section');
        const goBackButton = goBackSection.querySelector('pwa-button');
        goBackButton.click();
        await element.updateComplete;
        expect(StorageService.getUserData).toBe('Number of clicks: 1');*/
    });

});
