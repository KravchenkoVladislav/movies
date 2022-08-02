import { INetwork } from "./INetwork";
import { IMedia } from "./IMedia";
import { IRating } from "./IRating";

export interface IShow {
    id: string;
    genres: string[];
    name: string;
    network: INetwork;
    image: IMedia;
    summary: string;
    language: string;
    premiered: string;
    rating: IRating;
}