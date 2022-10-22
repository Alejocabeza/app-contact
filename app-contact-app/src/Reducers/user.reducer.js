import { USERFALSE, USERTRUE } from "../Types";

export const getUserReducer = (state = {}, action) => {
	switch (action.type) {
		case USERTRUE:
			return (state = action.user);
		case USERFALSE:
			return (state = {});
		default:
			return state;
	}
};
