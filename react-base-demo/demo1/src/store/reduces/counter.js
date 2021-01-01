import * as types from '../action-types';

const initState = {
    number: 0
};

function counter (state = initState, action) {
    switch(action.type) {
        case types.ADD:
            return {
                number: state.number + action.count
            };
        case types.MINUS:
            return {
                number: state.number - action.count
            }
        default:
            return state;
    }
}

export default counter;