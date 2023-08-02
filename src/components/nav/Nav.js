import { useEffect, useState } from 'react';
import menu from '../../data';
import Section from './nav-section/Section';
import { faAnglesDown, faAnglesUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Nav.scss';

const Nav = () => {
    const [menuSection, setMenuSection] = useState([]);
    const [showAllListSection, setShowAllListSection] = useState(false);

    useEffect(() => {
        setMenuSection([...menu]);
    }, []);

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
        <div className="nav" style={showAllListSection ? {height: '490px'}: {height: 'auto'}}>
            <div className="nav_content">
                {
                    menuSection.map(item => {
                        return <Section {...item} key={item.title}/>
                    })
                }
               
            </div>   
            <div className="nav_content_list">
                <button
                    onClick={showListSection}
                >

                {showAllListSection ?  <FontAwesomeIcon icon={faAnglesUp} /> : <FontAwesomeIcon icon={faAnglesDown} /> }
                </button>
            </div>
        </div>
    )
}

export default Nav;