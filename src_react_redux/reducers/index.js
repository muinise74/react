import {ADD} from '../actions';
import {combineReducers} from 'redux';

const initState = {
    str : 'react'
};

const data = (state = initState, action) => {
    switch (action.type) {
        case ADD :
            console.log(1);
            console.log(action.type);
            return {
                str: state.str + '200'
            };
        default :
            console.log(2);
            console.log(action.type);
            return state;
    }
};

const App = combineReducers({data});

export default App;