import { ADD_ORDER, DEL_ORDER } from './type'

export const addOrder = (order) => ({
    type: ADD_ORDER,
    payload: order
})

export const delOrder = (name) => ({
    type: DEL_ORDER,
    payload: name
})