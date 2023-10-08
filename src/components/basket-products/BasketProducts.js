import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { onValue, ref, set } from "firebase/database";
import { db } from "../../firebase";
import { v4 as uuidv4 } from "uuid";
import BasketProductItem from "./basket-product-item/BasketProductItem";
import "./BasketProducts.scss";

const BasketProducts = () => {
	const [basketList, setBasketList] = useState([]);

	useEffect(() => {
		onValue(ref(db), (item) => {
			const data = item.val();

			if (data !== null) {
				setBasketList(data.basket);
			}
		});
	}, []);

	const removeProductFromBasket = (id) => {
		const newOrderProductList = Object.values(basketList).filter(
			(item) => item.id !== id
		);
		setBasketList(newOrderProductList);

		set(ref(db, `/basket`), newOrderProductList);
	};

	return (
		<div className="basket">
			<div className="basket_list">
				{basketList.map((item) => {
					return (
						<BasketProductItem
							{...item}
							key={uuidv4()}
							removeProductFromBasket={removeProductFromBasket}
						/>
					);
				})}
			</div>
			<div className="basket_panel">
				<button>швидке замовлення</button>

				<form className="basket_panel-form">
					<div className="basket_panel-input">
						<span>Я новий клієнт</span>
						<input type="text" placeholder="+38(__)__ ____" />
					</div>

					<div className="basket_panel-user">
						<FontAwesomeIcon icon={faUser} />
						<span>авторизація</span>
					</div>
				</form>
			</div>
		</div>
	);
};

export default BasketProducts;
