import { BUY_CHOCOLATE } from './chocolateTypes'

const initialState = {
    numOfChocolates: 15,
    price: 20
}

const chocolateReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CHOCOLATE: return {
            ...state,
            numOfChocolates: state.numOfChocolates - action.payload
        }
        default: return state
    }
}

export default chocolateReducer;