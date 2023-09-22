import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { onValue, ref } from "firebase/database";
import { db } from "../../firebase";
import { v4 as uuidv4 } from "uuid";
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

	return (
		<div className="basket">
			<div className="basket_list">
				{basketList.map((item) => {
					return (
						<div className="basket_list-item" key={uuidv4()}>
							<div className="basket_list-item-photo">
								<img src={item.img} alt="test" />
							</div>

							<div className="basket_list-item-descr">
								<h4>{item.title}</h4>
								<span>{item.descr}</span>

								<div className="details">
									<div className="details_price">
										<p>x 1</p>
										<span>
											{item.price} {item.currency}
										</span>
									</div>

									<div className="details_tag">
										<span className="details_tag-new">new</span>
										<span className="details_tag-hit">hit</span>
									</div>
								</div>
							</div>

							<div className="basket_list-item-btns">
								<button>+</button>
								<button>-</button>
							</div>
						</div>
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
