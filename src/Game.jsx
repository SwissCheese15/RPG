import { extend } from '@react-three/fiber'
import { Html, PivotControls, TransformControls, OrbitControls } from '@react-three/drei'
import { useRef } from 'react'
// Components
import Character from './Components/Character/Character'
import Npc from './Components/NPC/Npc'
import Floor from './Components/Floor/Floor'

export default function Experience() {

    const cube = useRef()
    const sphere = useRef()

    return <>

        {/* <OrbitControls makeDefault /> */}

        <directionalLight position={ [ 1, 2, 3 ] } intensity={ 1.5 } />
        <ambientLight intensity={ 0.5 } />
        
        <Character />
        <Npc />
        <Floor />
    </>
}