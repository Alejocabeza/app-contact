import { Box, Heading } from "@chakra-ui/react";
import { BoxContainers } from "../Components/BoxContainers";

export const NotFound = () => {
	return (
		<BoxContainers>
			<Box>
				<Heading as="h1">Not Found</Heading>
			</Box>
		</BoxContainers>
	);
};
