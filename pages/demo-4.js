import Layout from "@/components/layout/Layout";
import About2 from "@/components/sections/about/About2";
import About3 from "@/components/sections/about/About3";
import About7 from "@/components/sections/about/About7";
import Banner3 from "@/components/sections/banner/Banner3";
import Banner4 from "@/components/sections/banner/Banner4";
import Blog1 from "@/components/sections/blog/Blog1";
import Brands1 from "@/components/sections/brands/Brands1";
import Gallery2 from "@/components/sections/gallery/Gallery2";
import Hero4 from "@/components/sections/hero/Hero4";
import Menu3 from "@/components/sections/menu/Menu3";
import Menu6 from "@/components/sections/menu/Menu6";
import Menu7 from "@/components/sections/menu/Menu7";
import Promo2 from "@/components/sections/promo/Promo2";
import Promo4 from "@/components/sections/promo/Promo4";
import Promo7 from "@/components/sections/promo/Promo7";
import Review1 from "@/components/sections/review/Review1";
export default function Home() {
    return (
        <>
            <Layout
                headerStyle={3}
                footerStyle={2}
            >


                <Hero4 />

                <About2 />

                <About7 helperCls="bg-yellow" />

                <Menu6 />

                <Promo2 />

                <Promo4 helperCls="wide-100" />

                <About3 helperCls="bg-lightgrey" />

                <Menu3 />

                <div id="div-04" className="bg-scroll division" />

                <Promo7 />

                <Banner3 helperCls="bg-yellow" />

                <Blog1 />

                <Brands1 />

                <Menu7 />

                <Review1 />

                <Gallery2 />

                <Banner4 />

            </Layout>
        </>
    )
}