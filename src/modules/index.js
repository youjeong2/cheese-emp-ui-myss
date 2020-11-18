import userReducer  from './usr/user/user.action'
import { combineReducers } from 'redux'
const rootReducer = combineReducers({
    userReducer
})

export default rootReducer