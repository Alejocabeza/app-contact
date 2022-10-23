import { Avatar, Box, Heading } from "@chakra-ui/react";
import PropTypes from "prop-types";

export const AvatarIcon = ({ name, img }) => {
	return (
		<Box
			display="flex"
			justifyContent="center"
			alignItems="center"
			flexDir="column"
			gap={4}
		>
			<Avatar name={name} src={img} size="2xl" />
			<Heading as="h2" fontSize="1.5rem">
				{name}
			</Heading>
		</Box>
	);
};

AvatarIcon.propTypes = {
	name: PropTypes.node.isRequired,
	img: PropTypes.node.isRequired,
};
