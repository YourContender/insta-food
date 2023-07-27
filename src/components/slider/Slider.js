import { Swiper, SwiperSlide } from 'swiper/react';
import { 
    Navigation, Pagination, Mousewheel, Keyboard, Autoplay 
} from 'swiper/modules';
import slide1 from '../../img/slider/slide1.jpg';
import slide2 from '../../img/slider/slide2.jpg';
import slide3 from '../../img/slider/slide3.jpg';
import mobSlide1 from '../../img/slider/mob-slide-1.jpg';
import mobSlide2 from '../../img/slider/mob-slide-2.jpg';
import mobSlide3 from '../../img/slider/mob-slide-3.jpg';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './slider.scss'

const Slider= () => {
    return (
        <>
          <Swiper
            cssMode={true}
            navigation={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            autoplay={{
                delay: 3500,
                disableOnInteraction: false,
            }}
            modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
                <div className='desktop'>
                    <img src={slide1} alt="desktop-slide-1"/>
                </div>
                <div className='mobile'>
                    <img src={mobSlide1} alt="mob-slide-1"/>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='desktop'>
                    <img src={slide2} alt="desktop-slide-2"/>
                </div>
                <div className='mobile'>
                    <img src={mobSlide2} alt="mob-slide-2"/>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='desktop'>
                    <img src={slide3} alt="desktop-slide-3"/>
                </div>
                <div className='mobile'>
                    <img src={mobSlide3} alt="mob-slide-3"/>
                </div>
            </SwiperSlide>
          </Swiper>
        </>
    );
}

export default Slider;