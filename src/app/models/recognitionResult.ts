import {MlModel} from "./mlModel";
import {Media} from "./media";
import {MlLocation} from "./mlLocation";
import {CreateUser} from './createUser'
import {UpdateUser} from "./updateUser";

export interface RecognitionResult {
  content: [],
  recognitionResultId: number,
  description: string,
  isObjectPresent: number,
  isRecognitionCorrect: number,
  createDate: string,
  updateDate: string,
  mlModel: MlModel,
  media: Media,
  location: MlLocation,
  createUser: CreateUser,
  updateUser: UpdateUser

}


