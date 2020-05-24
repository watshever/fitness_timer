export const UPDATE_TIMER = 'UPDATE_TIMER'
export const ADD_TIMER = 'ADD_TIMER'
export const REMOVE_TIMER = 'REMOVE_TIMER'
export const UPDATE_USER = 'UPDATE_USER'

// adds a new timer to the app
export const addTimer = timer => ({
    type: ADD_TIMER,
    payload: timer,
})

// changes the properties of an existing timer 
export const updateTimer = update => ({
    type: UPDATE_TIMER,
    payload: update
})

// takes a timer id and removes the timer with that id
export const removeTimer = id=> ({
    type: REMOVE_TIMER,
    payload: id,
})

export const updateUser = update => ({
    type: UPDATE_USER,
    payload: update,
})