import { faPlus, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faHeart, faComment } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './CardProduct.scss';
import { useSelector } from 'react-redux';
import Line from '../line/Line';

const CardProduct = () => {
    const currentProd = useSelector(elem => elem.menu.current);
    const { title, descr, category, img, currency, weight, price, tag } = currentProd[0];

    return (
        <>
        <Line category={category}/>

        <div className="card">
            <div className="card_photo">
                <img src={img} alt="" />
            </div>

            <div className="card_content">
                <div className="card_content-name">
                    <span>
                        {title}
                    </span>

                    <p>
                        {descr}
                    </p>
                </div>

                <div>
                    <FontAwesomeIcon className="card_content-likes" icon={faHeart}/>
                    <FontAwesomeIcon className="card_content-comment" icon={faComment}/>
                </div>

                <div className="card_content-data">
                    <div className="card_content-data-calc">
                        <p>{weight}</p>

                        <div className="card_content-data-quantity">
                            <span>x 1</span>
                        </div>

                        <div className="card_content-data-price">
                            <span>252</span>
                            <h4>{price}</h4>
                            <p>{currency}</p>
                            <div className="card_content-data-price-calc">
                                <span>+</span>
                                <span>-</span>
                            </div>
                        </div>
                    </div>

                    <div className="card_content-data-order">
                        <button>
                            <FontAwesomeIcon className="icon" icon={faPlus}/>
                            <p>Додатково до замовлення</p>
                        </button>

                        <button>
                            <FontAwesomeIcon className="icon" icon={faPhone}/>
                            <p>Замовити в один клік</p>
                        </button>

                        <a 
                            className="card_content-data-order-click"
                        >
                            Замовити
                        </a>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default CardProduct;