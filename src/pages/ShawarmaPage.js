import Header from "../components/header/Header";
import Nav from "../components/nav/Nav";

const ShawarmaPage = ({ tmp }) => {
	console.log("success test", tmp);
	return (
		<div className="test">
			<Header display="relative" />
			<Nav />
		</div>
	);
};

export default ShawarmaPage;
