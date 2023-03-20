import * as THREE from "three"
import { useAnimations, Html } from "@react-three/drei"
import { useLoader, useFrame } from "@react-three/fiber"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { useRef, useMemo, useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addToState } from "../../Redux/CharacterSlice"

let damageTime = 0

export default function Monster(props) {

    const dispatch = useDispatch()

    // Capturing save Position from Store
    const position = useSelector((state) => state.Character.position)
    const chop = useSelector((state) => state.Character.chop)

    // Ref to the NPC Mesh
    const npcRef = useRef()

    // Tweaks
    const startingPosition = props.position
    const size = props.size
    const aggressiveness = props.aggressiveness
    const walkingSpeed = props.walkingSpeed
    const chargeSpeed = props.chargeSpeed
    const roamingDistance = props.roamingDistance
    const roamingRotation = props.roamingRotation
    const turnFrequency = props.turnFrequency
    const damage = props.damage
    const damageSpeed = props.damageSpeed

    // creating state for the NPC's health
    const [health, setHealth] = useState(100)

    // GLTF
    let gltfPath = "/Models/Monsters/" + props.name + ".gltf"
    const npc = useLoader(GLTFLoader, gltfPath)
    const npc2 = useMemo(() => npc.scene.clone(), [npc])
    const animations = useAnimations(npc.animations, npc.scene)

    // XXX
    

    const walk = animations.actions.Walk
    const idle = animations.actions.Idle
    const bite = animations.actions.Bite_Front
    const death = animations.actions.Death
    const hit = animations.actions.HitRecieve
    // Maka animation only run once
    death.setLoop(THREE.LoopOnce)
    // Freeze on last frame of animation
    death.clampWhenFinished = true

    useEffect(() => {
        if(chop) {
            setHealth(health - 20);
        }
    }, [chop])

    useEffect(() => {
        if(health <= 0) {
            setTimeout(() => {
                walk.stop()
                bite.stop()
                death.play()
            }, 600)
        }
    }, [health])

    useFrame((state) => {

        if (health > 0) {
            const elapsedTime = state.clock.elapsedTime

            walk.play()

            // Capturing the Caracters current position
            const character = new THREE.Vector3(position[0], position[1], position[2])

            // checking for proximity to save
            if (npcRef.current.position.distanceTo(character) < aggressiveness) {
                npcRef.current.lookAt(character);
                
                // checking when to stop charging
                if (npcRef.current.position.distanceTo(character) > 1) {
                    // calculating the vector to charge the caracter
                    const charPos = character.copy(character)
                    charPos.negate()
                    const npcPos = new THREE.Vector3()
                    npcPos.copy(npcRef.current.position)
                    npcPos.add(charPos)
                    npcPos.negate()
                    npcPos.normalize()
                    npcPos.multiply(new THREE.Vector3(chargeSpeed * 0.001, chargeSpeed * 0.001,chargeSpeed * 0.001))
                    // applying the new vector
                    npcRef.current.position.add(npcPos)
                    bite.stop()
                }
                // close and attacking
                if (npcRef.current.position.distanceTo(character) <= 1) {
                    bite.play();
                    // change the frequency of damaging
                    if (elapsedTime - damageTime > damageSpeed) {
                        damageTime = elapsedTime
                        dispatch(addToState(["health", -damage]))
                    }
                }
            }

            // XXX wrong direction after encounter
            else { 
                let f = new THREE.Vector3(0, 0, walkingSpeed * 0.001)
                f.applyAxisAngle( new THREE.Vector3(0, 1, 0), npcRef.current.rotation.y)
                npcRef.current.position.add(f)
                const vecStartingPos = new THREE.Vector3(startingPosition[0], startingPosition[1], startingPosition[2])
                if (npcRef.current.position.distanceTo(vecStartingPos) > roamingDistance && elapsedTime > turnFrequency) {
                    // state.clock.stop(), state.clock.start()
                    npcRef.current.rotation.y += roamingRotation
                }
            }
        }
    })

    return <>
        <primitive
            ref={npcRef}
            object={npc.scene} 
            position={startingPosition}
            rotation-y={Math.PI} 
            scale={ size * 0.1 }
        >
            <Html>{health}</Html>
        </primitive>
    </>
}