import { WrapItem } from "@chakra-ui/react";
import PropTypes from "prop-types";

export const ItemNav = ({ children }) => {
	return (
		<WrapItem display="flex" justifyContent="center" alignItems="center">
			{children}
		</WrapItem>
	);
};

ItemNav.propTypes = {
	children: PropTypes.node.isRequired,
};
