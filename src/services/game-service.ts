/**
 * Autoclicker defined base cost for the app
 */
export const autoClickerBaseRate = 20;

export class GameService {
    /**
     * Calculates the cost of the autoclicker for the user
     */
    static calculateAutoClickerCost(numAutoClickers: number) {
        const autoClickerBaseCost = autoClickerBaseRate;
        const cost = autoClickerBaseCost + autoClickerBaseCost * numAutoClickers;
        return cost;
    }

    /**
     * Checks if autoclicker can be bought by the user
     */
    static checkCanBuyAutoclicker(numberOfClicks: number, autoClickerCost: number) {
        return numberOfClicks >= autoClickerCost;
    }



}
