import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getMenuListFromDatabase } from "../../redux/actions/actions";
import Item from "./Item/Item";
import './MenuItems.scss';

function MenuItems({ category, title }) {
    const dispatch = useDispatch();
    const menu = useSelector(elem => elem.menu.menu);
    
    useEffect(() => {
        dispatch(getMenuListFromDatabase(category));
    }, []);

    return (
        <div className="menu">
            <h1 className="menu_title">{title}</h1>

            <div className="menu_container">
                {
                    menu.map(item => {
                        return <Item {...item} key={item.id}/>
                    })
                }
            </div>
        </div>
    )
}

export default MenuItems;