import { Swiper, SwiperSlide } from 'swiper/react';
import { 
    Navigation, Pagination, Mousewheel, Keyboard, Autoplay 
} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './slider.scss'

import slide1 from '../../img/slider/slide1.jpg';
import slide2 from '../../img/slider/slide2.jpg';
import slide3 from '../../img/slider/slide3.jpg';

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
                delay: 2500,
                disableOnInteraction: false,
            }}
            modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
                <img src={slide1}/>
            </SwiperSlide>

            <SwiperSlide>
                <img src={slide2}/>
            </SwiperSlide>

            <SwiperSlide>
                <img src={slide3}/>
            </SwiperSlide>
          </Swiper>
        </>
    );
}

export default Slider;