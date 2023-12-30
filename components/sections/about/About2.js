import Link from "next/link";

export default function About2({helperCls}) {
    return (
        <>
            <section id="about-2" className={`bg-fixed wide-100 about-section division ${helperCls ? helperCls : ""}`}>
                <div className="container">
                    <div className="row">
                        {/* ABOUT TEXT */}
                        <div className="col-lg-10 offset-lg-1">
                            <div className="about-2-txt text-center">
                                {/* Title */}
                                <h2 className="h2-lg">The burger tastes better when you eat it with your family</h2>
                                {/* Text */}
                                <p className="p-lg grey-color">Porta semper lacus cursus, feugiat primis ultrice a ligula risus auctor an tempus
                                    feugiat dolor lacinia cubilia curae integer orci congue and metus integer primis in integer metus
                                </p>
                                {/* Button */}
                                <Link href="/menu-2" className="btn btn-md btn-red tra-red-hover">Explore Full Menu</Link>
                            </div>
                        </div>	{/* END ABOUT TEXT */}
                    </div>    {/* End row */}
                </div>	   {/* End container */}
            </section>
        </>
    )
}
