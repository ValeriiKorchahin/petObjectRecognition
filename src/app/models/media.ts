import {CreateUser} from "./createUser";

export interface Media{
  mediaId: number;
  originalMediaUrl: null;
  processedMediaUrl: null;
  createDate: string;
  createUser: [CreateUser]
}
