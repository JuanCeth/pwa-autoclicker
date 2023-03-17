export class StorageService {
    /**
     * Saves the user data in localStorage
     * @param userData the data of the user
     */
    static saveUserData(userData: any) {
        const itemToSave = userData.name + 'Data'
        localStorage.setItem(itemToSave, JSON.stringify(userData));
    }

    /**
     * Obtains the user data stored in localStorage
     * @param userName the name of the user
     */
    static getUserData(userName: string) {
        const itemToGet = userName + 'Data';
        const item = localStorage.getItem(itemToGet) || '{ "name": "", "numberOfClicks": "0", "autoClicksBought": "0", "autoClickersCost": "0"}';
        return JSON.parse(item);
    }

    /**
     * Saves the name of the current player of the game
     * @param gameUserName the current player name
     */
    static saveGamePlayerName(gameUserName: string) {
        localStorage.setItem('gameUser', gameUserName);
    }

    /**
     * Obtains the name of the current player of the game
     */
    static getGamePlayerName() {
        return localStorage.getItem('gameUser');
    }
    
}
