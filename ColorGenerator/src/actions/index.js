import {CHANGE_COLOR} from './type'

export const changeColor = (color) => ({
    type: CHANGE_COLOR,
    payload : color
})