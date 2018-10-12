import { FILL_DATA } from '../actions/type'
import data from '../data.json'


export default function (value = data.lenght, action) {
    switch (action.type) {
        case FILL_DATA:

            return action.payload

        default:
            return value
    }
}