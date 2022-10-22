import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Footer } from "../Components/Footer";
import { Navbar } from "../Components/Navbar";
import { NotFound } from "../Pages/404";
import { Home } from "../Pages/Home";
import { Register } from "../Pages/Register";

export const Routes = () => {
	return (
		<Router>
			<Navbar />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/register" component={Register} />
				<Route path="*" component={NotFound} />
			</Switch>
			<Footer />
		</Router>
	);
};
