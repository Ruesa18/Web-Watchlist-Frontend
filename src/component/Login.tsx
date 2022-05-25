import React from "react";
import '../css/Login.css';

type LoginState = {
    email: string,
    password: string
}

export class Login extends React.Component<{}, LoginState> {

    constructor(props: Readonly<Object> | Object) {
        super(props);

        this.state = {
            email: "",
            password: ""
        };
    }

    render() {
        return (
            <div id="login">
                <h1>Login</h1>

                <form onSubmit={(e) => {e.preventDefault(); return false}}>
                    <input type="email" name="email" value={this.state.email} onChange={(e) => {this.setState({email: e.target.value})}} placeholder="Email" />
                    <input type="password" name="password" value={this.state.password} onChange={(e) => {this.setState({password: e.target.value})}} placeholder="Password" />
                    <button onClick={() => {this.loginHandler()}}>Login</button>
                </form>
            </div>
        );
    }

    loginHandler() {
        console.log("Email: " + this.state.email, "Password: " + this.state.password);
        //TODO implement login
    }
}