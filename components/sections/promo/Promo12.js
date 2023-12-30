
export default function Promo12({helperCls}) {
    return (
        <>
            <section id="promo-12" className={`promo-sectionpromo-section ${helperCls ? helperCls : ""}`}>
                <div className="bg-scroll bg-inner bg-02 division">
                    <div className="container white-color">
                        <div className="row d-flex align-items-center">
                            {/* PROMO TEXT */}
                            <div className="col-lg-5">
                                <div className="promo-12-txt">
                                    {/* Title */}
                                    <h2>Chicken Ranchero</h2>
                                    <h3>From <span className="red-color">$13.99</span></h3>
                                </div>
                            </div>	{/*END PROMO TEXT */}
                            {/* PROMO IMAGE */}
                            <div className="col-lg-7">
                                <div className="promo-12-img text-center">
                                    {/* Image */}
                                    <img className="img-fluid" src="/images/promo-12-img.png" alt="promo-image" />
                                    {/* Discount Badge */}
                                    <div className="discount-badge">
                                        <img src="/images/discount-badge-red.png" alt="promo-image" />
                                    </div>
                                </div>
                            </div>
                        </div>    {/* End row */}
                    </div>     {/* End container */}
                </div>    {/* End Inner Background */}
            </section>
        </>
    )
}
