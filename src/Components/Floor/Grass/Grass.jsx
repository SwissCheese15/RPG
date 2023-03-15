export default function Grass(props) {


    return <>
        <mesh position={ props.position } rotation-x={ - Math.PI * 0.5 } scale={ props.unit }>
            <planeGeometry />
            <meshStandardMaterial color="greenyellow" />
        </mesh>
    </>

}