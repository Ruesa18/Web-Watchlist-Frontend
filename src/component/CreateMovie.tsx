import { AxiosResponse } from "axios";
import React, { useState } from "react";
import { API_URL } from "../config";
import { MovieCreateDto } from "../dto/MovieCreateDto";
import { ApiRequester } from "../helper/ApiRequester";


type CreateMovieState = {
    name: string
}

export class CreateMovie extends React.Component<{}, CreateMovieState> {

    constructor(props: Readonly<Object> | Object) {
        super(props);

        this.state = {
            name: ""
        }
    }

    componentDidMount() {
        console.log(API_URL);
        this.update();
    }

    update = () => {
        /*ApiRequester.getInstance().request("user", ApiRequester.HttpMethods.GET, undefined, undefined, (response: AxiosResponse) => {
            console.log(response)
            console.log(response.data);
            this.setState(() => ({recommendations: response.data}));
        });*/
    }

    submit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(this.state.name);
        if(this.state.name.length > 3) {
            ApiRequester.getInstance().request("movie", ApiRequester.HttpMethods.POST, new MovieCreateDto(this.state.name), undefined, (response: AxiosResponse) => {
                console.log(response)
                console.log(response.data);
            });
        }
    }

    render() {
        return (
            <div>
                <h2>Add a new movie</h2>
                <form onSubmit={this.submit}>
                    <input type="text" placeholder="Movie Name" minLength={3} maxLength={255} onChange={(e) => this.setState({name: e.target.value})} />
                    <input type="submit" value="Add movie" />
                </form>
            </div>
        );
    }
}