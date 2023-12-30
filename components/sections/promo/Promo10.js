import Link from "next/link";

export default function Promo10({helperCls}) {
    return (
        <>
            <section id="promo-10" className={`bg-03 promo-section division ${helperCls ? helperCls : ""}`}>
                <div className="container">
                    <div className="row d-flex align-items-center">
                        {/* PROMO TEXT */}
                        <div className="col-md-6 col-lg-5">
                            <div className="pbox-10-txt white-color">
                                {/* Text */}
                                <h2>When taste buds speaks</h2>
                                {/* Text */}
                                <p className="p-md">Semper lacus cursus porta, feugiat primis ligula risus auctor and rhoncus in ultrice
                                    ligula purus ipsum primis in cubilia augue
                                </p>
                                {/* Call Button */}
                                <h4>Order Now: <span className="yellow-color"><Link href="/tel:123456789">789-654-3210</Link></span></h4>
                            </div>
                        </div>
                        {/* PROMO IMAGE */}
                        <div className="col-md-6 col-lg-7">
                            <div className="pbox-10-img rel">
                                {/* Image */}
                                <img className="img-fluid" src="/images/promo-10-img.png" alt="promo-image" />
                                {/* Price Badge */}
                                <div className="red-badge price-badge-md bg-fixed">
                                    <div className="badge-txt white-color">
                                        <h5 className="h5-xl">Only</h5>
                                        <h4 className="h4-xl">$14.49</h4>
                                        <span className="item-code">Code: 1782</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>    {/* End row */}
                </div>	   {/* End container */}
            </section>
        </>
    )
}
