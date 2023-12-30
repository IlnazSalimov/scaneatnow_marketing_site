import Link from "next/link";

export default function Promo4({ helperCls, newImg1, newImg2 }) {
    return (
        <>
            <div id="promo-4" className={`promo-section division ${helperCls ? helperCls : ""}`}>
                <div className="container">
                    <div className="row d-flex align-items-center">
                        {/* PROMO IMAGE-1 */}
                        <div className="col-md-4">
                            <Link href="/menu-3">
                                <div className="pbox-4">
                                    <div className="hover-overlay">
                                        <img className="img-fluid" src={`/images/${newImg1 ? newImg1 : "offer-8.jpg"}`} alt="promo-image" />
                                    </div>
                                </div>
                            </Link>
                        </div>
                        {/* PROMO IMAGE-2 */}
                        <div className="col-md-4">
                            <Link href="/menu-3">
                                <div className="pbox-4">
                                    <div className="hover-overlay">
                                        <img className="img-fluid" src={`/images/${newImg2 ? newImg2 : "offer-6.jpg"}`} alt="promo-image" />
                                    </div>
                                </div>
                            </Link>
                        </div>
                        {/* PROMO IMAGE-3 */}
                        <div className="col-md-4">
                            <Link href="/menu-3">
                                <div className="pbox-4 pbox-4-last">
                                    <div className="hover-overlay">
                                        <img className="img-fluid" src="/images/offer-7.jpg" alt="promo-image" />
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div> {/* End row */}
                </div>  {/* End container */}
            </div>
        </>
    )
}
