import {Entity} from "../../../types/entity";
import {Person} from "../../person/types/person";
export type User = Entity<number> & {
    username: string;
    email: string;
    password: string;
    role: string;
    status: number;
    person?: Person;
}