import React from "react";
import { AxiosResponse } from "axios";
import { API_URL } from "../config";
import { MovieShowDto } from "../dto/MovieShowDto";
import { ApiRequester } from "../helper/ApiRequester";
import { SeriesShowDto } from "../dto/SeriesShowDto";
import '../css/MovieOverview.css';


type FavoritesOverviewState = {
    medias: Array<MovieShowDto|SeriesShowDto>,
    error: String,
    info: String
}

export class FavoritesOverview extends React.Component<{}, FavoritesOverviewState> {

    constructor(props: Readonly<Object> | Object) {
        super(props);
        this.state = {
            medias: [],
            error: "",
            info: ""
        }
    }

    componentDidMount() {
        console.log(API_URL);
        this.update();
    }

    update = () => {
        this.setState(() => ({medias: [], error: "", info: ""}));
        
        //TODO Implement a way to use the userId after login
        let userId = "e56be577-e75e-484d-932d-a9311e30d2d0";
        ApiRequester.getInstance().request(`user/${userId}/favorites`, ApiRequester.HttpMethods.GET, undefined, undefined, (response: AxiosResponse) => {
            if(response) {
                let movies = response.data.map((movie: { uuid: string, name: string; imageUrl: string }) => {
                    return new MovieShowDto(movie.uuid, movie.name, movie.imageUrl);
                });
                
                this.setState(() => ({medias: movies}));
                
                if(movies.length === 0) {
                    this.setState(() => ({info: "No favorite movies found"}));
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
                <h1>Favorites</h1>

                <section>
                    {this.state.error !== "" ?
                        <div className="messages error">{this.state.error}</div>
                    : this.state.info !== "" ? 
                        <div className="messages info">No movies found</div>
                    : Array.isArray(this.state.medias) && this.state.medias.length > 0 ? this.state.medias.map((media, index) => (
                        <div className="movie-cards" key={index}>
                            <h5>{media.name}</h5>
                            <img src={media.imageUrl} alt="{movie.name}" />
                        </div>
                    )): 
                        <div className="loading">Loading...</div>
                    }
                </section>
            </div>
        );
    }
}