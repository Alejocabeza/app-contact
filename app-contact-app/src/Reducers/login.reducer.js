import { ISLOGIN, NOTLOGIN } from "../Types";

export const loginReducer = (state = false, action) => {
	switch (action.type) {
		case ISLOGIN:
			return (state = true);
		case NOTLOGIN:
			return (state = false);
		default:
			return state;
	}
};
