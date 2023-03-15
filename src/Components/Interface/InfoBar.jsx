import { useSelector } from "react-redux"

export default function InfoBar() {

    const health = useSelector((state) => state.Character.health)

    return <>
        <div className="infoBar">
            <h3>Hero Quest</h3>
            <div className="healthBar">
                <p>Health:</p>
                <div className="healthValue">{health}</div>
                <progress className="health" value={health} max="100">60</progress>
            </div>
            <div>
                <p>Money:</p>
                <p>750</p>
            </div>
            <div>
                <p>Quest:</p>
                <p>Dragon Slayer</p>
            </div>
            <button>Settings</button>
        </div>
    </>
}