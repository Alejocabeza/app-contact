import { AUTHFALSE, AUTHTRUE } from "../Types/auth.type";

export const validateAuth = (token) => ({ type: AUTHTRUE, token });

export const unvalidateAuth = () => ({ type: AUTHFALSE });
