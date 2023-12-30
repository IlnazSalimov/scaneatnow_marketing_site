import Link from "next/link";

export default function Banner4({helperCls}) {
    return (
        <>
            <section id="banner-4" className={`bg-fixed wide-100 banner-section division ${helperCls ? helperCls : ""}`}>
                <div className="container">
                    <div className="row">
                        {/* BANNER TEXT */}
                        <div className="col-lg-10 col-xl-8 offset-lg-1 offset-xl-2">
                            <div className="banner-4-txt text-center">
                                {/* Title  */}
                                <h4 className="h4-xl">We Guarantee</h4>
                                {/* Title  */}
                                <h2>30 Minutes Delivery!</h2>
                                {/* Text */}
                                <p className="p-lg">Aliquam a augue suscipit, luctus neque purus ipsum neque undo dolor primis libero tempus,
                                    blandit a cursus varius luctus neque magna
                                </p>
                                {/* Call Button */}
                                <Link href="/tel:123456789" className="btn btn-lg btn-red tra-red-hover">Call: 789-654-3210</Link>
                            </div>
                        </div>
                    </div>      {/* End row */}
                </div>	    {/* End container */}
            </section>
        </>
    )
}
