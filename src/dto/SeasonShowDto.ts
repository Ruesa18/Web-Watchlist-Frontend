import { EpisodeShowDto } from "./EpisodeShowDto";

export class SeasonShowDto {
    public name: string;
    public number: number;
    public episodes: Array<EpisodeShowDto>

    public constructor(name: string, number: number, episodes: Array<EpisodeShowDto>) {
        this.name = name;
        this.number = number;
        this.episodes = episodes;
    }
}