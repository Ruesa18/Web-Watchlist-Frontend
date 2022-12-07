import { AxiosResponse } from "axios";
import jwtDecode from "jwt-decode";
import React from "react";
import { isJSDocUnknownTag } from "typescript";
import '../css/Login.css';
import { ApiRequester } from "../helper/ApiRequester";
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
        if(this.state.email === "" || this.state.password === "") {
            return;
        }

        ApiRequester.getInstance().request("auth", ApiRequester.HttpMethods.POST, {email: this.state.email, password: this.state.password}, false, (response: AxiosResponse) => {
            console.log("JWNJDNASJDN");
            console.log(response.data);
            ApiRequester.getInstance().accessToken = response.data.accessToken;
            ApiRequester.getInstance().refreshToken = response.data.refreshToken;
            let data = jwtDecode(response.data.accessToken) as {id: string, email: string};
            console.log("data", data);
            if(response.status === 200) {
                this.props.loginHandler(new UserModel(data.id, data.email))
            }
        });
        
        //TODO handle login
        //let userModel = new UserModel("", this.state.email);
        //this.props.loginHandler(userModel);
    }
}