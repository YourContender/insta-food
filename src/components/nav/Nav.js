import { useEffect, useState } from 'react';
import './Nav.scss';
import menu from '../../data';

const Nav = () => {
    const [menuSection, setMenuSection] = useState([]);

    useEffect(() => {
        setMenuSection([...menu]);
    }, []);

    return (
        <div className="nav">
            <div className="nav_content">
                {
                    menuSection.map(item => {
                        return (
                            <div className={item.styles} key={item.name}>
                                <img src={item.src} alt={item.src} />
                                <span>{item.name}</span>
                            </div>
                        )
                    })
                }
               
            </div>   
            <div className="nav_content_list">
                <button>See</button>
            </div>
        </div>
    )
}

export default Nav;