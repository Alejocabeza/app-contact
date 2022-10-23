import { useSelector } from "react-redux";
import {
	BrowserRouter as Router,
	Redirect,
	Route,
	Switch,
} from "react-router-dom";
import { Footer, Navbar } from "../Components";
import {
	AddContact,
	EditContact,
	Home,
	NotFound,
	Register,
	ShowContact,
	ShowProfile,
} from "../Pages";

export const Routes = () => {
	const login = useSelector((state) => state.login);
	return (
		<Router>
			<Navbar />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/register" component={Register} />
				<Route
					exact
					path="/contact/show"
					render={() => {
						return login ? <ShowContact /> : <Redirect to="/" />;
					}}
				/>
				<Route
					exact
					path="/contact/create"
					render={() => {
						return login ? <AddContact /> : <Redirect to="/" />;
					}}
				/>
				<Route
					exact
					path="/profile/show"
					render={() => {
						return login ? <ShowProfile /> : <Redirect to="/" />;
					}}
				/>
				<Route
					exact
					path="/contact/edit/:id"
					render={() => {
						return login ? <EditContact /> : <Redirect to="/" />;
					}}
				/>
				<Route path="*" component={NotFound} />
			</Switch>
			<Footer />
		</Router>
	);
};
