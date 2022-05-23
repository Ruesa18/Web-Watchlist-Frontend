import { MediaShowDto } from "./MediaShowDto";
import { SeasonShowDto } from "./SeasonShowDto";

export class SeriesShowDto extends MediaShowDto {
    public seasons: Array<SeasonShowDto>

    constructor(uuid: string, name: string, imageUrl: string, seasons: Array<SeasonShowDto>) {
        super(uuid, name, imageUrl);
        this.seasons = seasons;
    }
}