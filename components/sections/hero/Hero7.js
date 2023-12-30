
export default function Hero7({helperCls}) {
    return (
        <>
            <div id="hero-7" className={`hero-section division ${helperCls ? helperCls : ""}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="hero-7-txt">
                                <img className="img-fluid" src="/images/hero-7.jpg" alt="hero-image" />
                            </div>
                        </div>
                    </div>  {/* End row */}
                </div>  {/* End container */}
            </div>

        </>
    )
}
