import { Instance, Instances } from "@react-three/drei"

export default function Cubes(props) {

    return <>
        <Instances>
                <boxGeometry/>
                <meshStandardMaterial wireframe={false}/>
                <Instance
                    position={props.position}
                    color={"red"} />
                <Instance
                    position={[3, 2, -3]}
                    color={"red"} />
        </Instances>
    </>
}