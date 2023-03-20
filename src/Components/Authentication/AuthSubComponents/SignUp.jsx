import { useState } from "react";
import { useFetch } from "../../../CustomHooks/useFetch";

export default function SignUp(props) {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeat, setRepeat] = useState("");
    // variable to alert wrong inputs
    const [alert, setAlert] = useState(null);
    // variable to trigger fetch
    const [fetch, setFetch] = useState(false)
  
    const handleNameInput = event => {
        setName(event.target.value);
    };

    const handleEmailInput = event => {
        setEmail(event.target.value);
    };

    const handlePasswordInput = event => {
        setPassword(event.target.value);
    };

    const handleRepeatInput = event => {
        setRepeat(event.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password != repeat) {
            setAlert("passwords don't match")
        }
        else { 
            setAlert(null);
            setFetch(true);
        }
    }

    // preparing Body for useFetch()
    const body = {
        username: name,
        email: email,
        password: password
    }

    // custom Hook useFetch(). Check useFetchDocs for more Infos.
    const { response, error, isLoading } = useFetch(
        "http://127.0.0.1:8000/api/user/",
        "POST",
        body,
        fetch
    )

    // Nav to Login and autofilling credentials upon successful fetch
    if (response) {
        setTimeout(() => {
            props.func("Login")
            props.new(email, password);
        }, 100)
    }

    // Passing toggle information up to parent
    const handleToggle = () => {
        props.func("Login")
    }

    return <>
        <div className="login-signup-main-div">
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <input
                    placeholder="Character Name"
                    onChange={handleNameInput}
                    type="text"
                />
                <input
                    placeholder="e-mail"
                    onChange={handleEmailInput}
                    type="email"
                />
                <input
                    placeholder="password"
                    onChange={handlePasswordInput}
                    type="password"
                />
                <input
                    placeholder="password repeat"
                    onChange={handleRepeatInput}
                    type="password"
                />
                { alert ? 
                    <div className="alert-div">
                        <p>{alert}</p>
                    </div> : "" 
                }
                <button type="submit">SIGN UP</button>
            </form>
            <div className="login-signup-toggle">
                <p>Already have an account ?</p>
                <button onClick={handleToggle}>LOG IN HERE</button>
            </div>
        </div>
    </>

}