import todoReducer from './todoReducer'
import userReducer from './userReducer'

const rootReducer = (state, action) => {
    let next = userReducer(state, action)
    next = todoReducer(next, action)
    return next
}

export default rootReducer
