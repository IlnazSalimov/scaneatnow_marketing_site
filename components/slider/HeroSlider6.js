// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay, Pagination } from "swiper";


export default function HeroSlider6() {
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
                    {/* Background Image */}
                    <img src="/images/slider/slide-10.jpg" alt="slide-background" />
                    {/* Image Caption */}
                    <div className="caption d-flex align-items-center left-align">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-7">
                                    <div className="caption-txt white-color">
                                        {/* Title */}
                                        <h2>Farmers Special</h2>
                                        <h3>From <span className="meat-color">$26.49</span></h3>
                                    </div>
                                </div>
                            </div>  {/* End row */}
                        </div>  {/* End container */}
                    </div>	{/* End Image Caption */}
                </SwiperSlide>	{/* END SLIDE #1 */}
                {/* SLIDE #2 */}
                <SwiperSlide id="slide-2" tag="li">
                    {/* Background Image */}
                    <img src="/images/slider/slide-11.jpg" alt="slide-background" />
                    {/* Image Caption */}
                    <div className="caption d-flex align-items-center left-align">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-7">
                                    <div className="caption-txt white-color">
                                        {/* Title */}
                                        <h2>Chicken Ranchero</h2>
                                        <h3>From <span className="meat-color">$24.99</span></h3>
                                    </div>
                                </div>
                            </div>  {/* End row */}
                        </div>  {/* End container */}
                    </div>	{/* End Image Caption */}
                </SwiperSlide>	{/* END SLIDE #2 */}
                {/* SLIDE #3 */}
                <SwiperSlide id="slide-3" tag="li">
                    {/* Background Image */}
                    <img src="/images/slider/slide-12.jpg" alt="slide-background" />
                    {/* Image Caption */}
                    <div className="caption d-flex align-items-center left-align">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-7">
                                    <div className="caption-txt white-color">
                                        {/* Title */}
                                        <h2>Quattro Formaggi</h2>
                                        <h3>From <span className="meat-color">$32.25</span></h3>
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
