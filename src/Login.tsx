import React from "react";
import './Login.css';

export class Login extends React.Component {
    render() {
        return (
            <div id="login">
                <h1>Login</h1>

                <form>
                    <input type="email" name="email" placeholder="Email" />
                    <input type="password" name="password" placeholder="Password" />
                    <input type="submit" value="Login" />
                </form>
            </div>
        );
    }
}