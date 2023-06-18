import { combineReducers } from 'redux';
import Auth from './Auth';
import Theme from './Theme';
import  General from './General'

const reducers = combineReducers({
    theme: Theme,
    auth: Auth,
    general:General
});

export default reducers;