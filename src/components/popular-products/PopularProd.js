import basket from '../../img/basket.png';
import './PopularProd.scss';
import { list } from '../../menu-list';

import { onValue, ref, remove, set, update } from "firebase/database";
import { db } from "../../firebase";

// export const getFullListTasksFromDatabase = () => {
//     return async dispatch => {
//         onValue(ref(db), item => {
//             const data = item.val(); 

//             if (data !== null) {
//                 dispatch({
//                     type: 'GET_TASKS_LIST',
//                     payload: data
//                 })
//             }
//         })
//     }
// }

function PopularProd() {

    const getFullListTasksFromDatabase = () => {
        onValue(ref(db), item => {
            const data = item.val(); 

            if (data !== null) {
                // console.log(data);
                data.menu.map(item => {
                    return console.log(item.category);
                })
            }
        })
    }

    getFullListTasksFromDatabase()

    return (
        <div className="popular">
            <h1 className="popular_title">Популярні товари:</h1>

        <div className="popular_container">
            {
                list.map(item => {
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