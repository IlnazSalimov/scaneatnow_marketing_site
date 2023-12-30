import Layout from "@/components/layout/Layout";
import About1 from "@/components/sections/about/About1";
import About3 from "@/components/sections/about/About3";
import About4 from "@/components/sections/about/About4";
import Blog1 from "@/components/sections/blog/Blog1";
import Newsletter1 from "@/components/sections/newsletter/Newsletter1";
import Promo1 from "@/components/sections/promo/Promo1";
export default function Home() {
    return (
        <>
            <Layout
                pageId={"about-page"}
                activePage={"About"}
                pageTitle={"ABOUT"}
                headerStyle={1}
                footerStyle={1}
            >

                <About3 />

                <About1 />

                <About4 />

                <Promo1 />

                <Blog1 />

                <Newsletter1 />

            </Layout>
        </>
    )
}