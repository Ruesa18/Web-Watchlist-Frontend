import { MediaShowDto } from "./MediaShowDto";

export class MovieShowDto extends MediaShowDto {

    constructor(uuid: string, name: string, imageUrl: string) {
        super(uuid, name, imageUrl);
    }
}