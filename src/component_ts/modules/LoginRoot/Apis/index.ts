import { ajax } from "../../../../utils";
import {RequestBaseURL} from "../config";

export const GetLoginUserInfo = (userId: string): Promise<any> => {
    return ajax({
        url: `${RequestBaseURL}/home/userSig`,
        type: 'POST',
        dataType: 'json',
        data: { userId: userId, terminalCode: 1 }
    });
}
