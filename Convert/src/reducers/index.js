import { combineReducers } from 'redux'
import ValueReducer from './ValueReducer';
import DataReducer from './DataReducer';

export default combineReducers({
    currentValue: ValueReducer,
    currentData: DataReducer
})