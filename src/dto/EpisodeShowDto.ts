export class EpisodeShowDto {
    public name: string;
    public number: number;

    public constructor(name: string, number: number) {
        this.name = name;
        this.number = number;
    }
}