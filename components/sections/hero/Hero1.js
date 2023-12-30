import HeroSlider1 from "@/components/slider/HeroSlider1";

export default function Hero1({ helperCls }) {
    return (
        <>
            <section id="hero-1" className={`hero-section division ${helperCls ? helperCls : ""}`}>
                <div className="slider">
                    <HeroSlider1 />
                </div>
            </section>
        </>
    )
}
