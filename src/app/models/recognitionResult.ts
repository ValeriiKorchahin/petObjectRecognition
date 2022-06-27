import {MlModel} from "./mlModel";
import {Media} from "./media";
import {MlLocation} from "./mlLocation";

export interface RecognitionResult{
  recognitionResultId: number;
  description: string;
  isObjectPresent: number;
  isRecognitionCorrect: number;
  createDate: string
  updateDate: string;
  mlModel:[MlModel];
  media: [Media]
  location: [MlLocation]
}
