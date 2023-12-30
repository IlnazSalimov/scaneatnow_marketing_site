import Promo14Slider from "@/components/slider/Promo14Slider";
import Link from "next/link";

export default function Promo14({helperCls}) {
    return (
        <>
            <section id="promo-14" className={`wide-100 promo-section division ${helperCls ? helperCls : ""}`}>
                <div className="container">
                    <div className="row d-flex align-items-center">
                        {/* PROMO BOX #1 */}
                        <div className="col-lg-5">
                            <Link href="/product-single">
                                <div id="pb-14-1" className="pbox-14-item bg-yellow">
                                    {/* Image */}
                                    <div className="pbox-14-img text-center mb-25 rel">
                                        {/* Image */}
                                        <img className="img-fluid" src="/images/menu/burger-06.png" alt="promo-image" />
                                        {/* Price Badge */}
                                        <div className="red-badge price-badge-sm bg-fixed">
                                            <div className="badge-txt white-color">
                                                <h5 className="h5-sm">Only</h5>
                                                <h4 className="h4-md">$7.99</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pbox-14-txt">
                                        {/* Title */}
                                        <h5 className="h5-xl">Smokey House Burger</h5>
                                        {/* Description */}
                                        <p>Beef patty, cheddar cheese, onion, lettuce, tomatoes, pickles</p>
                                    </div>
                                </div>
                            </Link>
                        </div>	{/* END PROMO BOX #1 */}
                        {/* PROMO BOXS CAROUSEL */}
                        <div className="col-lg-7">
                            <div className="pbox-carousel">
                                <Promo14Slider />
                            </div>
                        </div>	{/* END PROMO BOXS CAROUSEL */}
                    </div>    {/* End row */}
                </div>	   {/* End container */}
            </section>
        </>
    )
}
