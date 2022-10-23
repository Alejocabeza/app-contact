import { Button, Flex, FormControl, Heading, Input } from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getUser, isTrue, validateAuth } from "../Actions";
import { BoxContainers, BoxModal } from "../Components";
import { helpHttp } from "../Utils";

export const Register = () => {
	const dispatch = useDispatch();
	const api = helpHttp();
	const url = "http://localhost:8000/api/v1/auth/register";
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
		history.push("/contact/show");
	};

	return (
		<BoxContainers h={{ base: "100vh", md: "78vh" }}>
			<BoxModal
				Wopts={{ base: "80%", md: "40%" }}
				Hopts={{ base: "50%", md: "85%" }}
			>
				<Heading fontSize="2rem" mb={5}>
					Sign In
				</Heading>
				<form onSubmit={handleSubmit}>
					<FormControl>
						<Flex
							alignItems="center"
							justifyContent="center"
							flexDirection="column"
							gap={5}
						>
							<Input
								type="name"
								name="name"
								value={form.name}
								placeholder="Add Your Name"
								onChange={handleChange}
							/>
							<Input
								type="email"
								name="email"
								value={form.email}
								placeholder="Add Your Email"
								onChange={handleChange}
							/>
							<Input
								colorScheme="green"
								name="phone"
								value={form.phone}
								type="text"
								placeholder="AddYour Phone"
								onChange={handleChange}
							/>
							<Input
								colorScheme="green"
								name="password"
								value={form.password}
								type="password"
								placeholder="Add Your Password"
								onChange={handleChange}
							/>
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
