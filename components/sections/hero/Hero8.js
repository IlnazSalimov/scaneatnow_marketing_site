import HeroSlider8 from "@/components/slider/HeroSlider8";

export default function Hero8({helperCls}) {
    return (
        <>
            <div id="hero-8" className={`hero-section division ${helperCls ? helperCls : ""}`}>
                <div className="slider">
                    <HeroSlider8 />
                </div>	   {/* END SLIDER */}
            </div>
        </>
    )
}
