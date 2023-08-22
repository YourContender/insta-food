import { Link } from 'react-router-dom';
import basket from '../../../img/basket.png';
import { useDispatch } from 'react-redux';
import { getCurrentProduct } from '../../../redux/actions/actions';

const Item = ({ tag, img, title, descr, weight, price, currency, id }) => {
    const dispatch = useDispatch();
    
    const changeProductFromList = (id) => {
        dispatch(getCurrentProduct(id));
    }

    return (
        <Link to="/card">
            <div className="menu_item" onClick={() => changeProductFromList(id)}>
                <div className="menu_item-sales">
                    <span className={tag[0][1]}>{tag[0][0]}</span>
                    <span className={tag[1][1]}>{tag[1][0]}</span>
                </div>

                <div className="menu_item-img">
                    <img src={img} alt="img 1" />
                </div>

                <div className="menu_item-title">
                    {title}
                </div>

                <div className="menu_item-descr">
                    {descr}
                </div>

                <div className="menu_item-info">
                    <span className="menu_item-info-weight">{weight} g</span>
                    <div className="menu_item-info-price"> 
                        <span>{price}</span>
                        <span>{currency}</span>
                    </div>
                    <span className="menu_item-info-basket">
                        <img src={basket} alt="basket" />
                    </span>
                </div>
            </div>
        </Link>
    )
}

export default Item;