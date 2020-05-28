import { combineReducers } from 'redux'
import cakeReducer from './cakes/cakeReducer'
import icecreamReducer from './icecream/icecreamReducer'
import chocolateReducer from './chocolate/chocolateReducer';
import userReducer from './user/userReducer';
import cashReducer from './cash/cashReducer';

const rootReducer = combineReducers({
    cake: cakeReducer,
    icecream: icecreamReducer,
    chocolate: chocolateReducer,
    cash: cashReducer,
    user: userReducer
})

export default rootReducer;