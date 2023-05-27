import "../../App.scss";

import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export const Home = () => {
	return (
		<div>
			<h2>HOMEPAGE</h2>
			<Button variant="contained">Contained</Button>
			<Button variant="outlined">Outlined</Button>
		</div>
	);
};
