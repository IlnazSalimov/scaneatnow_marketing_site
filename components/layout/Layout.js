import {useEffect, useState} from "react";
import Footer1 from "./Footer1";
import Header1 from "./Header1";
import PageHead from "./PageHead";
import PageHero from "./PageHero";

export default function Layout({headerStyle, footerStyle, children, pageTitle, pageId, activePage, headerCls}) {
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
            <PageHead headTitle={pageTitle}/>
            <Header1 headerCls={headerCls} scroll={scroll} isToggled={isToggled} handleToggle={handleToggle}/>


            <div id="page" className="page">
                {pageTitle && <PageHero pageId={pageId} pageTitle={pageTitle} activePage={activePage}/>}
                {children}

                <Footer1/>
            </div>
        </>
    )
}
