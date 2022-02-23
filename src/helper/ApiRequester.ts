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
                let response = await axios.get(this.baseUrl + urlExtension, data).catch((error) => {
                    throw error;
                });
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
            }).catch((error) => {
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                  } else if (error.request) {
                    // The request was made but no response was received
                    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                    // http.ClientRequest in node.js
                    console.log(error.request);
                  } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log('Error', error.message);
                  }
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