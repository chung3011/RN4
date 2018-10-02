import { ADD_FILM } from '../actions/types'

export default function (state = [], action) {
    switch (action.type) {
        case ADD_FILM:
            return action.payload
        default:
            return state
    }
}