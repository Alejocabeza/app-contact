export const authReducer = (state = false, action) => {
	switch (action.type) {
		case "auth/validate":
			return (state = true);
		case "auth/unvalidate":
			return (state = false);
		default:
			return state;
	}
};
