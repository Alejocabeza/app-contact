import { Box } from "@chakra-ui/react";
import React from "react";

export const Footer = () => {
	return (
		<Box
			bgColor="#000"
			align="center"
			opacity={1}
			fontSize="sm"
			h="45px"
			display="flex"
			justifyContent="center"
			alignItems="center"
			color="white"
		>
			&copy; {new Date().getFullYear()} App-contact. All Rights Reserved.
		</Box>
	);
};
