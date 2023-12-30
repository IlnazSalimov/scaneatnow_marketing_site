import Layout from "@/components/layout/Layout";
import About3 from "@/components/sections/about/About3";
import About7 from "@/components/sections/about/About7";
import Banner1 from "@/components/sections/banner/Banner1";
import Banner3 from "@/components/sections/banner/Banner3";
import Banner4 from "@/components/sections/banner/Banner4";
import Blog1 from "@/components/sections/blog/Blog1";
import Brands1 from "@/components/sections/brands/Brands1";
import Contacts3 from "@/components/sections/contacts/Contacts3";
import Gallery2 from "@/components/sections/gallery/Gallery2";
import Hero5 from "@/components/sections/hero/Hero5";
import Menu6 from "@/components/sections/menu/Menu6";
import Menu9 from "@/components/sections/menu/Menu9";
import Promo1 from "@/components/sections/promo/Promo1";
import Promo12 from "@/components/sections/promo/Promo12";
import Promo3 from "@/components/sections/promo/Promo3";
import Promo5 from "@/components/sections/promo/Promo5";
import Promo7 from "@/components/sections/promo/Promo7";
import Review1 from "@/components/sections/review/Review1";
export default function Home() {
    return (
        <>
            <Layout
                headerStyle={1}
                footerStyle={3}
            >

                <Hero5 />

                <About7 />

                <About3 helperCls="bg-yellow coffee-color" icon newImg="about-02-img.png" />

                <Menu6 />

                <Promo1 />

                <Promo5 />

                <Banner3 helperCls="bg-yellow" />

                <Menu9 />

                <Brands1 />

                <Blog1 />

                <Review1 />

                <Promo3 helperCls="pt-100" />

                <Promo7 />

                <Promo12 />

                <Gallery2 />

                <Banner1 />

                <Contacts3 />

                <Banner4 />

            </Layout>
        </>
    )
}