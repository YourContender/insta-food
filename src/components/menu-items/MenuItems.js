import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { getMenuListFromDatabase } from "../../redux/actions/actions";
import Item from "./Item/Item";
import { getMenuListFromDatabase } from "./menuSlice";
import "./MenuItems.scss";
import { onValue, ref } from "firebase/database";
import { db } from "../../firebase";

function MenuItems({ category, title }) {
	const dispatch = useDispatch();
	const menu = useSelector((elem) => elem.menu.menu);

	useEffect(() => {
		onValue(ref(db), (item) => {
			const data = item.val();

			if (data !== null) {
				let filteredData = data.menu.filter(
					(item) => item.category === category
				);
				console.log("filtered", filteredData);

				dispatch(getMenuListFromDatabase(filteredData));
			}
		});
	}, []);

	return (
		<div className="menu">
			<h1 className="menu_title">{title}</h1>

			<div className="menu_container">
				{menu.map((item) => {
					return <Item {...item} key={item.id} />;
				})}
			</div>
		</div>
	);
}

export default MenuItems;
