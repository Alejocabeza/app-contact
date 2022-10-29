import { ISLOGIN, NOTLOGIN } from "../../Types";

export const isTrue = () => ({ type: ISLOGIN });
export const isFalse = () => ({ type: NOTLOGIN });
