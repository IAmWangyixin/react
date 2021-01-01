import {
    ADD_TODO,
    TOGGLE_TODO,
    SET_VISIBILITY_FILTER,
    VisibilityFilters
} from '../actions/todo'

const {
    SHOW_ALL
} = VisibilityFilters

export function visibilityFilter(state = SHOW_ALL, actions) {
    switch (actions.type) {
        case SET_VISIBILITY_FILTER:
            return actions.filter
        default:
            return state
    }
}

export function todos(state = [], actions) {
    switch(actions.type){
        case ADD_TODO:
            return [
                ...state,
                {
                    id: actions.id,
                    text: actions.text,
                    completed: false
                }
            ]
        case TOGGLE_TODO:
            return state.map((todo) => {
                if (actions.id === todo.id) {
                    return Object.assign({}, todo, {
                        completed: !todo.completed
                    })
                }
                return todo
            })
        default:
            return state
    }
}
