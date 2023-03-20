import Login from "./AuthSubComponents/Login"
import SignUp from "./AuthSubComponents/SignUp"
import { useState } from "react"

export default function Authentication() {

    const [subComp, setSubComp] = useState("Login")
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    // Receiving information from the children to toggle Login/SignUp
    const toggle = (input) => {
        setSubComp(input)
    }

    // Logic to allow autofill of credentials after succesfull Sign Up
    // Function is passed to SignUp Component as prop 
    const loginNav = (email, password) => {
        setEmail(email);
        setPassword(password)
    }
    let info = {
        email: email,
        password: password
    }

    return <>
        <div className="auth-main-div">
            <div>
                <h1>Hero Quest</h1>
            </div>
            <div className="auth-main-menu">
                <div>
                    {subComp === "Login" ? <Login func={toggle} info={info}/> : ""}
                    {subComp === "SignUp" ? <SignUp func={toggle} new={loginNav}/> : ""}
                </div>
            </div>
            <div>
                Footer
            </div>
        </div>
    </>

}