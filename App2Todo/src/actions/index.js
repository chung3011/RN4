import { PICK_CATEGORY, ADD_TASK} from '../actions/types'

export const pickCategory = (category) => ({
    type: 'pick_category',
    payload: category
})

export const addTask = (data) => ({
    type: ADD_TASK,
    // data: id, date, task
    payload: data
})