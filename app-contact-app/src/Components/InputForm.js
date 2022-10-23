import { Input } from "@chakra-ui/react";
import PropTypes from "prop-types";

export const InputForm = ({ name, state, type, content, event }) => {
	return (
		<Input
			name={name}
			value={state}
			type={type}
			placeholder={content}
			onChange={event}
		/>
	);
};

InputForm.propTypes = {
	name: PropTypes.string,
	state: PropTypes.node,
	type: PropTypes.string,
	content: PropTypes.string,
	event: PropTypes.func,
};
