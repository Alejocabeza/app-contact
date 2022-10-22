import { USERFALSE, USERTRUE } from "../Types";

export const getUser = (user) => ({ type: USERTRUE, user });
export const delUser = () => ({ type: USERFALSE });
