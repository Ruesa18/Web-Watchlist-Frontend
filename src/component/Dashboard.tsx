import { AxiosResponse } from "axios";
import React from "react";
import { API_URL } from "../config";
import { ApiRequester } from "../helper/ApiRequester";


type DashboardState = {
    recommendations: Array<Object>,
}

export class Dashboard extends React.Component<{}, DashboardState> {

    constructor(props: Readonly<Object> | Object) {
        super(props);

        this.state = {
            recommendations: []
        }
    }

    componentDidMount() {
        console.log(API_URL);
        this.update();
    }

    update = () => {
        ApiRequester.getInstance().request("user", ApiRequester.HttpMethods.GET, undefined, undefined, (response: AxiosResponse) => {
            console.log(response)
            console.log(response.data);
            this.setState(state => ({recommendations: response.data}));
        });
    }

    render() {
        return (
            <div>
                <button onClick={this.update}>Refresh</button>
                <h1>Lul</h1>
                <code><pre>{JSON.stringify(this.state.recommendations)}</pre></code>
            </div>
        );
    }
}