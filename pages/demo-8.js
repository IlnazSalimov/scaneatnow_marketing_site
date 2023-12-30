import Layout from "@/components/layout/Layout";
import Banner3 from "@/components/sections/banner/Banner3";
import Blog1 from "@/components/sections/blog/Blog1";
import Brands1 from "@/components/sections/brands/Brands1";
import Contacts2 from "@/components/sections/contacts/Contacts2";
import Gallery2 from "@/components/sections/gallery/Gallery2";
import Hero8 from "@/components/sections/hero/Hero8";
import Menu3 from "@/components/sections/menu/Menu3";
import Menu6 from "@/components/sections/menu/Menu6";
import Promo12 from "@/components/sections/promo/Promo12";
import Promo4 from "@/components/sections/promo/Promo4";
import Promo5 from "@/components/sections/promo/Promo5";
import Promo7 from "@/components/sections/promo/Promo7";
export default function Home() {
    return (
        <>
            <Layout
                headerStyle={2}
                footerStyle={3}
            >

                <Hero8 />

                <Menu6 />

                <Promo12 />

                <Menu3 />

                <Promo4 newImg1="offer-5.jpg" newImg2="offer-11.jpg" />

                <Promo5 />

                <div id="div-01" className="bg-scroll division" />

                <Promo7 />

                <Banner3 helperCls="bg-yellow" />

                <Blog1 />

                <Brands1 />

                <Gallery2 />

                <Contacts2 />

            </Layout>
        </>
    )
}