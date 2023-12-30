import HeroSlider3 from "@/components/slider/HeroSlider3";

export default function Hero3({helperCls}) {
    return (
        <>
            <section id="hero-3" className={`hero-section division ${helperCls ? helperCls : ""}`}>
                {/* SLIDER */}
                <div className="slider mt-1001">
                    <HeroSlider3 />
                </div>	{/* END SLIDER */}
            </section>
        </>
    )
}
