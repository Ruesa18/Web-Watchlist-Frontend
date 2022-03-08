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
            this.setState(() => ({recommendations: response.data}));
        });
    }

    render() {
        return (
            <div>
                <h1>WWL - The Web Watchlist</h1>
                <h4>Put movies and series on your watchlist and keep track of your progress</h4>
                <code><pre>{JSON.stringify(this.state.recommendations)}</pre></code>
            </div>
        );
    }
}