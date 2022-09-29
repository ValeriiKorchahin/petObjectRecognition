import {Person} from "./person";

export interface UpdateUser{
  userId: number;
  username: string;
  password: string;
  createDate: string;
  role: string;
  person: Person
}
