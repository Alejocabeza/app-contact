import { Button } from "@chakra-ui/react";
import PropTypes from "prop-types";

export const ButtonEvent = ({ content, event, color, size, type }) => {
	return (
		<Button
			variant="outline"
			colorScheme={color}
			onClick={event}
			w={size}
			type={type}
		>
			{content}
		</Button>
	);
};

ButtonEvent.propTypes = {
	content: PropTypes.string,
	event: PropTypes.func,
	color: PropTypes.string,
	size: PropTypes.string,
	type: PropTypes.string,
};
