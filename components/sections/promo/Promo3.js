import Link from 'next/link'

export default function Promo3({ helperCls }) {
    return (
        <>
            <div id="promo-3" className={`promo-section division ${helperCls ? helperCls : ""}`}>
                <div className="container">
                    <div className="row d-flex align-items-center">
                        {/* PROMO IMAGE-1 */}
                        <div className="col-md-6">
                            <Link href="/menu-3">
                                <div className="pbox-3 mb-30">
                                    <div className="hover-overlay">
                                        <img className="img-fluid" src="/images/offer-1.jpg" alt="promo-image" />
                                    </div>
                                </div>
                            </Link>
                        </div>
                        {/* PROMO IMAGE-2 */}
                        <div className="col-md-6">
                            <Link href="/menu-3">
                                <div className="pbox-3 mb-30">
                                    <div className="hover-overlay">
                                        <img className="img-fluid" src="/images/offer-2.jpg" alt="promo-image" />
                                    </div>
                                </div>
                            </Link>
                        </div>
                        {/* PROMO IMAGE-3 */}
                        <div className="col-md-6">
                            <Link href="/menu-3">
                                <div className="pbox-3">
                                    <div className="hover-overlay">
                                        <img className="img-fluid" src="/images/offer-3.jpg" alt="promo-image" />
                                    </div>
                                </div>
                            </Link>
                        </div>
                        {/* PROMO IMAGE-4 */}
                        <div className="col-md-6">
                            <Link href="/menu-3">
                                <div className="pbox-3 pbox-3-last">
                                    <div className="hover-overlay">
                                        <img className="img-fluid" src="/images/offer-4.jpg" alt="promo-image" />
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>    {/* End row */}
                </div>	   {/* End container */}
            </div>
        </>
    )
}
