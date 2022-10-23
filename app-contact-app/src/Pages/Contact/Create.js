import { Button, Flex, FormControl, Heading, Input } from "@chakra-ui/react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { BoxContainers, BoxModal } from "../../Components";
import { helpHttp } from "../../Utils/http.utils";

export const AddContact = () => {
	const [form, setForm] = useState([]);
	const auth = useSelector((state) => state.auth);
	const api = helpHttp();
	const url = "http://localhost:8000/api/v1/contact";
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
				Authorization: auth,
			},
		};
		await api.post(url, opts);
		history.push("/contact/show");
	};

	return (
		<BoxContainers>
			<BoxModal Hopts={{ base: "60%" }} Wopts={{ base: "40%" }}>
				<Heading fontSize="2rem" mb={5}>
					Create Contact
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
								placeholder="Name"
								onChange={handleChange}
							/>
							<Input
								type="email"
								name="email"
								value={form.email}
								placeholder="Email"
								onChange={handleChange}
							/>
							<Input
								colorScheme="green"
								name="phone"
								value={form.phone}
								type="text"
								placeholder="Phone"
								onChange={handleChange}
							/>
							<Input
								colorScheme="green"
								name="alias"
								value={form.password}
								type="text"
								placeholder="Alias"
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
