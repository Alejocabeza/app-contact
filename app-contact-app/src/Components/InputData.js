import { Box, Flex, Heading } from "@chakra-ui/react";
import PropTypes from "prop-types";

export const InputData = ({ data, name }) => {
	return (
		<Flex
			w="100%"
			display="flex"
			justifyContent="center"
			alignItems="center"
		>
			<Box
				h={8}
				w="60%"
				border="1px solid white"
				borderRadius="20px"
				display="flex"
				flexDir="row"
				justifyContent="space-evenly"
				alignItems="center"
				overflow="hidden"
			>
				<Box
					w="20%"
					borderRight="1px solid white"
					h="100%"
					display="flex"
					justifyContent="center"
					alignItems="center"
				>
					<Heading as="h6" fontSize={13} mr="20px">
						{name}
					</Heading>
				</Box>
				<Box
					w="65%"
					h="100%"
					display="flex"
					justifyContent="center"
					alignItems="center"
				>
					<Heading as="h6" fontSize={13} mr="20px">
						{data}
					</Heading>
				</Box>
			</Box>
		</Flex>
	);
};

InputData.propTypes = {
	data: PropTypes.node.isRequired,
	name: PropTypes.node.isRequired,
};
