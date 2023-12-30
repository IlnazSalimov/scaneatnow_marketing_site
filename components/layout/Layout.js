import { useEffect, useState } from "react";
import StyleSwitch from "../elements/StyleSwitch";
import Footer1 from "./Footer1";
import Footer2 from "./Footer2";
import Footer3 from "./Footer3";
import Footer4 from "./Footer4";
import Header1 from "./Header1";
import Header2 from "./Header2";
import Header3 from "./Header3";
import PageHead from "./PageHead";
import PageHero from "./PageHero";

export default function Layout({ headerStyle, footerStyle, children, pageTitle, pageId, activePage, headerCls }) {
    console.log("Layout")
    const [scroll, setScroll] = useState(0)
    useEffect(() => {
        document.addEventListener("scroll", () => {
            const scrollCheck = window.scrollY > 100
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck)
            }
        })
    })

    const [isToggled, setToggled] = useState(false);
    const handleToggle = () => setToggled(!isToggled);

    return (
        <>
            <PageHead />
            <StyleSwitch />
            {!headerStyle && <Header1 headerCls={headerCls} scroll={scroll} isToggled={isToggled} handleToggle={handleToggle} />}
            {headerStyle == 1 && <Header1 headerCls={headerCls} scroll={scroll} isToggled={isToggled} handleToggle={handleToggle} />}
            {headerStyle == 2 && <Header2 headerCls={headerCls} scroll={scroll} isToggled={isToggled} handleToggle={handleToggle} />}
            {headerStyle == 3 && <Header3 headerCls={headerCls} scroll={scroll} isToggled={isToggled} handleToggle={handleToggle} />}


            <div id="page" className="page">
                {pageTitle && <PageHero pageId={pageId} pageTitle={pageTitle} activePage={activePage} />}
                {children}

                {!footerStyle && <Footer1 />}
                {footerStyle == 1 && <Footer1 />}
                {footerStyle == 2 && <Footer2 />}
                {footerStyle == 3 && <Footer3 />}
                {footerStyle == 4 && <Footer4 />}
            </div>
        </>
    )
}
