import { BUY_ICECREAM } from './icecreamTypes'

export const buyIcecream = quantity => {
    return {
        type: BUY_ICECREAM,
        payload: quantity
    }
}