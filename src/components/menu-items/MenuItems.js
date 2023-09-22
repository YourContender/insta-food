import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMenuListFromDatabase } from "../../store/menuSlice";
import { onValue, ref } from "firebase/database";
import { db } from "../../firebase";
import Item from "./Item/Item";
import "./MenuItems.scss";

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
