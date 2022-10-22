import { USERTRUE } from "../Types/user.type";

export const getUserReducer = (state = {}, action) => {
	switch (action.type) {
		case USERTRUE:
			return (state = action.user);
		default:
			return state;
	}
};
