import storage from "./ulti/storage.js";

const init = {
    todos: storage.get(),
}

const actions = {
    add(state, title) {
        if (title) {
            const newState = {...state};
            newState.todos.push({title, completed: false});
            state = newState
            storage.set(newState.todos)
        }
    }
}

export default function reducer(state = init, action, args) {
    actions[action] && actions[action](state, ...args)
    return state;
}