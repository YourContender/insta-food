import { faMagnifyingGlass, faUser, faSquarePhoneFlip} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from '../../img/header/logo.png';
import './Header.scss';
import { useState } from 'react';
import ModalMenu from '../modal/ModalMenu';

const Header = () => {
    const [modalMenu, setModalMenu] = useState(false);

    return (
        <>
            {
                modalMenu ? 
                    <ModalMenu 
                        setModalMenu={setModalMenu}
                    /> : 
                    
                    <div className='header'>
                        <div className='header_logo'>
                            <img src={logo} alt='logo'/>

                            <div className='header_title'>
                                <h4>InstaFood</h4>
                                <span>м.Київ</span>
                                <p>З 10:00 до 21:00</p>
                            </div>
                        </div>

                        <div className='header_text'>
                            <div className='header_text-top'>
                                <span>Доставка та оплата</span>
                                <span>Про нас</span>
                                <span>Блог</span>
                                <span>Купон</span>
                                <span>Акції</span>
                                <span>Відгуки</span>
                                <span>Навчання</span>
                            </div>

                            <div className='header_text-down'>
                                <input placeholder='Шукати за назвою'/>
                                <div className="header_text-down-tel">
                                    <div>   
                                        <span>+38</span>
                                    </div>
                                
                                    <div className='header_text-down-tel-red'>
                                        <span>(099)</span> 
                                        <p>Vodafone</p>
                                    </div>

                                    <div>
                                        <span>9450166</span>
                                    </div>
                                </div>
                                <span className='header_text-down-search'>
                                    <FontAwesomeIcon icon={faMagnifyingGlass}/>
                                </span>
                                <span className='header_text-down-user'>
                                    <FontAwesomeIcon icon={faUser}/>
                                </span>
                            </div>
                        </div>

                        <div className="header_mobile">
                            <div className="header_mobile-burger"
                                onClick={() => setModalMenu(true)}
                            >
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>

                            <span className='header_mobile-phone'>
                                <FontAwesomeIcon icon={faSquarePhoneFlip} />
                            </span>
                        </div>
                    </div>
            }
        </>
            
    )
}

export default Header;