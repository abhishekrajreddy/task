import {combineReducers} from 'redux'
import userReducer from './Components/redux/Reducer/userReducer'

export default combineReducers({
    user:userReducer,
})