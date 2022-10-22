import { getUserReducer } from "./user.reducer";
import { combineReducers } from "redux";
import { authReducer } from "./auth.reducer";
import { loginReducer } from "./login.reducer";

export const reducers = combineReducers({
	auth: authReducer,
	login: loginReducer,
	user: getUserReducer,
});
