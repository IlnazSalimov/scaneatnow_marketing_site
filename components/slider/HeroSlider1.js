// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay, Navigation, Pagination } from "swiper";


export default function HeroSlider1() {
    return (
        <>
            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                slidesPerView={1}
                spaceBetween={0}
                // centeredSlides={true}
                // loop={true}
                // autoplay={{
                //     delay: 2500,
                //     disableOnInteraction: false,
                // }}
                pagination={{
                    clickable: true,
                    el: '.hero-1-pagination'
                }}
                // navigation={{
                //     prevEl: ".prev",
                //     nextEl: ".next",
                // }}
                // breakpoints={{
                //     320: {
                //         slidesPerView: 1,
                //         spaceBetween: 30,
                //     },
                //     575: {
                //         slidesPerView: 2,
                //         spaceBetween: 30,
                //     },
                //     767: {
                //         slidesPerView: 3,
                //         spaceBetween: 30,
                //     },
                //     991: {
                //         slidesPerView: 3,
                //         spaceBetween: 30,
                //     },
                //     1199: {
                //         slidesPerView: 3,
                //         spaceBetween: 30,
                //     },
                //     1350: {
                //         slidesPerView: 3,
                //         spaceBetween: 30,
                //     },
                // }}
                className="slides"
                tag="ul"
            >

                <SwiperSlide id="slide-1" tag="li">

                    <img src="/images/slider/slide-1.jpg" alt="slide-background" />

                    <div className="caption d-flex align-items-center center-align">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="caption-txt white-color">

                                        <div className="title"><h2>Good Time, <br /> Great Taste</h2></div>

                                        <p>Open Daily: <span className="yellow-color">11:30PM - 8:30PM</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide id="slide-2" tag="li">

                    <img src="/images/slider/slide-2.jpg" alt="slide-background" />

                    <div className="caption d-flex align-items-center center-align">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="caption-txt white-color">

                                        <div className="title"><h2>Discover The <br /> Real Burgers</h2></div>

                                        <p>Enjoy the food you love <span className="yellow-color">FROM $6.99</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide id="slide-3" tag="li">

                    <img src="/images/slider/slide-3.jpg" alt="slide-background" />

                    <div className="caption d-flex align-items-center center-align">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="caption-txt white-color">

                                        <div className="title"><h2>Big Burger, <br /> Little Money</h2></div>

                                        <p>Order Now: <span className="yellow-color"><a href="/tel:123456789">789-654-3210</a></span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            <div className="swiper-pagination hero-1-pagination" />
        </>
    )
}
