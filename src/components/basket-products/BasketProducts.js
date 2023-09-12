import testPhoto from "../../img/popular/7.png";
import "./BasketProducts.scss";

const BasketProducts = () => {
	return (
		<div className="basket">
			<div className="basket_list">
				<div className="basket_list-item">
					<div className="basket_list-item-photo">
						<img src={testPhoto} alt="test" />
					</div>
					<div className="basket_list-item-descr">
						<h4>Піца Чотири сиру Блек Едішн 30 см</h4>
						<span>
							Мед, Соус томатний, Сир дорблю, Сир мармуровий, Сир Чорний лимон,
							Сир моцарела, Тісто дріжджове
						</span>

						<div className="details">
							<div className="details_price">
								<p>x 1</p>
								<span>318 грн</span>
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
			</div>
			<div className="basket_panel"></div>
		</div>
	);
};

export default BasketProducts;
