import { useSelector } from "react-redux"
import Load from "./Load"
import Save from "./Save"

export default function InfoBar() {

    const health = useSelector((state) => state.Character.health)

    return <>
        <div className="info-bar">
            <h3>Hero Quest</h3>
            <div className="health-bar-div">
                <p>Health:</p>
                <div className="health-value">{health}</div>
                <progress className="health-progress" value={health} max="100">60</progress>
            </div>
            <div>
                <p>Money:</p>
                <p>750</p>
            </div>
            <div>
                <p>Quest:</p>
                <p>Dragon Slayer</p>
            </div>
            <Save />
            <Load />
            <button>Settings</button>
        </div>
    </>
}