import React from "react";
import '../css/Login.css';
import { UserModel } from "../model/UserModel";

type LoginState = {
    email: string,
    password: string
}

type LoginProps = {
    loginHandler: Function
}

export class Login extends React.Component<LoginProps, LoginState> {

    constructor(params: LoginProps) {
        super(params);

        this.state = {
            email: "",
            password: ""
        }
    }

    render() {
        return (
            <div id="login">
                <h1>Login</h1>

                <form onSubmit={(e) => {e.preventDefault(); return false}}>
                    <input type="email" name="email" value={this.state.email} onChange={(e) => {this.setState({email: e.target.value})}} placeholder="Email" />
                    <input type="password" name="password" value={this.state.password} onChange={(e) => {this.setState({password: e.target.value})}} placeholder="Password" />
                    <button onClick={() => {this.handleFormSubmit();}}>Login</button>
                </form>
            </div>
        );
    }

    handleFormSubmit() {
        
        let userModel = new UserModel("", this.state.email, "");
        this.props.loginHandler(userModel);
    }
}