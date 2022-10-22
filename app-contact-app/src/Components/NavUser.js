import { Flex, Heading } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const NavUser = () => {
	const user = useSelector((state) => state.user);
	return (
		<>
			<Flex align="center">
				<Link to="/dashboard">
					<a>
						<Heading
							as="h1"
							size="lg"
							letterSpacing={"tighter"}
							color="white"
						>
							{user.name}
						</Heading>
					</a>
				</Link>
			</Flex>
			{/* <Stack
				direction={{ base: "column", md: "row" }}
				display={{ base: "none", md: "flex" }}
				width="50%"
				justifyContent="end"
				flexGrow={1}
				alignItems="center"
				color="white"
			>
			</Stack> */}
		</>
	);
};
