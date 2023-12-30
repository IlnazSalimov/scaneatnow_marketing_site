import Layout from "@/components/layout/Layout";
import Banner4 from "@/components/sections/banner/Banner4";
import Menu3 from "@/components/sections/menu/Menu3";
export default function Home() {
    return (
        <>
            <Layout
                pageId={"menu-page"}
                activePage={"Menu #3"}
                pageTitle={"Main Menu #3"}
                headerStyle={1}
                footerStyle={1}
            >

                <Menu3 />

                <Banner4 />


            </Layout>
        </>
    )
}