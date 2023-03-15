export default function Water(props) {

    return <>
        <mesh position={ props.position } rotation-x={ - Math.PI * 0.5 } scale={ props.unit }>
            <planeGeometry />
            <meshStandardMaterial color="aqua" />
        </mesh>
    </>

}