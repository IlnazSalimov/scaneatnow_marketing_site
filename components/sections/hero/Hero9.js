import Link from "next/link";

export default function Hero9({helperCls}) {
    return (
        <>
            <section id="hero-9" className={`bg-03 hero-section ${helperCls ? helperCls : ""}`}>
                <div className="bg-fixed bg-inner division">
                    {/* HERO TEXT */}
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="hero-9-txt text-center white-color">
                                    {/* Title */}
                                    <h2>When spices start speaking</h2>
                                    {/* Text */}
                                    <p className="p-xl">Feugiat primis ligula risus auctor laoreet augue egestas mauris viverra tortor in iaculis
                                        pretium at magna mauris ipsum primis rhoncus egestas
                                    </p>
                                    {/* Button */}
                                    <Link href="/menu-3" className="btn btn-lg btn-meat tra-white-hover">Order Now</Link>
                                </div>
                            </div>
                        </div>	 {/* End row */}
                    </div>	 {/* END HERO TEXT */}
                </div>	   {/* End container */}
            </section>
        </>
    )
}
