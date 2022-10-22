import { Avatar, Flex, Heading, Stack, Wrap } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ItemNav } from "./ItemNav";

export const NavUser = () => {
	const user = useSelector((state) => state.user);
	return (
		<>
			<Flex align="center">
				<Link to="/profile/show">
					<a>
						<Heading
							as="h1"
							size="lg"
							letterSpacing={"tighter"}
							color="white"
						>
							Hi {user.name}!
						</Heading>
					</a>
				</Link>
			</Flex>
			<Stack
				direction={{ base: "column", md: "row" }}
				display={{ base: "flex", md: "flex" }}
				width="50%"
				justifyContent="end"
				flexGrow={1}
				alignItems={{ base: "end" }}
				color="white"
			>
				<Wrap display="flex" justifyContent="center" alignItems="end">
					<ItemNav>
						<Link to="/contact/show">Contacts</Link>
					</ItemNav>
					<ItemNav>
						<Avatar
							name={user.name}
							src="https://i.pravatar.cc/150"
							size="sm"
						/>
					</ItemNav>
				</Wrap>
			</Stack>
		</>
	);
};
