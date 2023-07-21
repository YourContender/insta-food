import logo from '../../img/header/logo.png';
import { faMagnifyingGlass, faUser} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Header.scss';

const Header = () => {
    return (
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
                        <div className='header_text-down-tel-num'>
                            <span>(068)</span>
                            <p>Kyivstar</p>
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
        </div>
    
    )
}

export default Header;