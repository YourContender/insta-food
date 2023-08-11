import { onValue, ref } from "firebase/database";
import { db } from "../../firebase";
import { useState } from 'react';
import { useEffect } from 'react';
import basket from '../../img/basket.png';
import './MenuItems.scss';

function MenuItems({ category }) {
    const [menuItems, setMenuItems] = useState([]);
    
    useEffect(() => {
        onValue(ref(db), item => {
            const data = item.val();
            console.log(data.popular);

            if (data !== null) {
                return setMenuItems(data[category]);
            }
        })
    }, [])

    return (
        <div className="menu">
            <h1 className="menu_title">Популярні товари:</h1>

            <div className="menu_container">
                {
                    menuItems.map(item => {
                        return (
                            <div className="menu_item" key={item.id}>
                                <div className="menu_item-sales">
                                    <span className={item.tag[0][1]}>{item.tag[0][0]}</span>
                                    <span className={item.tag[1][1]}>{item.tag[1][0]}</span>
                                </div>

                                <div className="menu_item-img">
                                    <img src={item.img} alt="img 1" />
                                </div>

                                <div className="menu_item-title">
                                    {item.title}
                                </div>

                                <div className="menu_item-descr">
                                    {item.descr}
                                </div>

                                <div className="menu_item-info">
                                    <span className="menu_item-info-weight">{item.weight} g</span>
                                    <div className="menu_item-info-price"> 
                                        <span>{item.price[0]}</span>
                                        <span>{item.price[1]}</span>
                                    </div>
                                    <span className="menu_item-info-basket">
                                        <img src={basket} alt="basket" />
                                    </span>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default MenuItems;