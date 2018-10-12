import { CHANGE_VALUE, FILL_DATA } from './type'

export const changeValue = (data) => ({
    type: CHANGE_VALUE,
    payload: data
})

export const fillData = (data) => ({
    type: FILL_DATA,
    payload: data
})