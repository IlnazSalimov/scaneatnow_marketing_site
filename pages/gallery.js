import Layout from "@/components/layout/Layout";
import Gallery2 from "@/components/sections/gallery/Gallery2";
import Newsletter1 from "@/components/sections/newsletter/Newsletter1";
export default function Home() {
    return (
        <>
            <Layout
                pageId={"gallery-page"}
                activePage={"Gallery"}
                pageTitle={"Images Gallery"}
                headerStyle={1}
                footerStyle={1}
            >

                <Gallery2 />

                <Newsletter1 />


            </Layout>
        </>
    )
}