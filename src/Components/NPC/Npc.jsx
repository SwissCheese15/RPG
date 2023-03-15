import { Cactoro } from "./Cactoro";
import Monster from "./Monster";

export default function Npc() {

    const cactoroPositions = (input) => {
        let positions = []
        for (let i = 0; i < input; i++) {
            let x = Math.round(Math.random() * 20)
            let z = Math.round(Math.random() * 20)
            positions.push([x, 0, z])
        }
        return positions
    }

    let cactoro = cactoroPositions(10)


    return <>

    <Cactoro position-z={-20}></Cactoro>

    <Cactoro position-z={-10}></Cactoro>
{/* 
        <Monster
            name={"Cactoro"}
            position={[10,0,-10]}
            size={4}
            aggressiveness={10}
            walkingSpeed={5}
            chargeSpeed={5}
            roamingDistance={5}
            roamingRotation={1}
            turnFrequency={5}
            damage={5}
            damageSpeed={5}
        /> */}
        {/* <Monster
            name={"PinkBlob"}
            position={[6,0,-3]}
            size={2}
            aggressiveness={2}
            walkingSpeed={8}
            chargeSpeed={20}
            roamingDistance={5}
            roamingRotation={1}
            turnFrequency={5}
            damage={5}
            damageSpeed={2}
        /> */}
    </>

}