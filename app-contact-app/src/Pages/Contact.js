import { Grid, GridItem } from "@chakra-ui/react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { BoxContainers } from "../Components/BoxContainers";
import { helpHttp } from "../Utils/http.utils";

export const Contact = () => {
	// const [contact, setContact] = useState([]);
	const auth = useSelector((state) => state.auth);
	const api = helpHttp();
	const url = "http://localhost:8000/api/v1/contact";

	useEffect(() => {
		const opts = {
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
				Authorization: `Bearer ${auth}`,
			},
		};
		api.get(url, opts).then((res) => {
			console.log(res);
		});
	}, []);

	return (
		<BoxContainers>
			<Grid
				w="100%"
				h="100%"
				templateRows={{ base: "repeat(2, 1fr)" }}
				templateColumns="repeat(auto-fill, minmax(15rem, 1fr))"
			>
				<GridItem bgColor="red"></GridItem>
				<GridItem bgColor="blue"></GridItem>
				<GridItem bgColor="yellow"></GridItem>
				<GridItem bgColor="green"></GridItem>
			</Grid>
		</BoxContainers>
	);
};
