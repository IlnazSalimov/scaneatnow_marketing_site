import HeroSlider6 from "@/components/slider/HeroSlider6";

export default function Hero6({helperCls}) {
    return (
        <>
            <section id="hero-6" className={`hero-section division ${helperCls ? helperCls : ""}`}>
                {/* SLIDER */}
                <div className="slider mt-1001">
                    <HeroSlider6/>
                </div>	{/* END SLIDER */}
            </section>
        </>
    )
}
