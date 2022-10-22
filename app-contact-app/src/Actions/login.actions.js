import { ISLOGIN, NOTLOGIN } from "../Types/login.type";
export const isTrue = () => ({ type: ISLOGIN });
export const isFalse = () => ({ type: NOTLOGIN });
