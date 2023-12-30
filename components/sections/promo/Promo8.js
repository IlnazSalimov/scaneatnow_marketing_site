import Link from "next/link";

export default function Promo8({helperCls}) {
    return (
        <>
            <section id="promo-8" className={`wide-100 promo-section division ${helperCls ? helperCls : ""}`}>
                <div className="container">
                    <div className="row">
                        {/* PROMO BOX-1 */}
                        <div className="col-md-4">
                            <div className="pbox-8 row d-flex align-items-center">
                                {/* Image */}
                                <div className="col-lg-6 rel">
                                    <div className="pbox-8-img">
                                        <div className="hover-overlay">
                                            {/* Image */}
                                            <img className="img-fluid" src="/images/img-24.jpg" alt="promo-image" />
                                            {/* Item Code */}
                                            <span className="item-code bg-yellow">Code: 0961</span>
                                        </div>
                                    </div>
                                </div>
                                {/* Text */}
                                <div id="pb-8-1" className="col-lg-6">
                                    <div className="pbox-8-txt">
                                        {/* Title */}
                                        <h5 className="h5-sm coffee-color"><Link href="/product-single">Tuna Salad</Link></h5>
                                        {/* Text */}
                                        <p>Vitae sapien and justo aliquet and molestie</p>
                                        {/* Price */}
                                        <div className="pbox-8-price">
                                            <h5 className="h5-xl"><span className="red-color">$9.50</span></h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>	{/* END PROMO BOX-1 */}
                        {/* PROMO BOX-2 */}
                        <div className="col-md-4">
                            <div className="pbox-8 row d-flex align-items-center">
                                {/* Image */}
                                <div className="col-lg-6 rel">
                                    <div className="pbox-8-img">
                                        <div className="hover-overlay">
                                            {/* Image */}
                                            <img className="img-fluid" src="/images/img-21.jpg" alt="promo-image" />
                                            {/* Item Code */}
                                            <span className="item-code bg-yellow">Code: 2136</span>
                                        </div>
                                    </div>
                                </div>
                                {/* Text */}
                                <div id="pb-8-2" className="col-lg-6">
                                    <div className="pbox-8-txt">
                                        {/* Title */}
                                        <h5 className="h5-sm coffee-color"><Link href="/product-single">Crispy Chicken</Link></h5>
                                        {/* Text */}
                                        <p>Vitae sapien and justo aliquet and molestie</p>
                                        {/* Price */}
                                        <div className="pbox-8-price">
                                            <h5 className="h5-xl"><span className="red-color">$7.99</span></h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>	{/* END PROMO BOX-2 */}
                        {/* PROMO BOX-3 */}
                        <div className="col-md-4">
                            <div className="pbox-8 row d-flex align-items-center pbox-8-last">
                                {/* Image */}
                                <div className="col-lg-6 rel">
                                    <div className="pbox-8-img">
                                        <div className="hover-overlay">
                                            {/* Image */}
                                            <img className="img-fluid" src="/images/img-25.jpg" alt="promo-image" />
                                            {/* Item Code */}
                                            <span className="item-code bg-yellow">Code: 2164</span>
                                        </div>
                                    </div>
                                </div>
                                {/* Text */}
                                <div id="pb-8-3" className="col-lg-6">
                                    <div className="pbox-8-txt">
                                        {/* Title */}
                                        <h5 className="h5-sm coffee-color"><Link href="/product-single">Egg Sandwich</Link></h5>
                                        {/* Text */}
                                        <p>Vitae sapien and justo aliquet and molestie</p>
                                        {/* Price */}
                                        <div className="pbox-8-price">
                                            <h5 className="h5-xl"><span className="red-color">$13.49</span></h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>	{/* END PROMO BOX-3 */}
                    </div>    {/* End row */}
                </div>	   {/* End container */}
            </section>
        </>
    )
}
