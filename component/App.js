import html from "../core.js";
import { connect } from "../store.js";
import Header from "./Header.js";
import TodoList from "./TodoList.js";
import Footer from "./Footer.js";


function App({ todos }) {
    return html`
        <section class="todoapp">
            ${Header()}
            ${todos.length > 0 && TodoList()}
            ${todos.length > 0 && Footer()}
        </section>
        <footer class="info">
			<p>Double-click title to edit a todo</p>
			<p>Created by <a href="https://github.com/vancanhaa/todo-list-JS">Pham Van Canh</a></p>
		</footer>
        
    `
}

export default connect()(App)


