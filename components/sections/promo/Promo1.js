import Link from "next/link";

export default function Promo1({helperCls}) {
    return (
        <>
            <section id="promo-1" className={`promo-section division ${helperCls ? helperCls : ""}`}>
                <div className="container-fluid">
                    <div className="row d-flex align-items-center">
                        {/* PROMO BOX-1 */}
                        <div className="col-md-4 col-lg-3">
                            <div id="pb-1-1" className="pbox-1 bg-fixed">
                                <div className="pbox-1-txt white-color">
                                    <h3 className="h3-sm">Careers</h3>
                                    <p className="p-lg">Want to join our team?</p>
                                    <Link href="/team" className="btn btn-red tra-white-hover">Learn More</Link>
                                </div>
                            </div>
                        </div>
                        {/* PROMO BOX-2 */}
                        <div className="col-md-4 col-lg-6">
                            <div id="pb-1-2" className="pbox-1 bg-fixed">
                                <div className="pbox-1-txt white-color">
                                    <h3 className="h3-sm">Order Now</h3>
                                    <p className="p-lg">Enjoy Testo Burgers at home</p>
                                    <Link href="/menu-2" className="btn btn-red tra-white-hover">Learn More</Link>
                                </div>
                            </div>
                        </div>
                        {/* PROMO BOX-3 */}
                        <div className="col-md-4 col-lg-3">
                            <div id="pb-1-3" className="pbox-1 bg-fixed">
                                <div className="pbox-1-txt white-color">
                                    <h3 className="h3-sm">Gift Cards</h3>
                                    <p className="p-lg">Give the gift of Yummy!</p>
                                    <Link href="/gift-cards" className="btn btn-red tra-white-hover">Learn More</Link>
                                </div>
                            </div>
                        </div>
                    </div>    {/* End row */}
                </div>	   {/* End container */}
            </section>
        </>
    )
}
