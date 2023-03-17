export class StorageService {
    /**
     * Saves the user data in localStorage
     * @param userData
     */
    static saveUserData(userData: any) {
        const itemToSave = userData.name + 'Data'
        localStorage.setItem(itemToSave, JSON.stringify(userData));
    }

    /**
     * Obtains the user data stored in localStorage
     * @param userName
     */
    static getUserData(userName: string) {
        const itemToGet = userName + 'Data';
        const item = localStorage.getItem(itemToGet) || '{ "name": "", "numberOfClicks": "0", "autoClicksBought": "0", "autoClickersCost": "0"}';
        return JSON.parse(item);
    }

    /**
     * Saves the name of the current player of the game
     * @param gameUserName
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
