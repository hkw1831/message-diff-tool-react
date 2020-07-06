import { combineReducers } from 'redux'
import { updateMessageReducer } from './UpdateMessageReducer'

export const rootReducer = combineReducers(
    {
        value: updateMessageReducer
    }
)