import Gallery3Slider from "@/components/slider/Gallery3Slider";

export default function Gallery3({helperCls}) {
    return (
        <>
            <section id="gallery-3" className={`gallery-section division ${helperCls ? helperCls : ""}`}>
                {/* IMAGES HOLDER */}
                <div className="row gallery-grid">
                    <div className="col">

                        <Gallery3Slider />
                    </div>  {/* End col-x */}
                </div>	{/* END IMAGES HOLDER */}
            </section>
        </>
    )
}
