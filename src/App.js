import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Slider from './components/slider/Slider';
import './index.scss';

function App() {
    return (
        <div className='container'>
            <Slider/>
            <Header />
            <Nav/>
        </div>
    )
}

export default App;