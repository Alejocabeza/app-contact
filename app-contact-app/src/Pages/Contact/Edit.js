import { Avatar, Box, Flex, FormControl, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { BoxContainers, BoxModal, ButtonEvent } from "../../Components";
import { InputForm } from "../../Components/InputForm";
import { helpHttp, utilsOpts } from "../../Utils";

export const EditContact = () => {
	const [contact, setContact] = useState([]);
	const [form, setForm] = useState([]);
	const auth = useSelector((state) => state.auth);
	const { id } = useParams();
	console.log(id);
	const url = `http://localhost:8000/api/v1/contact/${id}`;
	const api = helpHttp();
	const history = useHistory();

	useEffect(() => {
		const getOneController = async (url) => {
			const opts = utilsOpts(undefined, auth);
			const res = await fetch(url, opts);
			const data = await res.json();
			data.forEach((el) => {
				if (el._id === id) {
					setContact(el);
				}
			});
		};
		getOneController(url);
	}, [id]);

	const handleChange = (e) => {
		setForm({
			...form,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const opts = utilsOpts(form, auth);
		await api.put(url, opts);
		history.push("/contact/show");
	};

	const handleDelete = async (e) => {
		e.preventDefault();
		const opts = utilsOpts(undefined, auth);
		await api.del(url, opts);
		history.push("/contact/show");
	};

	return (
		<BoxContainers>
			<BoxModal Hopts={{ base: "80%" }} Wopts={{ base: "60%" }} p={20}>
				<Box
					w="100%"
					display="flex"
					justifyContent="center"
					alignItems="center"
					flexDir="column"
					mb={4}
				>
					<Avatar
						name={contact.name}
						size="2xl"
						src="https://i.pravatar.cc/150"
						border="5px solid green"
					/>
					<Heading fontSize={30} mt={5}>
						{contact.name}
					</Heading>
				</Box>
				<Box
					w="100%"
					display="flex"
					justifyContent="center"
					alignItems="center"
					flexDir="column"
				>
					<form onSubmit={handleSubmit}>
						<FormControl>
							<Flex
								alignItems="center"
								justifyContent="center"
								flexDirection="column"
								gap={2}
							>
								<InputForm
									name="name"
									state={form.name}
									type="text"
									content={contact.name}
									event={handleChange}
								/>
								<InputForm
									name="email"
									state={form.email}
									type="email"
									content={contact.email}
									event={handleChange}
								/>
								<InputForm
									name="phone"
									state={form.phone}
									type="phone"
									content={contact.phone}
									event={handleChange}
								/>
								<InputForm
									name="alias"
									state={form.alias}
									type="text"
									content={contact.alias}
									event={handleChange}
								/>
							</Flex>
							<Box
								display="flex"
								justifyContent="center"
								alignItems="center"
								gap={2}
								mt={5}
							>
								<ButtonEvent
									content="Submit"
									color="green"
									size="100px"
									type="submit"
								/>
								<ButtonEvent
									content="Delete"
									color="red"
									size="100px"
									event={handleDelete}
								/>
							</Box>
						</FormControl>
					</form>
				</Box>
			</BoxModal>
		</BoxContainers>
	);
};
