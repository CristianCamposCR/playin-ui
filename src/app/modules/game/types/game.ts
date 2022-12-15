import {Entity} from "../../../types/entity";
export type Game = Entity<number> & {
    name: string;
    description: string;
    image?: string;
    price: number;
    status: number;

}