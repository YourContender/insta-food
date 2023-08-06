import { onValue, ref } from "firebase/database";
import { db } from "../../firebase";
import { useState } from 'react';
import { useEffect } from 'react';
import basket from '../../img/basket.png';
import './PopularProd.scss';

function PopularProd() {
    const [listMenu, setListMenu] = useState([]);

    useEffect(() => {
        onValue(ref(db), item => {
            const data = item.val(); 
            console.log(data.menu);

            if (data !== null) {
                return setListMenu(data.menu);
            }
        })
    }, [])

    return (    
        <div className="popular">
            <h1 className="popular_title">Популярні товари:</h1>

        <div className="popular_container">
            {
                listMenu.map(item => {
                    return (
                        <div className="popular_item" key={item.id}>
                            <div className="popular_item-sales">
                                <span className={item.tag.first[1]}>{item.tag.first[0]}</span>
                                <span className={item.tag.second[1]}>{item.tag.second[0]}</span>
                            </div>

                            <div className="popular_item-img">
                                <img src={item.img} alt="img 1" />
                            </div>

                            <div className="popular_item-title">
                                {item.title}
                            </div>

                            <div className="popular_item-descr">
                                {item.descr}
                            </div>

                            <div className="popular_item-info">
                                <span className="popular_item-info-weight">{item.weight} g</span>
                                <div className="popular_item-info-price"> 
                                    <span>{item.price[0]}</span>
                                    <span>{item.price[1]}</span>
                                </div>
                                <span className="popular_item-info-basket">
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

export default PopularProd;