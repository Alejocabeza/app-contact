import { Box } from "@chakra-ui/react";
import { BoxContainers } from "./BoxContainers";
import PropTypes from "prop-types";

export const BoxModal = ({ children }) => {
	return (
		<Box
			w="50%"
			h={{ base: "50%", md: "60%" }}
			bgColor="#00000090"
			borderRadius="10px"
			display="flex"
			flexDirection="column"
			justifyContent="center"
			alignItems="center"
			color="white"
		>{children}</Box>
	);
}

BoxModal.propTypes = {
	children: PropTypes.node.isRequired,
};
