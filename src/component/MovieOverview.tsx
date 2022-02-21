import React from "react";
import { AxiosResponse } from "axios";
import { API_URL } from "../config";
import { MovieShowDto } from "../dto/MovieShowDto";
import { ApiRequester } from "../helper/ApiRequester";
import '../css/MovieOverview.css';


type MovieOverviewState = {
    movies: Array<MovieShowDto>,
}

export class MovieOverview extends React.Component<{}, MovieOverviewState> {

    constructor(props: Readonly<Object> | Object) {
        super(props);

        this.state = {
            movies: []
        }
    }

    componentDidMount() {
        console.log(API_URL);
        this.update();
    }

    update = () => {
        ApiRequester.getInstance().request("movie", ApiRequester.HttpMethods.GET, undefined, undefined, (response: AxiosResponse) => {
            console.log(response)
            console.log(response.data);
            let movies = response.data.map((movie: { uuid: string, name: string; imageUrl: string }) => {
                return new MovieShowDto(movie.uuid, movie.name, movie.imageUrl);
            });
            console.log(movies);
            
            this.setState(state => ({movies: movies}));
        });
    }

    render() {
        return (
            <div>
                <button onClick={this.update}>Refresh</button>
                <h1>Movies</h1>

                <section>
                    {this.state.movies.map((movie, index) => (
                        <div className="movie-cards" key={index}>
                            <h5>{movie.name}</h5>
                            <img src={movie.imageUrl} />
                        </div>
                    ))}
                </section>
            </div>
        );
    }
}