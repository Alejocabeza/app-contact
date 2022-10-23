import { Box, Grid, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { BoxCards, BoxContainers, ButtonEvent } from "../../Components";
import { utilsOpts } from "../../Utils";

export const ShowContact = () => {
	const auth = useSelector((state) => state.auth);
	const [contact, setContact] = useState([]);
	const url = "http://localhost:8000/api/v1/contact";
	const history = useHistory();
	const opts = utilsOpts(undefined, auth);

	useEffect(() => {
		const getContact = async (url) => {
			const data = await fetch(url, opts);
			const res = await data.json();
			setContact(res);
		};
		getContact(url);
	}, []);

	const handleCreate = () => {
		history.push("/contact/create");
	};

	return (
		<BoxContainers h={{ base: "100vh", md: "78vh" }}>
			{contact.length > 0 ? (
				<Grid
					w="100%"
					h="100%"
					templateColumns={{
						base: "repeat(1, 1fr)",
					}}
					placeContent="center"
				>
					{contact.map((item) => {
						return <BoxCards key={item.id} data={item} />;
					})}
				</Grid>
			) : (
				<Box
					display="flex"
					justifyContent="center"
					alignItems="center"
					flexDir="column"
					gap={2}
				>
					<Heading color="white" fontSize="2rem">
						Without Contact
					</Heading>
					<ButtonEvent
						content="Add New"
						color="green"
						event={handleCreate}
					/>
				</Box>
			)}
		</BoxContainers>
	);
};
