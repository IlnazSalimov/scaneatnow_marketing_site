import Link from "next/link";

export default function Banner2({helperCls}) {
    return (
        <>
            <section id="banner-2" className={`bg-scroll banner-section division ${helperCls ? helperCls : ""}`}>
                <div className="container">
                    <div className="row">
                        {/* BANNER TEXT */}
                        <div className="col-md-10 offset-md-1">
                            <div className="banner-2-txt text-center white-color">
                                {/* Text */}
                                <p className="p-xl">We put 100% of love and dedication into our dishes</p>
                                {/* Title */}
                                <h2>Excellent Taste, Top Quality</h2>
                                {/* Button */}
                                <Link href="/menu-3" className="btn btn-lg btn-salmon tra-white-hover">Explore Our Menu</Link>
                            </div>
                        </div>
                    </div>	   {/* End row */}
                </div>	   {/* End container */}
            </section>
        </>
    )
}
