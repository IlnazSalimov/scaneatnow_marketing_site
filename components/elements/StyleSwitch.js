import Link from "next/link";
import { useState } from "react";

export default function StyleSwitch() {
    const [isMouseOver, setIsMouseOver] = useState(false);

    const handleMouseOver = () => {
        setIsMouseOver(true);
    };

    const handleMouseOut = () => {
        setIsMouseOver(false);
    };
    return (
        <>
            <div id="stlChanger" className={isMouseOver ? "open":""}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}>
                <div className="blockChanger bgChanger">
                    <Link href="#" className="chBut icon-xs"><span className="flaticon-layers-1" /></Link>
                    <div className="chBody white-color">
                        <div className="stBlock text-center" style={{ margin: '30px 20px 20px 26px' }}>
                            <p>Choose Demo</p>
                            <Link className="s_1" href="/demo-1"><img src="/images/color-scheme/l-01.jpg" width={180} height={93} alt="layout-image" /></Link>
                            <Link className="s_1" href="/demo-2"><img src="/images/color-scheme/l-02.jpg" width={180} height={130} alt="layout-image" /></Link>
                            <Link className="s_1" href="/demo-3"><img src="/images/color-scheme/l-03.jpg" width={180} height={98} alt="layout-image" /></Link>
                            <Link className="s_1" href="/demo-4"><img src="/images/color-scheme/l-04.jpg" width={180} height={115} alt="layout-image" /></Link>
                            <Link className="s_1" href="/demo-5"><img src="/images/color-scheme/l-05.jpg" width={180} height={118} alt="layout-image" /></Link>
                            <Link className="s_1" href="/demo-6"><img src="/images/color-scheme/l-06.jpg" width={180} height={93} alt="layout-image" /></Link>
                            <Link className="s_1" href="/demo-7"><img src="/images/color-scheme/l-07.jpg" width={180} height={121} alt="layout-image" /></Link>
                            <Link className="s_1" href="/demo-8"><img src="/images/color-scheme/l-08.jpg" width={180} height={115} alt="layout-image" /></Link>
                            <Link className="s_1" href="/demo-9"><img src="/images/color-scheme/l-09.jpg" width={180} height={109} alt="layout-image" /></Link>
                            <Link className="s_1" href="/demo-10"><img src="/images/color-scheme/l-10.jpg" width={180} height={125} alt="layout-image" /></Link>
                            <Link className="s_1" href="/demo-11"><img src="/images/color-scheme/l-11.jpg" width={180} height={128} alt="layout-image" /></Link>
                            <Link className="s_1" href="/demo-12"><img src="/images/color-scheme/l-12.jpg" width={180} height={123} alt="layout-image" /></Link>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
