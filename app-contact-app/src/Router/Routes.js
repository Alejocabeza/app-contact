import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { Footer } from "../Components/Layout/Footer";
import { Navbar } from "../Components/Layout/Navbar";
import { RouterProvider } from "../Components/RouterProvider";
import { Home } from "../Pages/Home";
import { Register } from "../Pages/Register";
import { useSelector } from "react-redux";
import { Contact } from "../Pages/Contact";

export const Routes = () => {
	const login = useSelector((state) => state.login);
	return (
		<Router>
			<Navbar />
			<RouterProvider>
				<Route exact path="/" component={Home} />
				<Route exact path="/register" component={Register} />
				<Route
					exact
					path="/contact"
					render={() => {
						return login ? <Contact /> : <Redirect to="/" />;
					}}
				/>
			</RouterProvider>
			<Footer />
		</Router>
	);
};
