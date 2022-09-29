import {Person} from "./person";

export interface CreateUser{
  userId: number;
  username: string;
  password: string;
  createDate: string;
  role: string;
  person: Person
}
