import { useState, useRef } from "react";
import { useSelector } from "react-redux";

export default function Save() {

    const [data, setData] = useState([])
    const saveButton = useRef()

    const rotationY = useSelector((state) => state.Character.rotationY)
    const position = useSelector((state) => state.Character.position)
    const health = useSelector((state) => state.Character.health)
    const money = useSelector((state) => state.Character.money)


    const handleSave = () => {

        saveButton.current.blur()

        const url = "http://127.0.0.1:8000/api/save/1/";
    
        const jsBody = {
                id: 1,
                name: "Save_1",
                positionX: position[0],
                positionY: position[1],
                positionZ: position[2],
                rotation: rotationY,
                money: money,
                health: health
        };
    
        const config = {
            method: "PATCH",
            headers: new Headers({
            "Content-Type": "application/json",
            }),
            body: JSON.stringify(jsBody),
        };
        fetch(url, config)
        .then(response => {
            if (response.status === 200) {
                console.log("fetch worked")
            }
            else {
                return response.json();
            }
        })
    }


    return <>
        <button ref={saveButton} onClick={handleSave}>Save</button>
    </>

}