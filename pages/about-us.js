import React from 'react';
import Layout from "../components/layout/Layout";
import AboutUs from "../components/sections/about-us/about-us";
import {t} from "../services/i18nMiddleware";
import {useLocaleContext} from "../services/LocaleContext";


export default function Home() {
    const {locale, setLocale} = useLocaleContext();
    return (
        <>
            <Layout
                pageId={"about-page"}
                activePage={t("aboutUs", locale)}
                pageTitle={t("aboutUs", locale)}
                headerStyle={1} 
                footerStyle={1}
            >

                <AboutUs />

            </Layout>
        </>
    )
}
