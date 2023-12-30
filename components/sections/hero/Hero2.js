
export default function Hero2({helperCls}) {
    return (
        <>
            <section id="hero-2" className={`bg-fixed hero-section division ${helperCls ? helperCls : ""}`}>
                <div className="bg-fixed bg-inner division">
                    {/* HERO TEXT */}
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-10 offset-lg-1">
                                <div className="hero-2-txt text-center">
                                    {/* Title */}
                                    <h2 className="red-color shadow-txt-white">Big burger, little money</h2>
                                    {/* Image */}
                                    <div className="hero-2-img">
                                        <img className="img-fluid" src="/images/hero-2-img.png" alt="hero-image" />
                                        {/* Price Badge */}
                                        <div className="price-badge-sm bg-fixed white-color1">
                                            <div className="badge-txt">
                                                <h5 className="h5-md">From</h5>
                                                <h4 className="h4-lg">$6.99</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>	 {/* End row */}
                    </div>	 {/* END HERO TEXT */}
                    {/* SECTION OVERLAY */}
                    <div className="bg-fixed white-overlay-wave" />
                </div>	   {/* End Bg Inner */}
            </section>
        </>
    )
}
