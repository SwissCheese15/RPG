import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useFetch } from "../../../CustomHooks/useFetch";

export default function Login(props) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // variable to trigger fetch
    const [fetch, setFetch] = useState(false);

    // make a navigate variable to use "useNavigate" later
    const navigate = useNavigate();
  
    // updating the email (global state)
    const handleEmailInput = event => {
        setEmail(event.target.value);
    };
    // updating the password (local state)
    const handlePasswordInput = event => {
        setPassword(event.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFetch(true)
    }

    // Passing toggle information up to parent
    const handleToggle = () => {
        props.func("SignUp")
    }

    useEffect(() => {
        if (props.info.email) {
            setEmail(props.info.email)
            setPassword(props.info.password)
        }
    })

    // preparing Body for useFetch()
    const body = {
        email: email,
        password: password
    }

    // custom Hook useFetch(). Check useFetchDocs for more Infos.
    const { response, error, isLoading } = useFetch(
        "http://127.0.0.1:8000/api/token/",
        "POST",
        body,
        fetch
    )

    // Nav to Game upon successful fetch
    // insert localStorage/cookie logic here
    if (response) {
        setTimeout(() => {
            console.log(response);
            navigate("../");
        }, 100)

    }

    return <>
        <div className="login-signup-main-div">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input
                    placeholder="e-mail"
                    onChange={handleEmailInput}
                    // Logic to allow autofill of credentials after succesfull Sign Up
                    value={props.info.email ? props.info.email : email}
                    type="email"
                />
                <input
                    placeholder="password"
                    onChange={handlePasswordInput}
                    // Logic to allow autofill of credentials after succesfull Sign Up
                    value={props.info.password ? props.info.password : password}
                    type="password"
                />
                <button type="submit">LOG IN</button>
            </form>
            <div className="login-signup-toggle">
                <p>Don't have an account yet?</p>
                <button onClick={handleToggle}>SIGN UP HERE</button>
            </div>
        </div>
    </>

}