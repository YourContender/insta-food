import { useState } from "react";

const BasketProductItem = ({
	id,
	img,
	tag,
	title,
	descr,
	price,
	currency,
	removeProductFromBasket,
}) => {
	const [quantityOrderProd, setQuantityOrderProd] = useState(1);

	const incrementCountOrder = () => {
		return setQuantityOrderProd(quantityOrderProd + 1);
	};

	const decrementCountOrder = () => {
		return setQuantityOrderProd(quantityOrderProd - 1);
	};

	return (
		<div className="basket_list-item">
			<div className="basket_list-item-photo">
				<img src={img} alt="test" />
			</div>
			<div className="basket_list-item-descr">
				<h4>{title}</h4>
				<span>{descr}</span>
				<div className="details">
					<div className="details_price">
						<p className="details_price-quantity">x {quantityOrderProd}</p>
						<span className="details_price-num">
							{price * quantityOrderProd} {currency}
						</span>
					</div>
					<div className="details_tag">
						<span className={tag[0][1]}>{tag[0][0]}</span>
						<span className={tag[1][1]}>{tag[1][0]}</span>
					</div>
				</div>
			</div>
			<div className="basket_list-item-btns">
				<button onClick={incrementCountOrder}>+</button>
				{quantityOrderProd === 1 ? (
					<button onClick={() => removeProductFromBasket(id)}>&times;</button>
				) : (
					<button onClick={decrementCountOrder}>-</button>
				)}
			</div>
		</div>
	);
};

export default BasketProductItem;
