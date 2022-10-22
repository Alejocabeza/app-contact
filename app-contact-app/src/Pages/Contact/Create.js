import {
	Box,
	Button,
	Center,
	Flex,
	FormControl,
	Heading,
	Input,
} from "@chakra-ui/react";
import { useState } from "react";
import { BoxContainers } from "../../Components/BoxContainers";

export const AddContact = () => {
	const [form, setForm] = useState([]);

	const handleChange = (e) => {
		setForm({
			...form,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = () => {};

	return (
		<BoxContainers>
			<Box
				w="60%"
				h={{ base: "65%", md: "60%" }}
				bgColor="#00000090"
				borderRadius="10px"
				display="flex"
				flexDirection="column"
				justifyContent="center"
				alignItems="center"
				color="white"
			>
				<Heading fontSize="2rem" mb={5}>
					Create Contact
				</Heading>
				<form onSubmit={handleSubmit}>
					<FormControl>
						<Flex
							alignItems="center"
							justifyContent="center"
							flexDirection="column"
						>
							<Center flexDirection="column" mb={5}>
								<Input
									type="name"
									name="name"
									value={form.name}
									placeholder="Add Your Name"
									onChange={handleChange}
								/>
							</Center>
							<Center flexDirection="column" mb={5}>
								<Input
									type="email"
									name="email"
									value={form.email}
									placeholder="Add Your Email"
									onChange={handleChange}
								/>
							</Center>
							<Center flexDirection="column" mb={5}>
								<Input
									colorScheme="green"
									name="phone"
									value={form.phone}
									type="text"
									placeholder="AddYour Phone"
									onChange={handleChange}
								/>
							</Center>
							<Center flexDirection="column" mb={5}>
								<Input
									colorScheme="green"
									name="password"
									value={form.password}
									type="password"
									placeholder="Add Your Password"
									onChange={handleChange}
								/>
							</Center>
							<Button
								type="submit"
								colorScheme="green"
								variant="outline"
								w="100%"
							>
								Submit
							</Button>
						</Flex>
					</FormControl>
				</form>
			</Box>
		</BoxContainers>
	);
};
