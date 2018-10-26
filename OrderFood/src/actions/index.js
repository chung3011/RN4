import { ADD_ORDER } from './type'

export const addOrder = (order) => ({
    type: ADD_ORDER,
    payload: order
})