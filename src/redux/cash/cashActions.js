import { SELL_CASH } from './cashTypes'

export const sellCash = (quantity = 1, price = 250, totalCash = 0) => {
    return {
        type: SELL_CASH,
        payload: {
            quantity: quantity,
            price: price,
            totalCash: totalCash
        }
    }
}