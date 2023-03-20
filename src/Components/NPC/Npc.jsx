import Snake from "./Snake";
import Monster from "./Monster";
import Cubes from "./Cubes";

export default function Npc() {

    // const cactoroPositions = (input) => {
    //     let positions = []
    //     for (let i = 0; i < input; i++) {
    //         let x = Math.round(Math.random() * 20)
    //         let z = Math.round(Math.random() * 20)
    //         positions.push([x, 0, z])
    //     }
    //     return positions
    // }

    // let cactoro = cactoroPositions(10)


    return <>
        <Cubes position={[0, 1, -5]}></Cubes>
        <Snake position={[-15, 0, -15]} scale={0.5}/>
        <Snake position={[-5, 0, -20]} />
        <Snake position={[15, 0, 15]} />
        <Snake position={[5, 0, 20]} />
        
        <Monster
            name={"Cactoro"}
            position={[10,0,-10]}
            size={4}
            aggressiveness={5}
            walkingSpeed={5}
            chargeSpeed={5}
            roamingDistance={5}
            roamingRotation={1}
            turnFrequency={5}
            damage={5}
            damageSpeed={5}
        />
    </>

}