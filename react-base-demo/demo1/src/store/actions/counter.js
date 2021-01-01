import * as types from '../action-types';

export default {
    add(count) {
        return {
            type: types.ADD,
            count
        };
    },
    minus(count) {
        return {
            type: types.MINUS,
            count
        };
    }
}