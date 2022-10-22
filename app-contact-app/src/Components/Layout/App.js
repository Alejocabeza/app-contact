import React from "react";
import { Routes } from "../../Router/index";
import { ChakraProvider } from "@chakra-ui/react";

export const App = () => {
	return (
		<ChakraProvider>
			<Routes />
		</ChakraProvider>
	);
};
