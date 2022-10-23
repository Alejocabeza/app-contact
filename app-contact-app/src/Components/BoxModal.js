import { Box } from "@chakra-ui/react";
import PropTypes from "prop-types";

export const BoxModal = ({ children, Hopts, Wopts }) => {
	return (
		<Box
			w={Wopts}
			h={Hopts}
			bgColor="#00000090"
			borderRadius="10px"
			display="flex"
			flexDirection="column"
			justifyContent="center"
			alignItems="center"
			color="white"
		>
			{children}
		</Box>
	);
};

BoxModal.propTypes = {
	children: PropTypes.array,
	Hopts: PropTypes.object,
	Wopts: PropTypes.object,
};
