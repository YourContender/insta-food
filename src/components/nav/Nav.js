import shawarma from '../../img/nav/shawarma.png';
import burgers from '../../img/nav/burger.png';
import pizza from '../../img/nav/pizza.png';
import salad from '../../img/nav/salad.png';
import sushi from '../../img/nav/sushi.png';
import roll from '../../img/nav/roll.png';
import potato from '../../img/nav/potato.png';
import dessert from '../../img/nav/tasty.png';
import drink from '../../img/nav/drink.png';
import sauce from '../../img/nav/gravy.png';

import './Nav.scss';

const Nav = () => {
    return (
        <div className="nav">
            <div className="nav_content">
                <div className="nav_content-item">
                    <img src={shawarma} alt="shawarma" />
                    <span>Шаурма</span>
                </div>

                <div className="nav_content-item">
                    <img src={burgers} alt="burgers" />
                    <span>Бургери</span>
                </div>

                <div className="nav_content-item">
                    <img src={pizza} alt="pizza" />
                    <span>Піца</span>
                </div>

                <div className="nav_content-item">
                    <img src={salad} alt="salad" />
                    <span>Салати</span>
                </div>

                <div className="nav_content-item">
                    <img src={sushi} alt="sushi" />
                    <span>Суші</span>
                </div>

                <div className="nav_content-item">
                    <img src={roll} alt="roll" />
                    <span>Роли</span>
                </div>

                <div className="nav_content-item">
                    <img src={potato} alt="fast food" />
                    <span>Фаст-фуд</span>
                </div>

                <div className="nav_content-item">
                    <img src={dessert} alt="dessert" />
                    <span>Десерти</span>
                </div>

                <div className="nav_content-item">
                    <img src={drink} alt="drink" />
                    <span>Напої</span>
                </div>

                <div className="nav_content-item">
                    <img src={sauce} alt="sauce" />
                    <span>Соуси</span>
                </div>
            </div>   
        </div>
    )
}

export default Nav;