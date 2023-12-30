
export default function About7({ helperCls }) {
    return (
        <>
            <section id="about-7" className={`about-section division ${helperCls ? helperCls : ""}`}>
                <div className="container">
                    <div className="abox-4-wrapper ico-80">
                        <div className="row">
                            {/* ABOUT BOX #1 */}
                            <div className="col-md-4 col-lg-4">
                                <div className="abox-4 text-center mb-40">
                                    {/* Icon */}
                                    <div className="abox-4-ico"><span className="flaticon-pizza-4" /></div>
                                    {/* Title */}
                                    <h5 className="h5-lg">Original Recipes</h5>
                                    {/* Text */}
                                    <p>Porta semper lacus cursus, feugiat primis ultrice in ligula risus auctor tempus feugiat dolor impedit
                                        felis magna dolor vitae
                                    </p>
                                </div>
                            </div>
                            {/* ABOUT BOX #2 */}
                            <div className="col-md-4 col-lg-4">
                                <div className="abox-4 text-center mb-40">
                                    {/* Icon */}
                                    <div className="abox-4-ico"><span className="flaticon-salad" /></div>
                                    {/* Title */}
                                    <h5 className="h5-lg">Qualty Foods</h5>
                                    {/* Text */}
                                    <p>Porta semper lacus cursus, feugiat primis ultrice in ligula risus auctor tempus feugiat dolor impedit
                                        felis magna dolor vitae
                                    </p>
                                </div>
                            </div>
                            {/* ABOUT BOX #3 */}
                            <div className="col-md-4 col-lg-4">
                                <div className="abox-4 text-center mb-40">
                                    {/* Icon */}
                                    <div className="abox-4-ico"><span className="flaticon-moped" /></div>
                                    {/* Title */}
                                    <h5 className="h5-lg">Fastest Delivery</h5>
                                    {/* Text */}
                                    <p>Porta semper lacus cursus, feugiat primis ultrice in ligula risus auctor tempus feugiat dolor impedit
                                        felis magna dolor vitae
                                    </p>
                                </div>
                            </div>
                        </div>	   {/* End row */}
                    </div>
                </div>	   {/* End container */}
            </section>
        </>
    )
}
