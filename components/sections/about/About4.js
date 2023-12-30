
export default function About4({helperCls}) {
    return (
        <>
            <section id="about-4" className={`wide-60 about-section division ${helperCls ? helperCls : ""}`}>
                <div className="container">
                    <div className="row">
                        {/* ABOUT TEXT */}
                        <div className="col-md-7 col-lg-6">
                            <div className="about-4-txt mb-40">
                                {/* Title */}
                                <h2 className="h2-sm">Discover the new taste of the burger</h2>
                                {/* Text */}
                                <p className="p-md grey-color">Porta semper lacus cursus, feugiat primis ultrice and ligula risus auctor an
                                    tempus feugiat dolor lacinia cubilia a curae integer orci congue and metus mollislorem primis
                                </p>
                                {/* Image */}
                                <img className="img-fluid" src="/images/img-10.jpg" alt="about-image" />
                            </div>
                        </div>	{/* END ABOUT TEXT */}
                        {/* ABOUT IMAGE */}
                        <div className="col-md-5 col-lg-6">
                            <div className="about-4-img mb-40">
                                {/* Image */}
                                <img className="img-fluid" src="/images/img-15.jpg" alt="about-image" />
                                {/* Text */}
                                <p className="p-md grey-color">Porta semper lacus cursus, feugiat primis ultrice and ligula risus auctor orci
                                    tempus feugiat dolor lacinia cubilia integer
                                </p>
                            </div>
                        </div>
                    </div>	   {/* End row */}
                </div>	   {/* End container */}
            </section>
        </>
    )
}
