import Layout from "@/components/layout/Layout";
import About1 from "@/components/sections/about/About1";
import About3 from "@/components/sections/about/About3";
import Banner3 from "@/components/sections/banner/Banner3";
import Banner4 from "@/components/sections/banner/Banner4";
import Blog1 from "@/components/sections/blog/Blog1";
import Brands1 from "@/components/sections/brands/Brands1";
import Gallery2 from "@/components/sections/gallery/Gallery2";
import Hero2 from "@/components/sections/hero/Hero2";
import Menu6 from "@/components/sections/menu/Menu6";
import Menu8 from "@/components/sections/menu/Menu8";
import Promo11 from "@/components/sections/promo/Promo11";
import Promo14 from "@/components/sections/promo/Promo14";
import Promo3 from "@/components/sections/promo/Promo3";
import Promo8 from "@/components/sections/promo/Promo8";
import Review1 from "@/components/sections/review/Review1";
export default function Home() {
    return (
        <>
            <Layout
                headerStyle={1}
                footerStyle={2}
            >

                <Hero2 />

                <Menu8 />

                <Promo11 />

                <Menu6 />

                <About1 />

                <Promo14 />

                <Promo3 />

                <Promo8 />

                <Banner3 helperCls="bg-yellow" />

                <About3 />

                <Brands1 />

                <Blog1 />

                <Review1 />

                <Gallery2 />

                <Banner4 />

            </Layout>
        </>
    )
}