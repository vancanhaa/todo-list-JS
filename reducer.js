const init = {
    todos: [
        {
            title: "Learn HTML, CSS",
            completed: false
        },
        {
            title: "Learn Javascript",
            completed: false
        },
        {
            title: "Learn ReatJS",
            completed: true
        }
    ]
}

export default function reducer(state = init, action, args) {
    switch (action) {
        default:
            return state;
    }
}