import { Avatar, Box, GridItem, Heading } from "@chakra-ui/react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import { BoxModal } from "./BoxModal";
import { ButtonEvent } from "./ButtonEvent";

export const BoxCards = ({ data }) => {
	const history = useHistory();
	const id = data._id;

	const handleEdit = (e) => {
		e.preventDefault();
		history.push(`/contact/edit/${id}`);
	};

	const handleDelete = (e) => {
		e.preventDefault();
	};

	return (
		<GridItem w={{ base: "100%" }} h={{ base: "100%" }} p={3}>
			<BoxModal Hopts={{ base: "100%" }} Wopts={{ base: "100%" }} p={20}>
				<Box
					display="flex"
					justifyContent="space-between"
					alignItems="center"
					flexDir="row"
					w="100%"
					h="100%"
					p={10}
				>
					<Box
						display="flex"
						justifyContent="center"
						alignItems="center"
						gap={5}
					>
						<Box
							display="flex"
							justifyContent="center"
							alignItems="center"
							flexDir="column"
							mb={4}
						>
							<Avatar
								name={data.name}
								size="2xl"
								src="https://i.pravatar.cc/150"
								border="3px solid green"
							/>
						</Box>
						<Box
							display="flex"
							justifyContent="center"
							alignItems="start"
							flexDir="column"
						>
							<Heading fontSize={15} mt={2}>
								Name: {data.name}
							</Heading>
							<Heading fontSize={15} mt={2}>
								Alias: {data.alias}
							</Heading>
							<Heading fontSize={15} mt={2}>
								Email: {data.email}
							</Heading>
							<Heading fontSize={15} mt={2}>
								Phone: {data.phone}
							</Heading>
						</Box>
					</Box>
					<Box
						display="flex"
						justifyContent="center"
						alignItems="start"
						flexDir="column"
						gap={2}
					>
						<ButtonEvent
							content="Edit"
							color="green"
							size="100px"
							event={handleEdit}
						/>
						<ButtonEvent
							content="Delete"
							color="red"
							size="100px"
							event={handleDelete}
						/>
					</Box>
				</Box>
			</BoxModal>
		</GridItem>
	);
};

BoxCards.propTypes = {
	data: PropTypes.object,
};
