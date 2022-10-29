import { AUTHFALSE, AUTHTRUE } from "../../Types";

export const validateAuth = (token) => ({ type: AUTHTRUE, token });

export const unvalidateAuth = () => ({ type: AUTHFALSE });
