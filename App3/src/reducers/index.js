import { combineReducers } from 'redux'

import taskReducer from './taskReducers'
import filmReducer from './filmReducer'

export default combineReducers({
    film: filmReducer,
    films: taskReducer,
})