import Link from "next/link";

export default function Hero4({helperCls}) {
    return (
        <>
            <section id="hero-4" className={`bg-fixed hero-section division ${helperCls ? helperCls : ""}`}>
                <div className="container">
                    <div className="row d-flex align-items-center">
                        {/* HERO IMAGE */}
                        <div className="col-md-7">
                            <div className="hero-4-img text-center">
                                <img className="img-fluid" src="/images/hero-4-img.png" alt="hero-image" />
                                {/* Price Badge */}
                                <div className="price-badge-md bg-fixed 1white-color">
                                    <div className="badge-txt">
                                        <h4 className="h4-xs">Only</h4>
                                        <h3 className="h3-lg">$6.99</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* HERO TEXT */}
                        <div className="col-md-5">
                            <div className="hero-4-txt text-center white-color">
                                {/* Title */}
                                <h2>New Burger</h2>
                                <h3>With Onion</h3>
                                {/* Text */}
                                <p className="p-md">Feugiat primis ligula risus auctor laoreet augue egestas mauris viverra tortor in
                                    iaculis pretium at magna mauris ipsum primis rhoncus feugiat
                                </p>
                                {/* Button */}
                                <Link href="/product-single" className="btn btn-md btn-yellow tra-white-hover">Order Now</Link>
                            </div>
                        </div>	 {/* END HERO TEXT */}
                    </div>	  {/* End row */}
                </div>	   {/* End container */}
            </section>
        </>
    )
}
