import { Link } from "react-router-dom";
import { Flex, Heading, Stack } from "@chakra-ui/react";

export const NavLogin = () => {
	return (
		<>
			<Flex align="center">
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
				color="white"
			>
				<Link to="/register">Sign In</Link>
			</Stack>
		</>
	);
};
