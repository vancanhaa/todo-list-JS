import storage from "./ulti/storage.js";

const init = {
    todos: storage.get(),
    filter: "all",
    filters: {
        all: () => true,
        active: todo => !todo.completed,
        completed: todo => todo.completed
    }
}

const actions = {
    add(state, title) {
        if (title) {
            const newState = {...state};
            newState.todos.push({title, completed: false});
            state = newState
            storage.set(newState.todos)
        }
    },
    toggle(state, index) {
        const newState = {...state};
        const todo = newState.todos[index];
        todo.completed = !todo.completed;
        state = newState;
        storage.set(newState.todos);
    },
    toggleAll(state, completed) {
        const newState = {...state};
        newState.todos.forEach(todo => todo.completed = completed)
        state = newState;
        storage.set(newState.todos)
    }
}

export default function reducer(state = init, action, args) {
    actions[action] && actions[action](state, ...args)
    return state;
}