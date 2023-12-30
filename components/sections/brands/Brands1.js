import BrandSlider1 from "@/components/slider/BrandSlider1";

export default function Brands1({helperCls}) {
    return (
        <>
            <div id="brands-1" className={`bg-lightgrey brands-section division ${helperCls ? helperCls : ""}`}>
                <div className="container">
                    <div className="row">
                        <div className="col text-center">
                            <BrandSlider1/>
                        </div>
                    </div>      {/* End row */}
                </div>	    {/* End container */}
            </div>
        </>
    )
}
