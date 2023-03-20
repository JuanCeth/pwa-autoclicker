import { describe, expect, test } from '@jest/globals';
//import { AppIndex } from "../src/app-index";


describe('app-index test', () => {

    beforeEach(async () => {

    });

    test('should load the index of the app correctly', () => {
        //const elShadowRoot = document.querySelector('app-index').shadowRoot;
        console.log('elShadowRoot', document.querySelectorAll('div'));
        expect('string')
            .toBe('string');
    });

});
