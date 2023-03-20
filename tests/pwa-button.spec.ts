import { describe, expect, test } from '@jest/globals';
import { PwaButton } from "../src/components/pwa-button/pwa-button";
import {fixture, html} from "@open-wc/testing-helpers";

describe('pwa-button component test', () => {

    test('should load ', async () => {
        const el = await fixture(html`<pwa-button></pwa-button>`) as PwaButton;
        const spyEvent = jest.fn();
        window.document.addEventListener('pwa-button-click', () => {
            spyEvent();
        });
        el.click();
        expect(spyEvent).toHaveBeenCalled();

    });

});
