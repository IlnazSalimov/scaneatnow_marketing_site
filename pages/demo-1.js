import Layout from "@/components/layout/Layout";
import About3 from "@/components/sections/about/About3";
import Banner3 from "@/components/sections/banner/Banner3";
import Blog1 from "@/components/sections/blog/Blog1";
import Brands1 from "@/components/sections/brands/Brands1";
import Gallery2 from "@/components/sections/gallery/Gallery2";
import Gmap1 from "@/components/sections/gmap/Gmap1";
import Hero1 from "@/components/sections/hero/Hero1";
import Menu6 from "@/components/sections/menu/Menu6";
import Menu8 from "@/components/sections/menu/Menu8";
import Promo11 from "@/components/sections/promo/Promo11";
import Promo2 from "@/components/sections/promo/Promo2";
import Promo3 from "@/components/sections/promo/Promo3";
import Promo7 from "@/components/sections/promo/Promo7";
import Promo8 from "@/components/sections/promo/Promo8";
import Review1 from "@/components/sections/review/Review1";
export default function Home() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1} headerCls="viewport-lg">

                <Hero1 />

                <About3 icon />

                <Promo2 />

                <Menu6 />

                <Promo11 />

                <Menu8 />

                <Review1 />

                <Promo8 />

                <Promo3 />

                <Promo7 />

                <Banner3 helperCls="bg-yellow" />

                <Gallery2 />

                <Brands1 />

                <Blog1 />

                <Gmap1 />

            </Layout>
        </>
    )
}