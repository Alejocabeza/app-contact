import { Box } from "@chakra-ui/react";
import PropTypes from "prop-types";

export const BoxContainers = ({ children }) => {
	return (
		<Box
			w="100vw"
			h="82.1vh"
			display="flex"
			flexDirection="column"
			justifyContent="center"
			alignItems="center"
			bgImage="url('https://images.pexels.com/photos/3473569/pexels-photo-3473569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"
			bgPosition="center"
			bgSize={{ base: "cover", md: "cover" }}
			bgRepeat="no-repeat"
		>
			{children}
		</Box>
	);
};

BoxContainers.propTypes = {
	children: PropTypes.node.isRequired,
};
