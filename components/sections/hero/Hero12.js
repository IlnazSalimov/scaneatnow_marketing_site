
export default function Hero12({helperCls}) {
    return (
        <>
            <section id="hero-12" className={`bg-02 hero-section division ${helperCls ? helperCls : ""}`}>
                <div className="container">
                    <div className="row d-flex align-items-center">
                        {/* HERO TEXT */}
                        <div className="col-lg-10 offset-lg-1">
                            <div className="hero-12-txt white-color text-center">
                                {/* Title */}
                                <h3>Natural &amp; Fresh</h3>
                                <h2 className="salmon-color">Testo Sushi</h2>
                                {/* Text */}
                                <p className="p-xl lightgrey-color">Feugiat primis ligula risus auctor laoreet augue egestas mauris tortor
                                    and iaculis pretium undo viverra mauris ipsum magna posuere ligula
                                </p>
                                {/* Icons List */}
                                <div className="hbox-1-wrapper ico-80">
                                    <div className="row">
                                        {/* ABOUT BOX #1 */}
                                        <div className="col-sm-3">
                                            <div className="hbox-1 mb-40">
                                                {/* Icon */}
                                                <img className="img-fluid" src="/images/rolls.png" alt="hero-box-image" />
                                                {/* Text */}
                                                <h5 className="h5-md">Rolls</h5>
                                            </div>
                                        </div>
                                        {/* ABOUT BOX #2 */}
                                        <div className="col-sm-3">
                                            <div className="hbox-1 mb-40">
                                                {/* Icon */}
                                                <img className="img-fluid" src="/images/sashimi.png" alt="hero-box-image" />
                                                {/* Text */}
                                                <h5 className="h5-md">Sashimi</h5>
                                            </div>
                                        </div>
                                        {/* ABOUT BOX #3 */}
                                        <div className="col-sm-3">
                                            <div className="hbox-1 mb-40">
                                                {/* Icon */}
                                                <img className="img-fluid" src="/images/nigiri.png" alt="hero-box-image" />
                                                {/* Text */}
                                                <h5 className="h5-md">Nigiri</h5>
                                            </div>
                                        </div>
                                        {/* ABOUT BOX #4 */}
                                        <div className="col-sm-3">
                                            <div className="hbox-1 mb-40">
                                                {/* Icon */}
                                                <img className="img-fluid" src="/images/ramen.png" alt="hero-box-image" />
                                                {/* Text */}
                                                <h5 className="h5-md">Ramen</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>	{/* End Icons List */}
                            </div>
                        </div>	 {/* END HERO TEXT */}
                    </div>	  {/* End row */}
                </div>	   {/* End container */}
            </section>
        </>
    )
}
