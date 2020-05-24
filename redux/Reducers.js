import { combineReducers } from 'redux'
import * as types from './Actions'

// reducer to control the timers in the app
const timerReducer = (state = [], action) => {
    switch(action.type) {
        case types.ADD_TIMER:
            // copies action.payload and returns a new list of state
            return [...state, action.payload]
        case types.UPDATE_TIMER:
            return state.map(item => {
                if (item.id == action.payload.id) {
                    return {
                        ...item,
                        min: action.payload.min,
                        sec: action.payload.sec,
                    }
                }
                return item
            })
        case types.REMOVE_TIMER:
            // removes a particular timer from the app
            return [...state.filter(item => {(item.id != action.payload)})]
        default:
            return state
    }
}

// reducer to change settings and user properties
const userReducer = (state = {},  action) => {
    switch(action.type) {
        // updates user information
        case types.UPDATE_USER:
            return merge(state, {user: action.payload})
        default:
            return state
    }
}   

// merge function adds prev state with next
const merge = (prev, next) => Object.assign({}, prev, next)

// sets a particular reducer for each store element
const reducer = combineReducers({
    timers: timerReducer,
    user: userReducer,
})

export default reducer