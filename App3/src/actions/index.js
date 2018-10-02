import { FILM_DETAIL, ADD_FILM } from '../actions/types'

export const filmDetail = (data) => ({
    type: FILM_DETAIL,
    payload: data
})
export const addFilm = (data) => ({
    type: ADD_FILM,
    payload: data
})
