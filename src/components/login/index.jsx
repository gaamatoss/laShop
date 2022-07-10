import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './style.css'

const authInput = () => {
    return (
        <div className="loginCard">
            <h1>Login</h1>
            <form action="" className="formLogin">
                <div className="inputLogin">
                    <TextField
                        required
                        id="emailInput"
                        label="E-mail"
                        defaultValue=""
                    />
                </div>
                <div className="inputLogin">
                    <TextField
                        required
                        id="passwordInput"
                        label="Password"
                        defaultValue=""
                        type="password"
                    />
                </div>
                <Button variant="contained" size="large"><Link to='/shop'>Log in</Link></Button>

                <span>Forgot your password? <a href="">Click here</a></span>
            </form>

        </div>
    )
}

export default authInput;