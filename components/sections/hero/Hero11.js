import Link from "next/link";

export default function Hero11({helperCls}) {
    return (
        <>
            <section id="hero-11" className={`bg-fixed hero-section division ${helperCls ? helperCls : ""}`}>
                <div className="container">
                    <div className="row d-flex align-items-center">
                        {/* HERO IMAGE */}
                        <div className="col-md-6 col-lg-7">
                            <div className="hero-11-img text-center">
                                <img className="img-fluid" src="/images/hero-11-img.png" alt="hero-image" />
                            </div>
                        </div>
                        {/* HERO TEXT */}
                        <div className="col-md-6 col-lg-5">
                            <div className="hero-11-txt">
                                {/* Title */}
                                <h3>Japanese</h3>
                                <h2>Sushi</h2>
                                <h4>Natural &amp; Fresh</h4>
                                {/* Text */}
                                <p className="p-lg grey-color">Feugiat primis ligula risus auctor laoreet augue egestas mauris viverra tortor and
                                    iaculis pretium undo at magna mauris ipsum magna porta
                                </p>
                                {/* Button */}
                                <Link href="/menu-3" className="btn btn-lg btn-salmon tra-salmon-hover">Order Now</Link>
                            </div>
                        </div>	 {/* END HERO TEXT */}
                    </div>	  {/* End row */}
                </div>	   {/* End container */}
            </section>
        </>
    )
}
