import { Switch, Route } from "react-router-dom";
import PropTypes from "prop-types";
import { NotFound } from "../Pages/404";

export const RouterProvider = ({ children }) => {
	return (
		<Switch>
			{children}
			<Route path="*" component={NotFound} />
		</Switch>
	);
};

RouterProvider.propTypes = {
	children: PropTypes.node.isRequired,
};
