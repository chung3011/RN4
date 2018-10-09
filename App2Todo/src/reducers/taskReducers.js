import { ADD_TASK, TOGGLE_TASK, DEL_TASK } from '../actions/types'

export default function (state = [], action) {
    switch (action.type) {
        case ADD_TASK:
            // check date exist
            // add task
            // sort
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
                ].sort((day1, day2) => day1.id - day2.id)
            } else {
                return [
                    ...(state.filter(item => item.id !== action.payload.id)),
                    {
                        id: action.payload.id,
                        date: action.payload.date,
                        data: [
                            ...(taskOfDay[0].data),
                            action.payload.task
                        ].sort((task1, task2) => task1.id - task2.id)
                    }
                ].sort((day1, day2) => day1.id - day2.id)
            }

        case TOGGLE_TASK:
            return state.map(item => (item.id === action.payload.dayId)
                ? {
                    id: item.id,
                    date: item.date,
                    data: item.data.map(task => (task.id == action.payload.taskId)
                        ? {
                            id: task.id,
                            category: task.category,
                            time: task.time,
                            content: task.content,
                            isDone: !task.isDone
                        } : task)
                } : item)
        case DEL_TASK:
            const taskOfDay1 = state.filter(item => item.id === action.payload.dayId)

            return [
                ...(state.filter(item => item.id !== action.payload.dayId)),
                {
                    id: taskOfDay1[0].id,
                    date: taskOfDay1[0].date,
                    data: taskOfDay1[0].data.filter(task => task.id!== action.payload.taskId)
                }
            ].sort((day1, day2) => day1.id - day2.id)
        default:
            return state
    }
}