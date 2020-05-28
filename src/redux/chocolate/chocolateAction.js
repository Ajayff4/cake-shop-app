import { BUY_CHOCOLATE } from './chocolateTypes'

export const buyChocolate = quantity => {
    return {
        type: BUY_CHOCOLATE,
        payload: quantity
    }
}