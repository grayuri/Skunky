import { Swiper } from 'swiper/react';
import { Navigation, Pagination, A11y, FreeMode, Autoplay } from 'swiper/modules';

import './Slider.scss';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

function Slider({children}) {
  return (  
    <Swiper
      modules={[Navigation, Pagination, A11y, FreeMode, Autoplay]}
      slidesPerView={4}
      navigation
      pagination={{ clickable: true, dynamicBullets: true }}
      freeMode={true}
      spaceBetween={24}
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      breakpoints={{
        0: {
          slidesPerView: 1,
          spaceBetween: 12
        },
        576: {
          slidesPerView: 2,
          spaceBetween: 16
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 24
        }
      }}
      style={{
        "--swiper-navigation-sides-offset": "4px",
        "--swiper-navigation-size": "32px"
      }}
    >
      {children}
    </Swiper>
  );
}

export default Slider;