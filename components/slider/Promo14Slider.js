// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper";


export default function Promo14Slider() {
    return (
        <>
            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                slidesPerView={2}
                spaceBetween={20}
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
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    575: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    767: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    991: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1199: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1350: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                }}
                className="promo-8-carousel"
            >

                <SwiperSlide>

                    <div className="pbox-14-img rel">

                        <img className="img-fluid" src="/images/menu/side-04.png" alt="menu-image" />

                        <div className="pbox-14-price bg-coffee">
                            <h5 className="h5-xs yellow-color">$4.99</h5>
                        </div>

                        <div className="item-rating">
                            <div className="stars-rating stars-lg">
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star-half-alt" />
                            </div>
                        </div>

                        <div className="like-ico ico-20">
                            <Link href="#"><span className="flaticon-heart" /></Link>
                        </div>
                    </div>

                    <div className="pbox-14-txt rel">

                        <h5 className="h5-md">Chicken Nuggets</h5>

                        <p className="grey-color">Integer ultrice an aligula lectus purus magna and tempor</p>

                        <Link href="/product-single" className="btn btn-sm btn-tra-grey yellow-hover">
                            <span className="flaticon-shopping-bag" /> Add to Cart
                        </Link>
                    </div>
                </SwiperSlide>

                <SwiperSlide>

                    <div className="pbox-14-img rel">

                        <img className="img-fluid" src="/images/menu/side-03.png" alt="menu-image" />

                        <div className="pbox-14-price bg-coffee">
                            <h5 className="h5-xs yellow-color">$5.25</h5>
                        </div>

                        <div className="item-rating">
                            <div className="stars-rating stars-lg">
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star-half-alt" />
                            </div>
                        </div>

                        <div className="like-ico ico-20">
                            <Link href="#"><span className="flaticon-heart" /></Link>
                        </div>
                    </div>

                    <div className="pbox-14-txt rel">

                        <h5 className="h5-md">Mozzarella Sticks</h5>

                        <p className="grey-color">Integer ultrice an aligula lectus purus magna and tempor</p>

                        <Link href="/product-single" className="btn btn-sm btn-tra-grey yellow-hover">
                            <span className="flaticon-shopping-bag" /> Add to Cart
                        </Link>
                    </div>
                </SwiperSlide>

                <SwiperSlide>

                    <div className="pbox-14-img rel">

                        <img className="img-fluid" src="/images/menu/side-02.png" alt="menu-image" />

                        <div className="pbox-14-price bg-coffee">
                            <h5 className="h5-xs yellow-color">$3.69</h5>
                        </div>

                        <div className="item-rating">
                            <div className="stars-rating stars-lg">
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star-half-alt" />
                            </div>
                        </div>

                        <div className="like-ico ico-20">
                            <Link href="#"><span className="flaticon-heart" /></Link>
                        </div>
                    </div>

                    <div className="pbox-14-txt rel">

                        <h5 className="h5-md">French Fries</h5>

                        <p className="grey-color">Integer ultrice an aligula lectus purus magna and tempor</p>

                        <Link href="/product-single" className="btn btn-sm btn-tra-grey yellow-hover">
                            <span className="flaticon-shopping-bag" /> Add to Cart
                        </Link>
                    </div>
                </SwiperSlide>

                <SwiperSlide>

                    <div className="pbox-14-img rel">

                        <img className="img-fluid" src="/images/menu/side-01.png" alt="menu-image" />

                        <div className="pbox-14-price bg-coffee">
                            <h5 className="h5-xs yellow-color">$3.85</h5>
                        </div>

                        <div className="item-rating">
                            <div className="stars-rating stars-lg">
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star-half-alt" />
                            </div>
                        </div>

                        <div className="like-ico ico-20">
                            <Link href="#"><span className="flaticon-heart" /></Link>
                        </div>
                    </div>

                    <div className="pbox-14-txt rel">

                        <h5 className="h5-md">Onion Rings</h5>

                        <p className="grey-color">Integer ultrice an aligula lectus purus magna and tempor</p>

                        <Link href="/product-single" className="btn btn-sm btn-tra-grey yellow-hover">
                            <span className="flaticon-shopping-bag" /> Add to Cart
                        </Link>
                    </div>
                </SwiperSlide>

                <SwiperSlide>

                    <div className="pbox-14-img rel">

                        <img className="img-fluid" src="/images/menu/side-06.png" alt="menu-image" />

                        <div className="pbox-14-price bg-coffee">
                            <h5 className="h5-xs yellow-color">$5.25</h5>
                        </div>

                        <div className="item-rating">
                            <div className="stars-rating stars-lg">
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star-half-alt" />
                            </div>
                        </div>

                        <div className="like-ico ico-20">
                            <Link href="#"><span className="flaticon-heart" /></Link>
                        </div>
                    </div>

                    <div className="pbox-14-txt rel">

                        <h5 className="h5-md">Chicken Fingers</h5>

                        <p className="grey-color">Integer ultrice an aligula lectus purus magna and tempor</p>

                        <Link href="/product-single" className="btn btn-sm btn-tra-grey yellow-hover">
                            <span className="flaticon-shopping-bag" /> Add to Cart
                        </Link>
                    </div>
                </SwiperSlide>
            </Swiper>
            {/* <div className="swiper-pagination block-gallery-pagination" /> */}
        </>
    )
}
