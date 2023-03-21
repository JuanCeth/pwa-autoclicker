import { describe, expect, test } from '@jest/globals';
import { StorageService } from "../src/services/storage-service";

describe('storage-service test', () => {

    test('saveUserData function should work properly', () => {
        const userData = { name: "Juan", testing: true };
        StorageService.saveUserData(userData);
        let savedInfo = StorageService.getUserData('Juan');
        expect(savedInfo).toEqual(userData);
    });

    test('saveUserData function should work properly although user data has not been saved before', () => {
        const userData = {};
        StorageService.saveUserData(userData);
        let retrievedInfo = StorageService.getUserData('Pablito');
        let mockInfo = { name: "", numberOfClicks: 0, autoClicksBought: 0, autoClickersCost: 0 };
        expect(retrievedInfo).toEqual(mockInfo);
    });

    test('saveGamePlayerName function should work properly', () => {
        const gameUserName = "Juan";
        StorageService.saveGamePlayerName(gameUserName);
        let savedGameUser = StorageService.getGamePlayerName();
        expect(gameUserName).toEqual(savedGameUser);
    });

});
