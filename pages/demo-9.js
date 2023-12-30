import Layout from "@/components/layout/Layout";
import About3 from "@/components/sections/about/About3";
import Banner1 from "@/components/sections/banner/Banner1";
import Banner3 from "@/components/sections/banner/Banner3";
import Blog1 from "@/components/sections/blog/Blog1";
import Brands1 from "@/components/sections/brands/Brands1";
import Gallery2 from "@/components/sections/gallery/Gallery2";
import Gmap1 from "@/components/sections/gmap/Gmap1";
import Hero9 from "@/components/sections/hero/Hero9";
import Menu3 from "@/components/sections/menu/Menu3";
import Promo10 from "@/components/sections/promo/Promo10";
import Promo3 from "@/components/sections/promo/Promo3";
import Promo4 from "@/components/sections/promo/Promo4";
import Promo7 from "@/components/sections/promo/Promo7";
import Promo9 from "@/components/sections/promo/Promo9";
import Review1 from "@/components/sections/review/Review1";
export default function Home() {
    return (
        <>
            <Layout
                headerStyle={1}
                footerStyle={2}
            >

                <Hero9 />

                <About3 helperCls="wide-40" icon newImg="about-03-img.png" />

                <Promo4 newImg1="offer-5.jpg" newImg2="offer-11.jpg" />

                <Menu3 />

                <Promo10 helperCls="mb-20" />

                <Promo3 helperCls="wide-100" />

                <Brands1 />

                <Promo7 />

                <Banner3 helperCls="bg-meat" />

                <Promo9 />

                <Review1 />

                <Gallery2 />

                <Banner1 />

                <Blog1 />

                <Gmap1 />

            </Layout>
        </>
    )
}