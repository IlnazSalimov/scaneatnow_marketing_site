import Link from "next/link";

export default function Promo2({helperCls}) {
    return (
        <>
            <section id="promo-2" className={`promo-section division ${helperCls ? helperCls : ""}`}>
                <div className="container">
                    <div className="row d-flex align-items-center">
                        {/* PROMO BOX-1 */}
                        <div className="col-md-6 col-lg-5">
                            <div id="pb-2-1" className="pbox-2 bg-fixed">
                                <div className="pbox-2-txt brown-color">
                                    <h4 className="h4-lg txt-300">Get Your Free</h4>
                                    <h4 className="h4-xl">Cheese Fries</h4>
                                    <Link href="/menu-1" className="btn btn-red tra-red-hover">Learn More</Link>
                                </div>
                            </div>
                        </div>
                        {/* PROMO BOX-2 */}
                        <div className="col-md-6 col-lg-7">
                            <div id="pb-2-2" className="pbox-2 bg-fixed">
                                <div className="pbox-2-txt brown-color">
                                    <h4 className="h4-lg txt-300">Crispy Chicken</h4>
                                    <h4 className="h4-xl">Burger Is Back!</h4>
                                    <Link href="/menu-1" className="btn btn-red tra-red-hover">Learn More</Link>
                                </div>
                            </div>
                        </div>
                    </div>    {/* End row */}
                </div>	   {/* End container */}
            </section>
        </>
    )
} 
