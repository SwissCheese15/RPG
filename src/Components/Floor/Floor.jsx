// Components
import Grass from "./Grass/Grass"
import Water from "./Water/Water"

export default function Floor() {

    const unit = 10

    return <>
        <Grass position={[unit * 0, unit * 0, unit * 1]} unit={unit} />
        <Grass position={[unit * 1, unit * 0, unit * 1]} unit={unit} />
        <Grass position={[unit * 1, unit * 0, unit * 0]} unit={unit} />
        <Grass position={[unit * 0, unit * 0, unit * -1]} unit={unit} />
        <Grass position={[unit * -1, unit * 0, unit * -1]} unit={unit} />
        <Grass position={[unit * -1, unit * 0, unit * 0]} unit={unit} />
        <Grass position={[unit * -1, unit * 0, unit * 1]} unit={unit} />
        <Grass position={[unit * 1, unit * 0, unit * -1]} unit={unit} />
        
        <Water position={[unit * 0, unit * 0, unit * 0]} unit={unit} />
    </>

}