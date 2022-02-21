export class MovieShowDto {
    public uuid: string;
    public name: string;
    public imageUrl: string;

    constructor(uuid: string, name: string, imageUrl: string) {
        this.uuid = uuid;
        this.name = name;
        this.imageUrl = imageUrl;
    }
}