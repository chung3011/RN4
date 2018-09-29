import { ADD_TASK } from '../actions/types'

export default function (state = [], action) {
    switch (action.type) {
        case ADD_TASK:
            // check date exist
            const taskOfDay = state.filter(item => item.id === action.payload.id)
            if (taskOfDay.length === 0) {
                // lấy obj cũ trong state rồi add thêm obj mới rồi sx lại
                return [
                    ...state,
                    {
                        id: action.payload.id,
                        date: action.payload.date,
                        data: [
                            action.payload.task
                        ]
                    }
                ].sort((day1,day2)=>day1.id-day2.id)
            } else {
                return [
                    ...(state.filter(item => item.id === action.payload.id)),
                    {
                        id: action.payload.id,
                        date: action.payload.date,
                        data: [
                            ...(taskOfDay[0].data),
                            action.payload.task
                        ].sort((task1,task2)=>task1.id-task2.id)
                    }
                ].sort((day1,day2)=>day1.id-day2.id)
            }
            // add task
            // sort

        default:
            return state
    }
}