// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper";


export default function Gallery3Slider() {
    return (
        <>
            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                slidesPerView={4}
                spaceBetween={0}
                // centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                // pagination={{
                //     clickable: true,
                //     el: '.block-gallery-pagination'
                // }}
                // navigation={{
                //     prevEl: ".prev",
                //     nextEl: ".next",
                // }}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        // spaceBetween: 30,
                    },
                    575: {
                        slidesPerView: 2,
                        // spaceBetween: 30,
                    },
                    767: {
                        slidesPerView: 3,
                        // spaceBetween: 30,
                    },
                    991: {
                        slidesPerView: 3,
                        // spaceBetween: 30,
                    },
                    1199: {
                        slidesPerView: 4,
                        // spaceBetween: 30,
                    },
                    1350: {
                        slidesPerView: 4,
                        // spaceBetween: 30,
                    },
                }}
                className="images-carousel"
            >


                <SwiperSlide className="gallery-img">
                    <Link href="/images/gallery/img-01.jpg" className="image-link">
                        <div className="hover-overlay">
                            <img className="img-fluid" src="/images/gallery/img-01.jpg" alt="gallery-image" />
                            <div className="item-overlay" />

                            <div className="img-meta white-color">
                                <h5 className="h5-md">Classic California</h5>
                                <div className="txt-block-rating">
                                    <div className="stars-rating">
                                        <span>4.5</span>
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star-half-alt" />
                                        <span>(23)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </SwiperSlide>

                <SwiperSlide className="gallery-img">
                    <Link href="/images/gallery/img-02.jpg" className="image-link">
                        <div className="hover-overlay">
                            <img className="img-fluid" src="/images/gallery/img-02.jpg" alt="gallery-image" />
                            <div className="item-overlay" />

                            <div className="img-meta white-color">
                                <h5 className="h5-md">Margherita Pizza</h5>
                                <div className="txt-block-rating">
                                    <div className="stars-rating">
                                        <span>4.52</span>
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star-half-alt" />
                                        <span>(58)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </SwiperSlide>

                <SwiperSlide className="gallery-img">
                    <Link href="/images/gallery/img-03.jpg" className="image-link">
                        <div className="hover-overlay">
                            <img className="img-fluid" src="/images/gallery/img-03.jpg" alt="gallery-image" />
                            <div className="item-overlay" />

                            <div className="img-meta white-color">
                                <h5 className="h5-md">Grilled Ribs</h5>
                                <div className="txt-block-rating">
                                    <div className="stars-rating">
                                        <span>4.9</span>
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <span>(69)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </SwiperSlide>

                <SwiperSlide className="gallery-img">
                    <Link href="/images/gallery/img-04.jpg" className="image-link">
                        <div className="hover-overlay">
                            <img className="img-fluid" src="/images/gallery/img-04.jpg" alt="gallery-image" />
                            <div className="item-overlay" />

                            <div className="img-meta white-color">
                                <h5 className="h5-md">Field Greens Pizza</h5>
                                <div className="txt-block-rating">
                                    <div className="stars-rating">
                                        <span>4.38</span>
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star-half-alt" />
                                        <span>(41)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </SwiperSlide>

                <SwiperSlide className="gallery-img">
                    <Link href="/images/gallery/img-05.jpg" className="image-link">
                        <div className="hover-overlay">
                            <img className="img-fluid" src="/images/gallery/img-05.jpg" alt="gallery-image" />
                            <div className="item-overlay" />

                            <div className="img-meta white-color">
                                <h5 className="h5-md">Mini Chicken Pizza</h5>
                                <div className="txt-block-rating">
                                    <div className="stars-rating">
                                        <span>5</span>
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <span>(86)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </SwiperSlide>

                <SwiperSlide className="gallery-img">
                    <Link href="/images/gallery/img-06.jpg" className="image-link">
                        <div className="hover-overlay">
                            <img className="img-fluid" src="/images/gallery/img-06.jpg" alt="gallery-image" />
                            <div className="item-overlay" />

                            <div className="img-meta white-color">
                                <h5 className="h5-md">Eggs Benedict Burger</h5>
                                <div className="txt-block-rating">
                                    <div className="stars-rating">
                                        <span>4.65</span>
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star-half-alt" />
                                        <span>(30)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </SwiperSlide>

                <SwiperSlide className="gallery-img">
                    <Link href="/images/gallery/img-07.jpg" className="image-link">
                        <div className="hover-overlay">
                            <img className="img-fluid" src="/images/gallery/img-07.jpg" alt="gallery-image" />
                            <div className="item-overlay" />

                            <div className="img-meta white-color">
                                <h5 className="h5-md">Double Bacon Burger</h5>
                                <div className="txt-block-rating">
                                    <div className="stars-rating">
                                        <span>4.85</span>
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <span>(71)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </SwiperSlide>

                <SwiperSlide className="gallery-img">
                    <Link href="/images/gallery/img-08.jpg" className="image-link">
                        <div className="hover-overlay">
                            <img className="img-fluid" src="/images/gallery/img-08.jpg" alt="gallery-image" />
                            <div className="item-overlay" />

                            <div className="img-meta white-color">
                                <h5 className="h5-md">Classic California</h5>
                                <div className="txt-block-rating">
                                    <div className="stars-rating">
                                        <span>4.64</span>
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star-half-alt" />
                                        <span>(17)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </SwiperSlide>
            </Swiper>
            {/* <div className="swiper-pagination block-gallery-pagination" /> */}
        </>
    )
}
