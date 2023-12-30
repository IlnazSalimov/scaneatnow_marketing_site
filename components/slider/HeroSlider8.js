// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay, Pagination } from "swiper";


export default function HeroSlider8() {
    return (
        <>
            <Swiper
                modules={[Autoplay, Pagination]}
                slidesPerView={1}
                spaceBetween={0}
                // centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                    el: '.hero-1-pagination'
                }}
                className="slides"
                tag="ul"
            >

                {/* SLIDE #1 */}
                <SwiperSlide id="slide-1" tag="li">
                    <img src="/images/slider/slide-7.jpg" alt="slide-background" />
                </SwiperSlide>
                {/* SLIDE #2 */}
                <SwiperSlide id="slide-2" tag="li">
                    <img src="/images/slider/slide-8.jpg" alt="slide-background" />
                </SwiperSlide>
                {/* SLIDE #3 */}
                <SwiperSlide id="slide-3" tag="li">
                    <img src="/images/slider/slide-9.jpg" alt="slide-background" />
                </SwiperSlide>


            </Swiper>
            <div className="swiper-pagination hero-1-pagination" />
        </>
    )
}
