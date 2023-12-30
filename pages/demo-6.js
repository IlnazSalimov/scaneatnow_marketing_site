import Layout from "@/components/layout/Layout";
import About3 from "@/components/sections/about/About3";
import About7 from "@/components/sections/about/About7";
import Banner3 from "@/components/sections/banner/Banner3";
import Banner4 from "@/components/sections/banner/Banner4";
import Blog1 from "@/components/sections/blog/Blog1";
import Contacts3 from "@/components/sections/contacts/Contacts3";
import Gallery2 from "@/components/sections/gallery/Gallery2";
import Hero6 from "@/components/sections/hero/Hero6";
import Menu6 from "@/components/sections/menu/Menu6";
import Menu8 from "@/components/sections/menu/Menu8";
import Promo3 from "@/components/sections/promo/Promo3";
import Promo4 from "@/components/sections/promo/Promo4";
import Promo5 from "@/components/sections/promo/Promo5";
import Review1 from "@/components/sections/review/Review1";
export default function Home() {
    return (
        <>
            <Layout
                headerStyle={3}
                footerStyle={3}
            >

                <Hero6 />

                <Promo3 helperCls="pt-100" />

                <Menu6 />

                <About3 helperCls="bg-yellow coffee-color" newImg="about-02-img.png" />

                <Menu8 />

                <Promo4 />

                <Promo5 />

                <About7 helperCls="bg-05 white-color" />

                <Gallery2 />

                <Review1 />

                <Blog1 />

                <Banner3 helperCls="bg-yellow" />

                <Contacts3 />

                <Banner4 />

            </Layout>
        </>
    )
}