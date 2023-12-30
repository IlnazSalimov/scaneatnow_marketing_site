import Layout from "@/components/layout/Layout";
import About3 from "@/components/sections/about/About3";
import Banner3 from "@/components/sections/banner/Banner3";
import Banner4 from "@/components/sections/banner/Banner4";
import Blog1 from "@/components/sections/blog/Blog1";
import Contacts3 from "@/components/sections/contacts/Contacts3";
import Gallery3 from "@/components/sections/gallery/Gallery3";
import Hero3 from "@/components/sections/hero/Hero3";
import Menu3 from "@/components/sections/menu/Menu3";
import Menu6 from "@/components/sections/menu/Menu6";
import Promo1 from "@/components/sections/promo/Promo1";
import Promo11 from "@/components/sections/promo/Promo11";
import Promo2 from "@/components/sections/promo/Promo2";
import Promo3 from "@/components/sections/promo/Promo3";
import Promo7 from "@/components/sections/promo/Promo7";
export default function Home() {
    return (
        <>
            <Layout
                headerStyle={3}
                footerStyle={3}
            >


                <Hero3 />

                <Promo2 helperCls="pt-100" />

                <Menu6 />

                <Promo1 />

                <Menu3 />

                <Promo11 />

                <Blog1 />

                <Promo3 helperCls="pt-1001" />

                <Promo7 />

                <Banner3 helperCls="bg-yellow" />

                <About3 />

                <Gallery3 />

                <Contacts3 />

                <Banner4 />




            </Layout>
        </>
    )
}