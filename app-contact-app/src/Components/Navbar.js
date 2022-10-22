import { Link } from "react-router-dom";
import {
	Box,
	Container,
	Flex,
	Heading,
	Stack,
	useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

export const Navbar = () => {
	return (
		<Box
			position="sticky"
			as="nav"
			maxW="100vw"
			bg={useColorModeValue("#ffffff40", "#20202380")}
			css={{ backdropFilter: "blur(10px)" }}
			zIndex={2}
			bgColor="#000"
		>
			<Container
				display="flex"
				flexDirection="row"
				p={2}
				maxW={{ base: "100%", md: "100%" }}
				alignItems="center"
				justifyContent="space-between"
			>
				<Flex align="center" ml={2}>
					<Link to="/">
						<a>
							<Heading
								as="h1"
								size="lg"
								letterSpacing={"tighter"}
								color="white"
							>
								Contact App
							</Heading>
						</a>
					</Link>
				</Flex>
				<Stack
					direction={{ base: "column", md: "row" }}
					display={{ base: "none", md: "flex" }}
					width="50%"
					justifyContent="end"
					flexGrow={1}
					alignItems="center"
					mr={2}
					color="white"
				>
					<Link to="/register">Sign In</Link>
				</Stack>
			</Container>
		</Box>
	);
};
