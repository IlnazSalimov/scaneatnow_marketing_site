import Layout from "@/components/layout/Layout";
import About3 from "@/components/sections/about/About3";
import About7 from "@/components/sections/about/About7";
import Banner2 from "@/components/sections/banner/Banner2";
import Banner3 from "@/components/sections/banner/Banner3";
import Banner4 from "@/components/sections/banner/Banner4";
import Blog1 from "@/components/sections/blog/Blog1";
import Brands1 from "@/components/sections/brands/Brands1";
import Contacts3 from "@/components/sections/contacts/Contacts3";
import Gallery2 from "@/components/sections/gallery/Gallery2";
import Hero11 from "@/components/sections/hero/Hero11";
import Menu3 from "@/components/sections/menu/Menu3";
import Menu6 from "@/components/sections/menu/Menu6";
import Promo1 from "@/components/sections/promo/Promo1";
import Promo13 from "@/components/sections/promo/Promo13";
export default function Home() {
    return (
        <>
            <Layout
                headerStyle={1}
                footerStyle={3}
            >

                <Hero11 />

                <Promo13 />

                <About3 helperCls="bg-lightgrey" newImg="about-04-img.png" />

                <About7 helperCls="bg-05 white-color" />

                <Menu3 />

                <Promo1 />

                <Menu6 />

                <Banner3 helperCls="bg-salmon" />

                <Blog1 />

                <Brands1 />

                <Gallery2 />

                <Banner2 />

                <Contacts3 />

                <Banner4 />

            </Layout>
        </>
    )
}