import Layout from "@/components/layout/Layout";
import Contacts3 from "@/components/sections/contacts/Contacts3";
import Newsletter1 from "@/components/sections/newsletter/Newsletter1";
export default function Home() {
    return (
        <>
            <Layout
                pageId={"locations-page"}
                activePage={"Locations"}
                pageTitle={"Our Locations"}
                headerStyle={1}
                footerStyle={1}
            >


                <Contacts3 />

                <Newsletter1 />




            </Layout>
        </>
    )
}