import { useAnimations } from "@react-three/drei"
import { useLoader } from "@react-three/fiber"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { useState, useEffect } from "react"

export default function PinkBlob() {

    // GLTF
    const pinkBlob = useLoader(GLTFLoader, "/Models/Monsters/PinkBlob.gltf")
    const animations = useAnimations(pinkBlob.animations, pinkBlob.scene)

    const [walking, setWalking] = useState(true)
    const [attack, setAttack] = useState(false)

    useEffect(() => {
        const walk = animations.actions.Walk
        const idle = animations.actions.Idle
        const bite = animations.actions.Bite_Front
        walking ? walk.play() : walk.stop(), idle.play()
        if (attack) {chop.stop(), chop.play()}
        
    }, [])

    return <>
        <primitive 
            object={pinkBlob.scene} 
            position={[1,0,1]}
            rotation-y={Math.PI} 
            scale={ 0.5 }
        />
    </>

}