import Layout from "@/components/layout/Layout";
import About3 from "@/components/sections/about/About3";
import About7 from "@/components/sections/about/About7";
import Banner1 from "@/components/sections/banner/Banner1";
import Banner4 from "@/components/sections/banner/Banner4";
import Blog1 from "@/components/sections/blog/Blog1";
import Brands1 from "@/components/sections/brands/Brands1";
import Contacts3 from "@/components/sections/contacts/Contacts3";
import Gallery2 from "@/components/sections/gallery/Gallery2";
import Hero10 from "@/components/sections/hero/Hero10";
import Menu3 from "@/components/sections/menu/Menu3";
import Menu4 from "@/components/sections/menu/Menu4";
import Promo10 from "@/components/sections/promo/Promo10";
import Promo4 from "@/components/sections/promo/Promo4";
import Review1 from "@/components/sections/review/Review1";
export default function Home() {
    return (
        <>
            <Layout
                headerStyle={3}
                footerStyle={4}
            >

                <Hero10 />

                <About3 />

                <About7 helperCls="bg-05 white-color" />

                <Menu3 />

                <Promo4 helperCls="wide-100" />

                <div id="div-03" className="bg-scroll division" />

                <Menu4 />

                <Review1 />

                <Gallery2 />

                <Banner1 />

                <Brands1 />

                <Blog1 />

                <Promo10 />

                <Contacts3 />

                <Banner4 />

            </Layout>
        </>
    )
}