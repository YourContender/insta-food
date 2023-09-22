import { useDispatch, useSelector } from "react-redux";
import { faHeart, faComment } from "@fortawesome/free-regular-svg-icons";
import { faPlus, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getBasketList } from "../../store/menuSlice";
import { useEffect, useState } from "react";
import { onValue, ref, set } from "firebase/database";
import { db } from "../../firebase";
import Line from "../line/Line";
import "./CardProduct.scss";

const CardProduct = () => {
	const dispatch = useDispatch();
	const data = useSelector((elem) => elem.menu);
	const [listBasket, setListBasket] = useState([]);
	const { title, descr, category, img, currency, weight, price, id } =
		data.current[0];
	const [amountProds, setAmountProds] = useState(1);
	const [correctPrice, setCorrectPrice] = useState(price);

	const checkForPositiveNumber = (num) => {
		if (num <= 0 || num >= 10) {
			return 1;
		} else {
			return num;
		}
	};

	useEffect(() => {
		onValue(ref(db), (item) => {
			const data = item.val();

			if (data !== null) {
				dispatch(getBasketList(data.basket));
				setListBasket(data.basket);
			}
		});
	}, []);

	const actionWithAmount = (action) => {
		switch (action) {
			case "plus":
				return setAmountProds(checkForPositiveNumber(amountProds + 1));
			case "minus":
				return setAmountProds(checkForPositiveNumber(amountProds - 1));
			default:
				setAmountProds(1);
		}
	};

	const addProductToBasket = () => {
		return set(ref(db, `/basket`), [...listBasket, data.current[0]]);
	};

	return (
		<>
			<Line category={category} />

			<div className="card">
				<div className="card_photo">
					<img src={img} alt="" />
				</div>

				<div className="card_content">
					<div className="card_content-name">
						<span>{title}</span>

						<p>{descr}</p>
					</div>

					<div className="card_content-svg">
						<FontAwesomeIcon className="card_content-likes" icon={faHeart} />
						<FontAwesomeIcon
							className="card_content-comment"
							icon={faComment}
						/>
					</div>

					<div className="card_content-data">
						<div className="card_content-data-calc">
							<p>{weight}</p>

							<div className="card_content-data-quantity">
								<span>x {amountProds}</span>
							</div>

							<div className="card_content-data-price">
								<span>{25 + +price}</span>
								<h4>{correctPrice * amountProds}</h4>
								<p>{currency}</p>
								<div className="card_content-data-price-calc">
									<span onClick={() => actionWithAmount("plus")}>+</span>
									<span onClick={() => actionWithAmount("minus")}>-</span>
								</div>
							</div>
						</div>

						<div className="card_content-data-order">
							<button>
								<FontAwesomeIcon className="icon" icon={faPlus} />
								<p>Додатково до замовлення</p>
							</button>

							<button>
								<FontAwesomeIcon className="icon" icon={faPhone} />
								<p>Замовити в один клік</p>
							</button>

							<a
								className="card_content-data-order-click"
								onClick={addProductToBasket}
							>
								Замовити
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default CardProduct;
