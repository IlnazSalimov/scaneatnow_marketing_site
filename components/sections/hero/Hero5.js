
export default function Hero5({helperCls}) {
    return (
        <>
            <section id="hero-5" className={`hero-section ${helperCls ? helperCls : ""}`}>
                <div className="bg-fixed bg-inner division">
                    {/* HERO TEXT */}
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="hero-5-txt text-center white-color">
                                    {/* Title */}
                                    <h2>Pizza</h2>
                                    {/* Image */}
                                    <div className="hero-5-img">
                                        <img className="img-fluid" src="/images/hero-5-img.png" alt="hero-image" />
                                    </div>
                                </div>
                            </div>
                        </div>	 {/* End row */}
                    </div>	 {/* END HERO TEXT */}
                    {/* SECTION OVERLAY */}
                    <div className="bg-fixed white-overlay-wave" />
                </div>	   {/* End Inner Content */}
            </section>
        </>
    )
}
