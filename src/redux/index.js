import { combineReducers } from 'redux';
import company from './company';

const reducers = combineReducers({
    company
});

export default (state, action) =>{
    return reducers(state, action);
};
