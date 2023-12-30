import Layout from "@/components/layout/Layout";
import Banner4 from "@/components/sections/banner/Banner4";
import Menu8 from "@/components/sections/menu/Menu8";
export default function Home() {
    return (
        <>
            <Layout
                pageId={"menu-page"}
                activePage={"Menu #1"}
                pageTitle={"Main Menu #1"}
                headerStyle={1}
                footerStyle={1}
            >

                <Menu8 />

                <Banner4 />

            </Layout>
        </>
    )
}