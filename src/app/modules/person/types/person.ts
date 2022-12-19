import {Entity} from "../../../types/entity";
export type Person = Entity<number> &{
    name?: string;
    surname?: string;
    lastname?: string;
    birthday?: string;
    username?: string;
    email?: string;
    password?: string;
    role?: string;
    status?: number;
};