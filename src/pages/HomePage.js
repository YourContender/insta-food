import Header from "../components/header/Header";
import MenuItems from "../components/menu-items/MenuItems";
import Nav from "../components/nav/Nav";
import PopularProd from "../components/popular-products/PopularProd";
import Slider from "../components/slider/Slider";

const HomePage = () => {
    return (
        <>
            <Slider/>
            <Header display='absolute'/>
            <Nav/>
            {/* <PopularProd /> */}
            <MenuItems category='menu'/>
        </>
    )
}

export default HomePage;