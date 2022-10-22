import { Box, Button, Flex } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { delUser, isFalse, unvalidateAuth } from "../../Actions";
import { AvatarIcon } from "../../Components";
import { InputData } from "../../Components";
import { BoxContainers } from "../../Components/BoxContainers";

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
		<BoxContainers>
			<Box
				w="80%"
				h={{ base: "80%", md: "80%" }}
				bgColor="#00000090"
				borderRadius="10px"
				display="flex"
				flexDirection="column"
				justifyContent="space-evenly"
				alignItems="center"
				color="white"
			>
				<AvatarIcon name={user.name} img={img} />
				<Box
					w="100%"
					display="flex"
					justifyContent="center"
					flexDir="column"
					gap={3}
				>
					<InputData data={user.email} name="Email" />
					<InputData data={user.phone} name="Phone" />
				</Box>
				<Flex
					display="flex"
					justifyContent="center"
					alignItems="center"
					flexDir="row"
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
			</Box>
		</BoxContainers>
	);
};
