import {CreateUser} from "./createUser";

export interface MlModel{
mlModelId: number;
modelName: string;
modelPath: null;
isCustom: number;
isActive: number;
createDate: string;
createUser: [CreateUser]
}
