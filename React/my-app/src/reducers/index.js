import { combineReducers } from 'redux'
import todoReducers from './todos';

const rootReducer = combineReducers({
    todoReducers,
});

export default rootReducer; 