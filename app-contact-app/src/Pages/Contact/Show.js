import { Button } from "@chakra-ui/react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { BoxContainers } from "../../Components/BoxContainers";
import { helpHttp } from "../../Utils/http.utils";

export const ShowContact = () => {
	// const [contact, setContact] = useState([]);
	const auth = useSelector((state) => state.auth);
	const api = helpHttp();
	const url = "http://localhost:8000/api/v1/contact";
	const history = useHistory();

	useEffect(() => {
		const getUser = async (url) => {
			const opts = {
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
					Authorization: `Bearer ${auth}`,
				},
			};
			const res = await api.get(url, opts);
			console.log(res);
		};
		getUser(url);
	}, []);

	const handleCreate = () => {
		history.push("/contact/create");
	};

	return (
		<BoxContainers>
			<Button
				variant="outline"
				colorScheme="green"
				onClick={handleCreate}
			>
				Add Contact
			</Button>
		</BoxContainers>
	);
};
