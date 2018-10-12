import { CHANGE_VALUE } from '../actions/type'

export default function (value = { left: 1, right: 1 }, action) {
    switch (action.type) {
        case CHANGE_VALUE:
            return {
                left: action.payload.type === 'left' ? action.payload.value : value.left,
                right: action.payload.type === 'right' ? action.payload.value : value.right
            }

        default:
            return value
    }
}