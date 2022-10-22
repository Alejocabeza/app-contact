import { AUTHFALSE, AUTHTRUE } from "../Types/auth.type";

export const authReducer = (state = false, action) => {
	switch (action.type) {
		case AUTHTRUE:
			return (state = action.token);
		case AUTHFALSE:
			return (state = false);
		default:
			return state;
	}
};
