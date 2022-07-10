import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './style.css'

const authInput = () => {
    return (
        <div className="loginCard">


            <h1>Login</h1>
            <form action="">
                <div>
                    <TextField
                        required
                        id="email__input"
                        className="input__login"
                        label="E-mail"
                        defaultValue=""
                    />
                </div>
                <div>
                    <TextField
                        required
                        id="password__input"
                        className="input__login"
                        label="Password"
                        defaultValue=""
                        type="password"
                    />
                </div>
                <Button variant="contained"><Link to='/shop'>Log in</Link></Button>
            </form>

        </div>
    )
}

export default authInput;