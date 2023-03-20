import { Canvas } from '@react-three/fiber'
import Game from './Game.jsx'
import { useSelector } from "react-redux"
import { KeyboardControls } from "@react-three/drei"

import Interface from "./Components/Interface/Interface"

export default function CanvasComponent() {

    const characterPosX = useSelector((state) => state.Character.positionX)
    const characterPosZ = useSelector((state) => state.Character.positionX)

    const followDistance = 4

    // Canvas / Interface heights
    console.log(window.innerHeight)
    root.style.setProperty('--screen-y', window.innerHeight + "px")
    root.style.setProperty('--screen-x', window.innerWidth)

    window.addEventListener('resize', () => {
        root.style.setProperty('--screen-y', window.innerHeight + "px")
        root.style.setProperty('--screen-x', window.innerWidth)
    })

    return <>
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
        <div className="canvas">
            <Canvas
                camera={ {
                    fov: 45,
                    near: 0.1,
                    far: 200,
                    position: [ 0, 4, 4 ]
                } }
            >
                <Game />
            </Canvas> 
        </div>
    </KeyboardControls>

    </>

}