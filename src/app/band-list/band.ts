import { IVideo } from "./video";

export interface IBand {
    bandname: string;
    path: string;
    videos: IVideo[]
}