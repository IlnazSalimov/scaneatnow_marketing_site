import Link from "next/link";

export default function Promo5({helperCls}) {
    return (
        <>
            <section id="promo-5" className={`wide-100 promo-section division ${helperCls ? helperCls : ""}`}>
                <div className="container">
                    {/* SECTION TITLE */}
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <div className="section-title mb-60 text-center">
                                {/* Title 	*/}
                                <h2 className="h2-xl red-color">From Italy, With Love</h2>
                                {/* Text */}
                                <p className="p-xl">Aliquam a augue suscipit, luctus neque purus ipsum neque undo dolor
                                    primis libero tempus, blandit a cursus varius magna
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row d-flex align-items-center">
                        {/* PROMO BOX-1 */}
                        <div className="col-lg-6">
                            <Link href="/product-single">
                                <div id="pb-5-1" className="pbox-5 bg-lightgrey">
                                    <div className="pbox-5-txt">
                                        {/* Title */}
                                        <h4 className="h4-xs coffee-color">Buffalo Chicken Pizza</h4>
                                        {/* Item Code */}
                                        <span className="item-code">Code: 1039</span>
                                        {/* Image */}
                                        <div className="pbox-5-img text-center mt-25 rel">
                                            {/* Image */}
                                            <img className="img-fluid" src="/images/menu/pizza-04.png" alt="promo-image" />
                                            {/* Price Badge */}
                                            <div className="price-badge-sm bg-fixed">
                                                <div className="badge-txt">
                                                    <h5 className="h5-sm">Only</h5>
                                                    <h4 className="h4-md">$11.99</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>	{/* END PROMO BOX-1 */}
                        {/* PROMO BOX-2 */}
                        <div className="col-sm-6 col-lg-3">
                            <Link href="/product-single">
                                <div id="pb-5-2" className="pbox-5">
                                    <div className="pbox-5-txt">
                                        {/* Title */}
                                        <h4 className="h4-xs coffee-color">Prosciutto &amp; Arugula Pizza</h4>
                                        {/* Item Code */}
                                        <span className="item-code">Code: 1046</span>
                                        {/* Image */}
                                        <div className="pbox-5-img text-center mt-25">
                                            <img className="img-fluid" src="/images/menu/pizza-06.png" alt="promo-image" />
                                        </div>
                                        {/* Price */}
                                        <div className="pbox-5-price">
                                            <p>Small 12" <span className="red-color"> $12.45</span></p>
                                            <p>Large 16" <span className="red-color"> $20.95</span></p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>	{/* END PROMO BOX-2 */}
                        {/* PROMO BOX-3 */}
                        <div className="col-sm-6 col-lg-3">
                            <Link href="/product-single">
                                <div id="pb-5-3" className="pbox-5">
                                    <div className="pbox-5-txt">
                                        {/* Title */}
                                        <h4 className="h4-xs coffee-color">Spicy BBQ Chicken Pizza</h4>
                                        {/* Item Code */}
                                        <span className="item-code">Code: 1050</span>
                                        {/* Image */}
                                        <div className="pbox-5-img text-center mt-25">
                                            <img className="img-fluid" src="/images/menu/pizza-03.png" alt="promo-image" />
                                        </div>
                                        {/* Price */}
                                        <div className="pbox-5-price">
                                            <p>Small 12" <span className="red-color"> $13.99</span></p>
                                            <p>Large 16" <span className="red-color"> $23.45</span></p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>	{/* END PROMO BOX-3 */}
                    </div>    {/* End row */}
                </div>	   {/* End container */}
            </section>
        </>
    )
}
