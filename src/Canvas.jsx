import { Canvas } from '@react-three/fiber'
import Game from './Game.jsx'
import { useSelector } from "react-redux"

export default function CanvasComponent() {

    const characterPosX = useSelector((state) => state.Character.positionX)
    const characterPosZ = useSelector((state) => state.Character.positionX)

    const followDistance = 4

    return <>
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
    </>

}