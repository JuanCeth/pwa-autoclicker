import { describe, test } from '@jest/globals';
// import { fixture, html } from "@open-wc/testing";

describe('pwa-input component test', () => {

    //let element: any;

    /*beforeEach(async () => {
        element = await fixture(html`<pwa-input></pwa-input>`);
        await element.updateComplete;
    });*/

    test('should load properly', async () => {
        /*const inputElement = element.shadowRoot.querySelector('input');
        expect(inputElement).toBeDefined();*/
    });

    test('when entering a value in the input, the event pwa-input-keyup should be fired', async () => {
        /*const inputElement = element.shadowRoot.querySelector('input');
        const spy = jest.fn();
        element.addEventListener('pwa-input-keyup', spy);
        inputElement.setAttribute('value', 'J');
        await element.updateComplete;
        expect(spy).toHaveBeenCalled();*/
    });

    test('when doing blur in the input, the event pwa-input-change should be fired', async () => {
        /*const inputElement = element.shadowRoot.querySelector('input');
        const spy = jest.fn();
        element.addEventListener('pwa-input-keyup', spy);
        inputElement.setAttribute('value', 'Juan');
        await element.updateComplete;
        inputElement.blur();
        await element.updateComplete;
        expect(spy).toHaveBeenCalled();*/
    });

});
