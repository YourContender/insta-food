import Header from "../components/header/Header";
import MenuItems from "../components/menu-items/MenuItems";
import Nav from "../components/nav/Nav";
import Slider from "../components/slider/Slider";

const HomePage = () => {
    return (
        <>
            <Slider/>
            <Header display='absolute'/>
            <Nav/>
            <MenuItems category='popular' title='Популярні товари:'/>
        </>
    )
}

export default HomePage;