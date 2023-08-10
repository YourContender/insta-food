import shawarma from './img/nav/shawarma.png';
import burgers from './img/nav/burger.png';
import pizza from './img/nav/pizza.png';
import salad from './img/nav/salad.png';
import sushi from './img/nav/sushi.png';
import roll from './img/nav/roll.png';
import potato from './img/nav/potato.png';
import dessert from './img/nav/tasty.png';
import drink from './img/nav/drink.png';
import sauce from './img/nav/gravy.png';

const menu = [
    {
        styles: 'nav_content-item',
        title: 'Шаурма',
        src: shawarma,
        link: '/shawarma'
    },
    {
        styles: 'nav_content-item',
        title: 'Бургери',
        src: burgers,
        link: '/burgers'
    },
    {
        styles: 'nav_content-item',
        title: 'Піца',
        src: pizza,
        link: '/pizza'
    },
    {
        styles: 'nav_content-item',
        title: 'Салати',
        src: salad,
        link: '/salad'
    },
    {
        styles: 'nav_content-item hide',
        title: 'Суші',
        src: sushi,
        link: '/sushi'
    },
    {
        styles: 'nav_content-item hide',
        title: 'Роли',
        src: roll,
        link: '/rolls'
    },
    {
        styles: 'nav_content-item hide',
        title: 'Фаст-фуд',
        src: potato,
        link: '/fast-food'
    },
    {
        styles: 'nav_content-item hide',
        title: 'Десерти',
        src: dessert,
        link: '/dessert'
    },
    {
        styles: 'nav_content-item hide',
        title: 'Напої',
        src: drink,
        link: '/drink'
    },
    {
        styles: 'nav_content-item hide',
        title: 'Соуси',
        src: sauce,
        link: '/sauce'
    },
];

export default menu;