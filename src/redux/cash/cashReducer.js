import { SELL_CASH } from './cashTypes'

const initialState = {
    totalCash: 0
}

const cashReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELL_CASH: return {
            ...state,
            totalCash: action.payload.totalCash + (action.payload.quantity * action.payload.price)
        }
        default: return state
    }
}

export default cashReducer;