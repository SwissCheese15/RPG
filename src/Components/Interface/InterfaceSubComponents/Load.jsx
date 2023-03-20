import { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { changeState } from "../../../Redux/CharacterSlice";

export default function Load() {

    const dispatch = useDispatch()

    const [data, setData] = useState([])
    const loadButton = useRef()
    // useRef Hack to prevent useEffect from running on mount
    const isMounted = useRef(false);

    const sendData = () => {
        
    }

    const handleLoad = (e) => {

        loadButton.current.blur()
        e.preventDefault()

        const url = "http://127.0.0.1:8000/api/save/";
  
        const config = {
            method: "GET"
        };
  
        fetch(url, config)
            .then(response => response.json())
            .then(data => setData(data))
            .then(() => sendData())
    }

    useEffect(() => {
        // conditional to prevent useEffect from running on mount
        if (isMounted.current) {
            dispatch(changeState(["position", [data[0].positionX, data[0].positionY, data[0].positionZ]])),
            dispatch(changeState(["rotationY", data[0].rotation]))
        } else {
            // allow useEffect to run based on dependencies
            isMounted.current = true;
        }
    }, [data])



    return <>

        <button ref={loadButton} onClick={e => handleLoad(e)}>Load</button>
    
    </>

}