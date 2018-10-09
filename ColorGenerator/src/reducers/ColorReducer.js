import { CHANGE_COLOR } from '../actions/type'

ColorDefault = [
    {
        "id": 1,
        "color": 'red',
        "number": 0
    },
    {
        "id": 2,
        "color": 'green',
        "number": 0
    },
    {
        "id": 3,
        "color": 'blue',
        "number": 0
    }
]

export default function (color = ColorDefault, action) {
    switch (action.type) {
        case CHANGE_COLOR:
            return [
                ...(color.filter(item => item.color != action.payload.color)),
               action.payload
            ].sort((color1, color2) => color1.id - color2.id)
        default:
            return color
    }
}