import Layout from "@/components/layout/Layout";
import About3 from "@/components/sections/about/About3";
import About7 from "@/components/sections/about/About7";
import Banner2 from "@/components/sections/banner/Banner2";
import Banner3 from "@/components/sections/banner/Banner3";
import Blog1 from "@/components/sections/blog/Blog1";
import Brands1 from "@/components/sections/brands/Brands1";
import Gallery2 from "@/components/sections/gallery/Gallery2";
import Gmap1 from "@/components/sections/gmap/Gmap1";
import Hero12 from "@/components/sections/hero/Hero12";
import Menu3 from "@/components/sections/menu/Menu3";
import Menu6 from "@/components/sections/menu/Menu6";
import Promo13 from "@/components/sections/promo/Promo13";
import Promo4 from "@/components/sections/promo/Promo4";
export default function Home() {
    return (
        <>
            <Layout
                headerStyle={1}
                footerStyle={1}
            >

                <Hero12 />

                <About3 helperCls="bg-lightgrey" newImg="about-04-img.png" />

                <About7 helperCls="bg-05 white-color" />

                <Menu3 />

                <Promo13 helperCls="bg-dark" />

                <Menu6 />

                <Banner3 helperCls="bg-salmon" />

                <Promo4 helperCls="wide-100" />

                <Brands1 />

                <Gallery2 />

                <Banner2 />

                <Blog1 />

                <Gmap1 />

            </Layout>
        </>
    )
}