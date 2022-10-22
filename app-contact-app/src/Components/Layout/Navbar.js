import { Box, Container, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { NavLogin } from "../NavLogin";
import { NavUser } from "../NavUser";

export const Navbar = () => {
	const login = useSelector((state) => state.login);
	return (
		<Box
			position="sticky"
			as="nav"
			maxW="100vw"
			bg={useColorModeValue("#ffffff40", "#20202380")}
			css={{ backdropFilter: "blur(10px)" }}
			zIndex={2}
			bgColor="#000"
			h="100px"
			display="flex"
			justifyContent="center"
			alignItems="center"
		>
			<Container
				display="flex"
				flexDirection="row"
				p={2}
				maxW={{ base: "100%", md: "100%" }}
				alignItems="center"
				justifyContent="space-between"
				ml={20}
				mr={20}
			>
				{login ? <NavUser /> : <NavLogin />}
			</Container>
		</Box>
	);
};
