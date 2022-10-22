import {
	Box,
	Button,
	Center,
	Flex,
	FormControl,
	Heading,
	Input,
} from "@chakra-ui/react";
import React, { useState } from "react";

export const Home = () => {
	const [form, setForm] = useState([]);

	const handleChange = (e) => {
		setForm({
			...form,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
	};

	return (
		<Box
			w="100vw"
			h="88vh"
			display="flex"
			flexDirection="column"
			justifyContent="center"
			alignItems="center"
			bgImage="url('https://images.pexels.com/photos/3473569/pexels-photo-3473569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"
			bgPosition="center"
			bgSize={{ base: "cover", md: "cover" }}
			bgRepeat="no-repeat"
		>
			<Box
				w="50%"
				h={{ base: "30%", md: "60%" }}
				bgColor="#00000090"
				borderRadius="10px"
				display="flex"
				flexDirection="column"
				justifyContent="center"
				alignItems="center"
				color="white"
			>
				<Heading fontSize="2rem" mb={5}>
					Login
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
									type="email"
									name="email"
									value={form.email}
									placeholder="Email Address"
									onChange={handleChange}
								/>
							</Center>
							<Center flexDirection="column" mb={5}>
								<Input
									colorScheme="green"
									name="password"
									value={form.password}
									type="password"
									placeholder="Password"
									onChange={handleChange}
								/>
							</Center>
							<Button
								type="submit"
								colorScheme="gree"
								variant="outline"
								w="100%"
							>
								Submit
							</Button>
						</Flex>
					</FormControl>
				</form>
			</Box>
		</Box>
	);
};
