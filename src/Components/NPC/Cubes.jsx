import { Instance, Instances } from "@react-three/drei"
import { useLoader } from "@react-three/fiber"
import { useAnimations } from "@react-three/drei"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"

export default function Cubes(props) {

    let gltfPath = "/Models/Monsters/Cactoro.gltf"
    const npc = useLoader(GLTFLoader, gltfPath)
    const animations = useAnimations(npc.animations, npc.scene)

    const gltfLoader = new GLTFLoader()

    gltfLoader.load(
        "/Models/Monsters/Cactoro.gltf",
        (gltf) => {
   
        }
    )

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