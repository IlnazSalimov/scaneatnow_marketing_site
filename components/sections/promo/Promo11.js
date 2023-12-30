import Link from 'next/link'

export default function Promo11({helperCls}) {
    return (
        <>
            <section id="promo-11" className={`bg-fixed promo-section division ${helperCls ? helperCls : ""}`}>
                <div className="container">
                    <div className="row d-flex align-items-center">
                        {/* PROMO TEXT */}
                        <div className="col-md-5 col-lg-4">
                            <div className="pbox-11-txt mb-40 white-color">
                                {/* Title */}
                                <h3 className="h3-lg">The</h3>
                                <h2>County General</h2>
                                {/* Text */}
                                <p className="p-md">Semper lacus cursus porta a primis feugiat ligula risus auctor rhoncus semper undo</p>
                                {/* Button */}
                                <Link href="/product-single" className="btn btn-lg btn-red tra-white-hover">Order Now</Link>
                            </div>
                        </div>
                        {/* PROMO IMAGE */}
                        <div className="col-md-7 col-lg-6">
                            <div className="pbox-11-img mb-40">
                                {/* Image */}
                                <img className="img-fluid" src="/images/promo-11-img.png" alt="promo-image" />
                                {/* Price Badge */}
                                <div className="red-badge price-badge-lg bg-fixed">
                                    <div className="badge-txt white-color">
                                        <h5 className="h5-xl">Only</h5>
                                        <h3 className="h3-sm">$9.99</h3>
                                        <span className="item-code">Code: 0841</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* PROMO LINKS */}
                        <div className="col-lg-2">
                            {/* Link */}
                            <div className="pbox-11-link text-center white-color">
                                <Link href="/product-single">
                                    <img className="img-fluid" src="/images/menu/burger-02.png" alt="promo-image" />
                                    <p>Ultimate Bacon Burger</p>
                                </Link>
                            </div>
                            {/* Link */}
                            <div className="pbox-11-link text-center mb-40 white-color">
                                <Link href="/product-single">
                                    <img className="img-fluid" src="/images/menu/burger-05.png" alt="promo-image" />
                                    <p>Grilled Chicken Burger</p>
                                </Link>
                            </div>
                        </div>
                    </div>    {/* End row */}
                </div>	   {/* End container */}
            </section>
        </>
    )
}
