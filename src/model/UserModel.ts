export class UserModel {
    public uuid: string;
    public email: string;
    public username: string;

    constructor(uuid: string, email: string, username: string) {
        this.uuid = uuid;
        this.email = email;
        this.username = username;
    }
}