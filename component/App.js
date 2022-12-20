import html from "../core.js";

import Header from "./Header.js";
import TodoList from "./TodoList.js";
import Footer from "./Footer.js";


function App() {
    return html`
        <section class="todoapp">
            ${Header()}
            ${TodoList()}
            ${Footer()}
        </section>
        <footer class="info">
            <p>Double-click to edit a todo</p>
            <p>Created by <a href="https://www.facebook.com/phamvan.canh.526">Pham Van Canh</a></p>
        </footer>
    `
}

export default App


