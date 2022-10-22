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
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { validateAuth } from "../Actions/auth.actions";
import { isTrue } from "../Actions/login.actions";
import { getUser } from "../Actions/user.actions";
import { BoxContainers } from "../Components/BoxContainers";
import { helpHttp } from "../Utils/http.utils";

export const Home = () => {
	const dispatch = useDispatch();
	const api = helpHttp();
	const url = "http://localhost:8000/api/v1/auth/login";
	const [form, setForm] = useState([]);
	const history = useHistory();

	const handleChange = (e) => {
		setForm({
			...form,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const opts = {
			body: form,
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
		};
		const res = await api.post(url, opts);
		const token = await res.token;
		const user = await res.user;
		dispatch(validateAuth(token));
		dispatch(isTrue());
		dispatch(getUser(user));
		history.push("/contact");
	};

	return (
		<BoxContainers>
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
		</BoxContainers>
	);
};
