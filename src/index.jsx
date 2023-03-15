import "../css/styles.css"
import ReactDOM from 'react-dom/client'
import { KeyboardControls } from "@react-three/drei"
import CanvasComponent from "./Canvas"
// Redux
import Store from "./Redux/Store"
import { Provider } from "react-redux"
import { useSelector } from "react-redux"
// Components
import Interface from "./Components/Interface/Interface"

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <Provider store={Store}>
        <KeyboardControls
            map={ [
                { name: "forward", keys: [ "KeyW" ] },
                { name: "leftward", keys: [ "KeyA" ] },
                { name: "rightward", keys: [ "KeyD" ] },
                { name: "backward", keys: [ "KeyS" ] },
                { name: "jump", keys: [ "Space" ] },
                { name: "attack", keys: [ "KeyF" ] }
            ] }
        >
            <Interface />
            <CanvasComponent />
        </KeyboardControls>
    </Provider>
)