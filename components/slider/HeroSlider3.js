// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay, Navigation, Pagination } from "swiper";


export default function HeroSlider3() {
    return (
        <>
            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
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
                    {/* Background Image */}
                    <img src="/images/slider/slide-4.jpg" alt="slide-background" />
                    {/* Image Caption */}
                    <div className="caption d-flex align-items-center left-align">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="caption-txt white-color">
                                        {/* Title */}
                                        <h2>Crispy Chicken</h2>
                                        <h3>Only <span className="yellow-color">$7.65</span></h3>
                                    </div>
                                </div>
                            </div>  {/* End row */}
                        </div>  {/* End container */}
                    </div>	{/* End Image Caption */}
                </SwiperSlide>	{/* END SLIDE #1 */}
                {/* SLIDE #2 */}
                <SwiperSlide id="slide-2" tag="li">
                    {/* Background Image */}
                    <img src="/images/slider/slide-5.jpg" alt="slide-background" />
                    {/* Image Caption */}
                    <div className="caption d-flex align-items-center right-align">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-6 col-md-5 offset-sm-6 offset-md-7">
                                    <div className="caption-txt white-color">
                                        {/* Title */}
                                        <h2>Chicken Fingers</h2>
                                        <h3>Only <span className="yellow-color">$8.29</span></h3>
                                    </div>
                                </div>
                            </div>  {/* End row */}
                        </div>  {/* End container */}
                    </div>	{/* End Image Caption */}
                </SwiperSlide>	{/* END SLIDE #2 */}
                {/* SLIDE #3 */}
                <SwiperSlide id="slide-3" tag="li">
                    {/* Background Image */}
                    <img src="/images/slider/slide-6.jpg" alt="slide-background" />
                    {/* Image Caption */}
                    <div className="caption d-flex align-items-center left-align">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="caption-txt white-color">
                                        {/* Title */}
                                        <h2>Double Burger</h2>
                                        <h3>Only <span className="yellow-color">$8.95</span></h3>
                                    </div>
                                </div>
                            </div>  {/* End row */}
                        </div>  {/* End container */}
                    </div>	{/* End Image Caption */}
                </SwiperSlide>	{/* END SLIDE #3 */}


            </Swiper>
            <div className="swiper-pagination hero-1-pagination" />
        </>
    )
}
