import { useEffect, useState } from 'react';
import './Nav.scss';
import menu from '../../data';

const Nav = () => {
    const [menuSection, setMenuSection] = useState([]);
    const [showAllListSection, setShowAllListSection] = useState(false);

    useEffect(() => {
        setMenuSection([...menu]);
    }, []);

    useEffect(() => {

    })

    const showListSection = () => {
        setShowAllListSection(!showAllListSection);

        if (!showAllListSection) {
            [...menuSection].map(item => {
                return item.styles = 'nav_content-item';
            });
        } else {
            [...menuSection].map((item, index) => {
                return index >= 4 ? item.styles = 'nav_content-item hide' : null;
            })
        }

    }

    return (
        <div className="nav" style={showAllListSection ? {height: '490px'}: {height: '210px'}}>
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
                <button
                    onClick={showListSection}
                >
                    See
                </button>
            </div>
        </div>
    )
}

export default Nav;