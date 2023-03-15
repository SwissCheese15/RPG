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

        <OrbitControls makeDefault />

        <directionalLight position={ [ 1, 2, 3 ] } intensity={ 1.5 } />
        <ambientLight intensity={ 0.5 } />

        {/* <PivotControls
            anchor={[ 0, 0, 0 ]}
            depthTest={ false }
            lineWidth={ 2 }
            axisColors={ [ '#9381ff', '#ff4d6d', '#7ae582' ] }
            scale={ 1 }
            fixed={ false }
        >
            <mesh ref={sphere} position-x={ - 2 }>
                <sphereGeometry />
                <meshStandardMaterial color="orange" />
                <Html
                    position={ [ 1, 1.5, 0 ] }
                    wrapperClass="label"
                    center
                    distanceFactor={6}
                    occlude={ [sphere, cube] }
                >
                    This is a yellow Sphere</Html>
            </mesh>
        </PivotControls>

        <mesh ref={cube} position-x={ 2 } scale={ 1.5 }>
            <boxGeometry />
            <meshStandardMaterial color="mediumpurple" />
        </mesh>
        <TransformControls object={cube} mode="translate"/> */}
        <Character />
        <Npc />
        <Floor />
    </>
}