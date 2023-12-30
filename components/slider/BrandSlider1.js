// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay, Navigation, Pagination } from "swiper";


export default function BrandSlider1() {
    return (
        <>
            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                slidesPerView={6}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                    },
                    575: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    767: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    991: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                    1199: {
                        slidesPerView: 6,
                        spaceBetween: 30,
                    },
                    1350: {
                        slidesPerView: 6,
                        spaceBetween: 30,
                    },
                }}
                className="brands-carousel"
            >

                <SwiperSlide className="brand-logo">
                    <img className="img-fluid" src="/images/brand-11.png" alt="brand-logo" />
                </SwiperSlide>

                <SwiperSlide className="brand-logo">
                    <img className="img-fluid" src="/images/brand-12.png" alt="brand-logo" />
                </SwiperSlide>

                <SwiperSlide className="brand-logo">
                    <img className="img-fluid" src="/images/brand-13.png" alt="brand-logo" />
                </SwiperSlide>

                <SwiperSlide className="brand-logo">
                    <img className="img-fluid" src="/images/brand-14.png" alt="brand-logo" />
                </SwiperSlide>

                <SwiperSlide className="brand-logo">
                    <img className="img-fluid" src="/images/brand-15.png" alt="brand-logo" />
                </SwiperSlide>

                <SwiperSlide className="brand-logo">
                    <img className="img-fluid" src="/images/brand-16.png" alt="brand-logo" />
                </SwiperSlide>

                <SwiperSlide className="brand-logo">
                    <img className="img-fluid" src="/images/brand-17.png" alt="brand-logo" />
                </SwiperSlide>

                <SwiperSlide className="brand-logo">
                    <img className="img-fluid" src="/images/brand-18.png" alt="brand-logo" />
                </SwiperSlide>
            </Swiper>
        </>
    )
}
