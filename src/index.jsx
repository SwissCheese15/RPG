import "../css/scss/styles.css"
import ReactDOM from 'react-dom/client'

// Routing
import { BrowserRouter } from "react-router-dom"
import { Routes, Route } from "react-router-dom"
// Redux
import Store from "./Redux/Store"
import { Provider } from "react-redux"
import { useSelector } from "react-redux"
// Components
import CanvasComponent from "./Canvas"
import Authentication from "./Components/Authentication/Authentication"

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <Provider store={Store}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <CanvasComponent /> } />
                <Route path="/auth" element={ <Authentication /> } />
            </Routes>
        </BrowserRouter>
    </Provider>
)