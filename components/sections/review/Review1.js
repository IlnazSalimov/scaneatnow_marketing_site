import ReviewSlider1 from "@/components/slider/ReviewSlider1";

export default function Review1({helperCls}) {
    return (
        <>
            <div id="reviews-1" className={`bg-image bg-scroll reviews-section division ${helperCls ? helperCls : ""}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 testimonials white-color">
                            {/* TRANSPARENT QUOTE ICON */}
                            <div className="quote-icon" />
                            {/* TESTIMONIALS CONTENT */}
                            <div className="flexslider">
                                <ReviewSlider1/>
                            </div>
                        </div>
                    </div>	 {/* End row */}
                </div>	 {/* End container */}
            </div>
        </>
    )
}
