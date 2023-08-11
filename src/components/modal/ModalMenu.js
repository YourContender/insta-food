import { useEffect, useState } from 'react';
import menu from '../../data';
import logo from '../../img/header/logo.png';
import { faUser, faXmark, faAnglesUp, faAnglesDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './ModalMenu.scss';
import Section from '../nav/nav-section/Section';

const ModalMenu = ({ setModalMenu }) => {
    const [menuSection, setMenuSection] = useState([]);
    const [showAllListSection, setShowAllListSection] = useState(false);
    
    useEffect(() => {
        document.body.classList.add("no-scroll");
        setMenuSection([...menu]);
    }, []);

    const closeModalMenu = () => {
        document.body.classList.remove("no-scroll");
        setModalMenu(false);
    }

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
        <div className="modal">
            <div className="modal_header">
                <span className="modal_header-user">
                    <FontAwesomeIcon icon={faUser}/>
                </span>

                <img src={logo} alt='logo'/>

                <button 
                    className='modal_header-close'
                    onClick={closeModalMenu}
                >
                    <FontAwesomeIcon icon={faXmark} />
                </button>
            </div>

            <div className="modal_section">
                {
                    menuSection.map(item => {
                        return <Section {...item} key={item.title}/>
                    })
                }

            </div>
            
            <div className="modal_section-btn">
                <button
                    onClick={showListSection}
                >
                    {
                        showAllListSection ?  
                            <FontAwesomeIcon 
                                icon={faAnglesUp} 
                            /> 
                            : 
                            <FontAwesomeIcon 
                                icon={faAnglesDown} 
                            /> 
                        }
                </button>
            </div>

            <div className="modal_input">
                <input type="text" placeholder="search..."/>
            </div>

            <div className="modal_road">
                <span>Головна</span>
                <span>Доставка та оплата</span>
                <span>Про нас</span>
                <span>Блог</span>
                <span>Контакти</span>   
                <span>Купон</span>
                <span>Акції</span>
                <span>Відгуки</span>
            </div>

            <div className="modal_telephone">
                <div>
                    <span>+38</span>
                </div>
            
                <div className='modal_telephone-num'>
                    <span>(099)</span> 
                    <p>Vodafone</p>
                </div>

                <div>
                    <span>9450166</span>
                </div>
            </div>
        </div>
    )
}

export default ModalMenu;