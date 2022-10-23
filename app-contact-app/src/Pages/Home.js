import {
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
import { getUser, isTrue, validateAuth } from "../Actions";
import { BoxContainers, BoxModal } from "../Components";
import { helpHttp } from "../Utils";

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
		history.push("/profile/show");
	};

	return (
		<BoxContainers h={{ base: "100vh", md: "78vh" }}>
			<BoxModal
				Wopts={{ base: "80%", md: "40%" }}
				Hopts={{ base: "50%", md: "70%" }}
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
								colorScheme="green"
								variant="outline"
								w="100%"
							>
								Submit
							</Button>
						</Flex>
					</FormControl>
				</form>
			</BoxModal>
		</BoxContainers>
	);
};
