import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import PopularProd from './components/popular-products/PopularProd';
import Slider from './components/slider/Slider';
import './index.scss';

function App() {
    return (
        <div className='container'>
            <Slider/>
            <Header />
            <Nav/>
            <PopularProd />
        </div>
    )
}

export default App;