import { ADD_FILM } from '../actions/types'

export default function (state = [], action) {
    switch (action.type) {
        case ADD_FILM:
            return [
                ...state,
                {
                    title: action.payload.title,
                    image: action.payload.image,
                }
            ]
        default:
            return state
    }
}