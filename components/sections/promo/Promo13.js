import Link from "next/link";

export default function Promo13({helperCls}) {
    return (
        <>
            <section id="promo-13" className={`wide-60 promo-section division ${helperCls ? helperCls : ""}`}>
                <div className="container">
                    {/* SECTION TITLE */}
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <div className="section-title mb-60 text-center">
                                {/* Title 	*/}
                                <h2 className="h2-xl">Made Fresh Always</h2>
                                {/* Text */}
                                <p className="p-xl">Aliquam a augue suscipit, luctus neque purus ipsum neque undo dolor
                                    primis libero tempus, blandit a cursus varius magna
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row d-flex align-items-center">
                        {/* PROMO BOX #1 */}
                        <div className="col-md-4">
                            <Link href="/menu-3">
                                <div id="pb-13-1" className="pbox-13-item">
                                    {/* Image */}
                                    <div className="pbox-13-img text-center mb-25">
                                        <img className="img-fluid" src="/images/ramen.png" alt="promo-image" />
                                    </div>
                                    {/* Text */}
                                    <div className="pbox-13-txt">
                                        <h5 className="h5-lg">Soups &amp; Salads</h5>
                                        <p className="grey-color">Semper lacus cursus porta primis ligula risus tempus molestie purus a semper
                                            lacus at cursus porta
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </div>	{/* END PROMO BOX #2 */}
                        {/* PROMO BOX #2 */}
                        <div className="col-md-4">
                            <Link href="/menu-3">
                                <div id="pb-13-2" className="pbox-13-item bg-lightgrey">
                                    {/* Image */}
                                    <div className="pbox-13-img text-center mb-25">
                                        <img className="img-fluid" src="/images/set.png" alt="promo-image" />
                                    </div>
                                    {/* Text */}
                                    <div className="pbox-13-txt">
                                        <h5 className="h5-lg">Sushi &amp; Rolls</h5>
                                        <p className="grey-color">Semper lacus cursus porta primis ligula risus tempus molestie purus a semper
                                            lacus at cursus porta
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </div>	{/* END PROMO BOX #2 */}
                        {/* PROMO BOX #3 */}
                        <div className="col-md-4">
                            <Link href="/menu-3">
                                <div id="pb-13-3" className="pbox-13-item">
                                    {/* Image */}
                                    <div className="pbox-13-img text-center mb-25 rel">
                                        <img className="img-fluid" src="/images/sweets.png" alt="promo-image" />
                                    </div>
                                    {/* Text */}
                                    <div className="pbox-13-txt">
                                        <h5 className="h5-lg">Sweets &amp; Desserts</h5>
                                        <p className="grey-color">Semper lacus cursus porta primis ligula risus tempus molestie purus a semper
                                            lacus at cursus porta
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </div>	{/* END PROMO BOX #3 */}
                    </div>    {/* End row */}
                </div>	   {/* End container */}
            </section>
        </>
    )
}
