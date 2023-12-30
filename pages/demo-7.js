import Layout from "@/components/layout/Layout";
import About3 from "@/components/sections/about/About3";
import About7 from "@/components/sections/about/About7";
import Banner1 from "@/components/sections/banner/Banner1";
import Banner3 from "@/components/sections/banner/Banner3";
import Blog1 from "@/components/sections/blog/Blog1";
import Gallery2 from "@/components/sections/gallery/Gallery2";
import Gmap1 from "@/components/sections/gmap/Gmap1";
import Hero7 from "@/components/sections/hero/Hero7";
import Menu6 from "@/components/sections/menu/Menu6";
import Menu9 from "@/components/sections/menu/Menu9";
import Promo12 from "@/components/sections/promo/Promo12";
import Promo14 from "@/components/sections/promo/Promo14";
import Promo3 from "@/components/sections/promo/Promo3";
import Promo7 from "@/components/sections/promo/Promo7";
import Review1 from "@/components/sections/review/Review1";
export default function Home() {
    return (
        <>
            <Layout
                headerStyle={2}
                footerStyle={4}
            >

                <Hero7 />

                <About7 />

                <About3 helperCls="bg-lightgrey " newImg="about-02-img.png" />

                <Menu6 />

                <Banner3 helperCls="bg-yellow" />

                <Promo7 />

                <Promo3 />

                <Promo14 />

                <Promo12 />

                <Menu9 />

                <Review1 />

                <Gallery2 />

                <Banner1 />

                <Blog1 />

                <Gmap1 />

            </Layout>
        </>
    )
}