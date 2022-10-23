import { Box, Button, Flex } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { delUser, isFalse, unvalidateAuth } from "../../Actions";
import {
	AvatarIcon,
	BoxContainers,
	BoxModal,
	InputData,
} from "../../Components";

export const ShowProfile = () => {
	const user = useSelector((state) => state.user);
	const img = "https://i.pravatar.cc/150";
	const history = useHistory();
	const dispatch = useDispatch();

	const handleClose = () => {
		dispatch(delUser());
		dispatch(isFalse());
		dispatch(unvalidateAuth());
		history.push("/");
	};

	return (
		<BoxContainers h={{ base: "100vh", md: "78vh" }}>
			<BoxModal
				Wopts={{ base: "80%", md: "40%" }}
				Hopts={{ base: "50%", md: "85%" }}
			>
				<AvatarIcon name={user.name} img={img} />
				<Box
					w="100%"
					display="flex"
					justifyContent="center"
					flexDir="column"
					gap={{ base: 4 }}
					mt={{ base: 2.5 }}
				>
					<InputData data={user.email} name="Email" />
					<InputData data={user.phone} name="Phone" />
				</Box>
				<Flex
					display="flex"
					justifyContent="center"
					alignItems="center"
					flexDir="row"
					mt={{ base: 5 }}
					gap={2}
				>
					<Button
						variant="outline"
						colorScheme="red"
						onClick={handleClose}
					>
						Close Session
					</Button>
				</Flex>
			</BoxModal>
		</BoxContainers>
	);
};
