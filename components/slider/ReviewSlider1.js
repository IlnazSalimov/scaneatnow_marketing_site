// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay, Navigation, Pagination } from "swiper";


export default function ReviewSlider1() {
    return (
        <>
            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                slidesPerView={1}
                spaceBetween={30}
                // centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                    el: '.block-gallery-pagination'
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
                className="slides text-center"
                tag={"ul"}
            >
                {/* TESTIMONIAL-1 */}
                <SwiperSlide className="review-1" tag="li">
                    <div className="review-1-txt">
                        {/* Testimonial Author Avatar */}
                        <img src="/images/review-author-1.jpg" alt="testimonial-avatar" />
                        {/* Text */}
                        <p>" Etiam sapien sem at sagittis congue augue massa varius sodales sapien undo tempus dolor
                            egestas magna suscipit magna tempus aliquet porta sodales augue suscipit luctus neque "
                        </p>
                        {/* Rating */}
                        <div className="review-rating">
                            <div className="stars-rating">
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star-half-alt" />
                            </div>
                        </div>
                        {/* Testimonial Author */}
                        <p className="testimonial-autor">by Sean McMarthy</p>
                    </div>
                </SwiperSlide>
                {/* TESTIMONIAL-2 */}
                <SwiperSlide className="review-1" tag="li">
                    <div className="review-1-txt">
                        {/* Testimonial Author Avatar */}
                        <img src="/images/review-author-2.jpg" alt="testimonial-avatar" />
                        {/* Text */}
                        <p>" At sagittis congue augue egestas egestas magna ipsum vitae purus ipsum primis in cubilia
                            laoreet augue egestas luctus donec diam ociis nullam tempor sapien, eget orci gravida porta "
                        </p>
                        {/* Rating */}
                        <div className="review-rating">
                            <div className="stars-rating">
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                            </div>
                        </div>
                        {/* Testimonial Author */}
                        <p className="testimonial-autor">by Evelyn Martinez</p>
                    </div>
                </SwiperSlide>
                {/* TESTIMONIAL-3 */}
                <SwiperSlide className="review-1" tag="li">
                    <div className="review-1-txt">
                        {/* Testimonial Author Avatar */}
                        <img src="/images/review-author-3.jpg" alt="testimonial-avatar" />
                        {/* Text */}
                        <p>" Mauris donec ociis et magnis sapien etiam sapien sem sagittis congue augue. An orci nullam
                            tempor sapien, eget orci gravida donec enim ipsum porta justo integer at odio velna auctor "
                        </p>
                        {/* Rating */}
                        <div className="review-rating">
                            <div className="stars-rating">
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star-half-alt" />
                            </div>
                        </div>
                        {/* Testimonial Author */}
                        <p className="testimonial-autor">by Robert Peterson</p>
                    </div>
                </SwiperSlide>
                {/* TESTIMONIAL-4 */}
                <SwiperSlide className="review-1" tag="li">
                    <div className="review-1-txt">
                        {/* Testimonial Author Avatar */}
                        <img src="/images/review-author-4.jpg" alt="testimonial-avatar" />
                        {/* Text */}
                        <p>" An orci nullam tempor sapien, eget orci gravida donec enim ipsum porta justo integer at
                            odio velna auctor. Egestas magna ipsum vitae purus ipsum primis in cubilia laoreet augue "
                        </p>
                        {/* Rating */}
                        <div className="review-rating">
                            <div className="stars-rating">
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star-half-alt" />
                            </div>
                        </div>
                        {/* Testimonial Author */}
                        <p className="testimonial-autor">by Leslie Serpas</p>
                    </div>
                </SwiperSlide>
                {/* TESTIMONIAL #5 */}
                <SwiperSlide className="review-1" tag="li">
                    <div className="review-1-txt">
                        {/* Testimonial Author Avatar */}
                        <img src="/images/review-author-5.jpg" alt="testimonial-avatar" />
                        {/* Text */}
                        <p>" Egestas egestas magna ipsum vitae purus efficitur ipsum primis in cubilia laoreet augue
                            egestas luctus donec ociis vitae purus diam integer congue magna undo impedit lacus dolor "
                        </p>
                        {/* Rating */}
                        <div className="review-rating">
                            <div className="stars-rating">
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                            </div>
                        </div>
                        {/* Testimonial Author */}
                        <p className="testimonial-autor">by Amelie Newlove</p>
                    </div>
                </SwiperSlide>
            </Swiper>
            {/* <div className="swiper-pagination block-gallery-pagination" /> */}
        </>
    )
}
