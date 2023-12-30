
export default function Hero10({helperCls}) {
    return (
        <>
            <section id="hero-10" className={`bg-fixed hero-section division ${helperCls ? helperCls : ""}`}>
                <div className="container">
                    <div className="row d-flex align-items-center">
                        {/* HERO TEXT */}
                        <div className="col-lg-10 offset-lg-1">
                            <div className="hero-10-txt text-center white-color">
                                {/* Title */}
                                <h2>BBQ</h2>
                                <h3>Hot &amp; Delicious</h3>
                                {/* Icons List */}
                                <div className="hbox-2-wrapper ico-90">
                                    <div className="row">
                                        {/* ABOUT BOX #1 */}
                                        <div className="col-sm-3">
                                            <div className="hbox-2 mb-40">
                                                {/* Icon */}
                                                <div className="hbox-2-ico"><span className="flaticon-steak-2" /></div>
                                                {/* Text */}
                                                <h5 className="h5-sm">Steaks</h5>
                                            </div>
                                        </div>
                                        {/* ABOUT BOX #2 */}
                                        <div className="col-sm-3">
                                            <div className="hbox-2 mb-40">
                                                {/* Icon */}
                                                <div className="hbox-2-ico"><span className="flaticon-roast" /></div>
                                                {/* Text */}
                                                <h5 className="h5-sm">Chicken</h5>
                                            </div>
                                        </div>
                                        {/* ABOUT BOX #3 */}
                                        <div className="col-sm-3">
                                            <div className="hbox-2 mb-40">
                                                {/* Icon */}
                                                <div className="hbox-2-ico"><span className="flaticon-sausage-2" /></div>
                                                {/* Text */}
                                                <h5 className="h5-sm">Sausages</h5>
                                            </div>
                                        </div>
                                        {/* ABOUT BOX #4 */}
                                        <div className="col-sm-3">
                                            <div className="hbox-2 mb-40">
                                                {/* Icon */}
                                                <div className="hbox-2-ico"><span className="flaticon-ribs" /></div>
                                                {/* Text */}
                                                <h5 className="h5-sm">Ribs</h5>
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
