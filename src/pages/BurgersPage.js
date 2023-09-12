import Header from "../components/header/Header";
import MenuItems from "../components/menu-items/MenuItems";
import Nav from "../components/nav/Nav";

const BurgersPage = () => {
	return (
		<div className="test">
			<Header display="relative" />
			<Nav />
			<MenuItems category="burgers" title="Наші бургери:" />
		</div>
	);
};

export default BurgersPage;
