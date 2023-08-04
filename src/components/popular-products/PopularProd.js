import img1 from '../../img/menu-items/pizza1.png';
import basket from '../../img/basket.png';
import './PopularProd.scss';

function PopularProd() {
    return (
        <div className="popular">
            <h1 className="popular_title">Популярні товари:</h1>

            <div className="popular_item">
                <div className="popular_item-sales">
                    <span className="popular_item-sales-new">new</span>
                    <span className="popular_item-sales-percent">no %</span>
                </div>

                <div className="popular_item-img">
                    <img src={img1} alt="img 1" />
                </div>

                <div className="popular_item-title">
                    Кіш з куркою та овочами
                </div>

                <div className="popular_item-descr">
                    Куряче філе, Брокколі, Цибуля біла, Перець солодкий
                </div>

                <div className="popular_item-info">
                    <span className="popular_item-info-weight">150 g</span>
                    <div className="popular_item-info-price"> 
                        <span>90</span>
                        <span>грн</span>
                    </div>
                    <span className="popular_item-info-basket">
                        <img src={basket} alt="basket" />
                    </span>
                </div>
            </div>
        </div>
    )
}

export default PopularProd;