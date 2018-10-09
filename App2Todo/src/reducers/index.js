import { combineReducers } from 'redux'

import categoryReducer from './categoryReducer'
import taskReducer from './taskReducers'

export default combineReducers({
    currentCategory: categoryReducer,
    tasks: taskReducer,
})