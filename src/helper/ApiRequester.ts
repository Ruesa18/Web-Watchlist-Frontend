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

    private constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    async request(urlExtension: string, method: ApiRequester.HttpMethods, data: Object|undefined = undefined, loginNeeded: boolean = true, callback: Function) {
        let response;

        switch(method) {
            case ApiRequester.HttpMethods.GET:
                response = await axios.get(this.baseUrl + urlExtension, data).catch((error) => {
                    throw error;
                });
                callback(response);
                break;
            case ApiRequester.HttpMethods.POST:
                response = await axios.post(this.baseUrl + urlExtension, data).catch((error) => {
                    throw error;
                });
                callback(response);
                break;
            default:
                throw new Error("Unhandled HTTP-Method");
        }
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