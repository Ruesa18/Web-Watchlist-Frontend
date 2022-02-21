import axios from "axios";
import { API_URL } from "../config";

export class ApiRequester {
    baseUrl: string;
    refreshToken: string = "";
    accessToken: string = "";

    private static _instance: ApiRequester;

    public static getInstance(baseUrl: string = API_URL) {
        return this._instance || (this._instance = new this(baseUrl));
    }

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    async request(urlExtension: string, method: ApiRequester.HttpMethods, data: Object|undefined = undefined, loginNeeded: boolean = true, callback: Function) {
        switch(method) {
            case ApiRequester.HttpMethods.GET:
                let response = await axios.get(this.baseUrl + urlExtension, data);
                callback(response);
                break;
            default:
                throw new Error("Unhandled HTTP-Method");
        }
    }

    private authenticate(username: string, password: string) {
        return axios.post(this.baseUrl + "auth", {
                username,
                password,
            }).then((response) => {
                if (response.data.accessToken) {
                    localStorage.setItem("user", JSON.stringify(response.data));
                }

                return response.data;
            });
    }
}

export namespace ApiRequester {
    export enum HttpMethods {
        GET,
        POST,
        PUT,
        DELETE
    }
}