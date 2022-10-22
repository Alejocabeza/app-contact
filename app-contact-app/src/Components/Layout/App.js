import React from "react";
import { Routes } from "../../Router/Routes";
import { ChakraProvider } from "@chakra-ui/react";

export const App = () => {
	return (
		<ChakraProvider>
			<Routes />
		</ChakraProvider>
	);
};
