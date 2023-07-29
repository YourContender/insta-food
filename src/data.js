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
        name: 'Шаурма',
        src: shawarma
    },
    {
        styles: 'nav_content-item',
        name: 'Бургери',
        src: burgers
    },
    {
        styles: 'nav_content-item',
        name: 'Піца',
        src: pizza
    },
    {
        styles: 'nav_content-item',
        name: 'Салати',
        src: salad
    },
    {
        styles: 'nav_content-item hide',
        name: 'Суші',
        src: sushi
    },
    {
        styles: 'nav_content-item hide',
        name: 'Роли',
        src: roll
    },
    {
        styles: 'nav_content-item hide',
        name: 'Фаст-фуд',
        src: potato
    },
    {
        styles: 'nav_content-item hide',
        name: 'Десерти',
        src: dessert
    },
    {
        styles: 'nav_content-item hide',
        name: 'Напої',
        src: drink
    },
    {
        styles: 'nav_content-item hide',
        name: 'Соуси',
        src: sauce
    },
];

export default menu;