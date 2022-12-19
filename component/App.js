import html from "../core.js";
import { connect } from "../store.js";


const connector = connect()
function App() {
    return html`
        <h1>Hello Word</h1>
    `
}

export default connector(App)


