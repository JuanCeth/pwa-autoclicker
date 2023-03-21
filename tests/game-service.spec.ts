import { describe, expect, test } from '@jest/globals';
import { GameService } from "../src/services/game-service";

describe('game-service test', () => {

    test('calculateAutoClickerCost function should work properly', () => {
        const numberOfAutoClickers = 2;
        const result = GameService.calculateAutoClickerCost(numberOfAutoClickers);
        expect(result).toBe(60);
    });

    test('checkCanBuyAutoclicker function should work properly', () => {
        const numberOfClicks = 72;
        const numberOfAutoClickers = 2;
        const autoClickerCost = GameService.calculateAutoClickerCost(numberOfAutoClickers)
        const result = GameService.checkCanBuyAutoclicker(numberOfClicks, autoClickerCost );
        expect(result).toBe(true);
    });

});
