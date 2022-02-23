import React from "react";
import { AxiosResponse } from "axios";
import { API_URL } from "../config";
import { MovieShowDto } from "../dto/MovieShowDto";
import { ApiRequester } from "../helper/ApiRequester";
import '../css/MovieOverview.css';


type MovieOverviewState = {
    movies: Array<MovieShowDto>,
    error: String,
    info: String
}

export class MovieOverview extends React.Component<{}, MovieOverviewState> {

    constructor(props: Readonly<Object> | Object) {
        super(props);

        this.state = {
            movies: [],
            error: "",
            info: ""
        }
    }

    componentDidMount() {
        console.log(API_URL);
        this.update();
    }

    update = () => {
        this.setState(() => ({movies: [], error: "", info: ""}));
        ApiRequester.getInstance().request("movie", ApiRequester.HttpMethods.GET, undefined, undefined, (response: AxiosResponse) => {
            if(response) {
                let movies = response.data.map((movie: { uuid: string, name: string; imageUrl: string }) => {
                    return new MovieShowDto(movie.uuid, movie.name, movie.imageUrl);
                });
                
                this.setState(() => ({movies: movies}));
                
                if(movies.length == 0) {
                    this.setState(() => ({info: "No movies found"}));
                }
            }
        }).catch((error) => {
            console.error(error);
            this.setState(() => ({error: "API not reachable"}))
        });
    }

    render() {
        return (
            <div>
                <button onClick={this.update}>Refresh</button>
                <a href="/create-movie"><button>Add a movie</button></a>
                <h1>Movies</h1>

                <section>
                    {this.state.error !== "" ?
                        <div className="messages error">{this.state.error}</div>
                    : this.state.info !== "" ? 
                        <div className="messages info">No movies found</div>
                    : Array.isArray(this.state.movies) && this.state.movies.length > 0 ? this.state.movies.map((movie, index) => (
                        <div className="movie-cards" key={index}>
                            <h5>{movie.name}</h5>
                            <img src={movie.imageUrl} alt="{movie.name}" />
                        </div>
                    )): 
                        <div className="loading">Loading...</div>
                    }
                </section>
            </div>
        );
    }
}