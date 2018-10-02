import { FILM_DETAIL } from '../actions/types'

export default function (state = {}, action) {
    switch (action.type) {
        case FILM_DETAIL:
            return action.payload
        default:
            return state
    }

}