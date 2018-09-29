import {combineReducers} from 'redux'

import ColorReducer from './ColorReducer'

export default combineReducers({
    currentColor: ColorReducer
})