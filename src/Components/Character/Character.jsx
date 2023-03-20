import * as THREE from "three"
import { useThree, useFrame, useLoader } from "@react-three/fiber"
import { useKeyboardControls, useAnimations } from "@react-three/drei"
import { useRef, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addToState, addVector, toggle } from "../../Redux/CharacterSlice"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"

export default function Character() {

    // Tweaks
    const walkingSpeed = 10

    // GLTF
    const viking = useLoader(GLTFLoader, "/Models/Viking/scene.gltf")
    const animations = useAnimations(viking.animations, viking.scene)

    const [walking, setWalking] = useState(false)
    const [attacking, setAttacking] = useState(false)


        const walk = animations.actions.viking_walk
        const idle = animations.actions.viking_idle
        const chop = animations.actions.viking_chop
        chop.setLoop(THREE.LoopOnce)
        walking ? walk.play() : walk.stop(), idle.play()

    // -------

    const dispatch = useDispatch()
    const rotationY = useSelector((state) => state.Character.rotationY)
    const position = useSelector((state) => state.Character.position)

    const character = useRef()

    const [ subscribeKeys, getKeys ] = useKeyboardControls()

    const speed = 3
    const jumpSpeed = 10
    const jumpDuration = 0.2

    const cameraDistance = 7

    let jumpTime = 0

    useFrame((state) => {
        let characterPosition = character.current.position
        const characterRotation = character.current.rotation

        const cameraPosition = new THREE.Vector3()
        cameraPosition.copy(characterPosition)
        cameraPosition.z -= cameraDistance * (Math.cos(characterRotation.y))
        cameraPosition.x -= cameraDistance * (Math.sin(characterRotation.y))
        cameraPosition.y += cameraDistance * 0.5

        const cameraTarget = new THREE.Vector3()
        cameraTarget.copy(characterPosition)
        cameraTarget.y += 0.5

        state.camera.position.copy(cameraPosition)
        state.camera.lookAt(cameraTarget)
    })

    const { forward, backward, leftward, rightward, jump, attack } = getKeys()

    useEffect(() => {

        let ready = true

        subscribeKeys(
            (state) => state.attack,
            (value) => {
                if (value && ready) {
                    chop.play()
                    ready = false
                    setAttacking(true);
                    dispatch(toggle(["chop", true]))
                    setTimeout(() => {
                        dispatch(toggle(["chop", false])),
                        ready = true,
                        chop.stop()
                    }, 950)
                }
            }
        )

    }, [attack])

    useEffect(() => {

    }, [])

    useFrame((state, delta) => {

        const elapsed = state.clock.elapsedTime

        const { forward, backward, leftward, rightward, jump, attack } = getKeys()

        // Appling the current Y-Axis Angle to the Displacement Vector to walk forward
        let f = new THREE.Vector3(0, 0, walkingSpeed * 0.002)
        f.applyAxisAngle( new THREE.Vector3(0, 1, 0), character.current.rotation.y)
        // Same for backward
        let b = new THREE.Vector3(0, 0, walkingSpeed * 0.001)
        b.applyAxisAngle( new THREE.Vector3(0, 1, 0), character.current.rotation.y + Math.PI)
    
        if (backward) { 
            setWalking(true);
            // Sending the displacement to the Character Store
            dispatch(addVector([b.x, b.y, b.z]));
        }
        if (forward) {
            setWalking(true);
            // Sending the displacement to the Character Slice
            dispatch(addVector([f.x, f.y, f.z]));
        }
        // Sending the rotation-change to the Character Slice
        if (leftward) { dispatch(addToState(["rotationY", delta * speed])), setWalking(true) }
        if (rightward) { dispatch(addToState(["rotationY", -delta * speed])), setWalking(true) }
        if ( !backward && !forward && !leftward && !rightward ) { setWalking(false)}

        // Jump Logic
        // Start Jumping
        if (jump && jumpTime === 0) {
            jumpTime = elapsed
        }
        // Upward Motion
        if (jumpTime + jumpDuration > elapsed && jumpTime != 0) {
            character.current.position.y += delta * jumpSpeed
        }
        // Downward Motion
        if (jumpTime < elapsed - jumpDuration && jumpTime != 0) {
            character.current.position.y -= delta * jumpSpeed * 0.5
            // Stopping the DW Motion when the caracter hits the Floor
            if (character.current.position.y <= 0.5) {
                jumpTime = 0, character.current.position.y = 0.5
            }
        }
    })
      

    return <>
    <primitive 
        object={viking.scene} 
        ref={character}
        position={position}
        rotation-y={ rotationY } 
        scale={ 0.7 }
    />
    </>
}