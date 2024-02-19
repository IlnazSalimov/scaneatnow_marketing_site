import Layout from "../components/layout/Layout";
import { t } from "../services/i18nMiddleware";
import {useLocaleContext} from "../services/LocaleContext";

export default function Home() {
    const {locale, setLocale} = useLocaleContext();
    return (
        <>
            <Layout
                pageId={"cart-page"}
                activePage={t("pricing", locale)}
                pageTitle={t("pricing", locale)}
                headerStyle={1}
                footerStyle={1}
            >

                <section id="cart-1" className="wide-100 cart-page division">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="cart-table mb-70">
                                    <table id="myTable" style={{ width: '100%', tableLayout: 'fixed' }}>
                                        <thead>
                                        <tr>
                                            <th scope="col" style={{ fontSize: '26px', fontWeight: 'bold', textAlign: 'left', borderBottom: '2px solid #ccc' }}>{t("option", locale)}</th>
                                            <th scope="col" style={{ fontSize: '26px', fontWeight: 'bold', textAlign: 'left', borderBottom: '2px solid #ccc' }}>{t("monthlyFee", locale)}</th>
                                            <th scope="col" style={{ fontSize: '26px', fontWeight: 'bold', textAlign: 'left', borderBottom: '2px solid #ccc' }}>{t("comments", locale)}</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td style={{ fontSize: '25px', textAlign: 'left', padding: '15px' }}>{t("scanEatNowMonthlySubscription", locale)}</td>
                                            <td style={{ fontSize: '25px', fontWeight: 'bold', textAlign: 'left', padding: '15px' }}>45 EUR*</td>
                                            <td style={{ fontSize: '25px', textAlign: 'left', padding: '15px' }}>{t("chargedEveryMonth", locale)}</td>
                                        </tr>
                                        <tr>
                                            <td style={{ fontSize: '25px', textAlign: 'left', padding: '15px' }}>{t("scanEatNowYearlySubscription", locale)}</td>
                                            <td style={{ fontSize: '25px', fontWeight: 'bold', textAlign: 'left', padding: '15px' }}>30 EUR*</td>
                                            <td style={{ fontSize: '25px', textAlign: 'left', padding: '15px' }}>{t("chargedYearly", locale)}</td>
                                        </tr>
                                        <tr>
                                            <td style={{ fontSize: '25px', textAlign: 'left', padding: '15px' }}>{t("integrateScanEatNowIntoYourExistingSoftware", locale)}</td>
                                            <td style={{ fontSize: '25px', fontWeight: 'bold', textAlign: 'left', padding: '15px' }}>{t("contactUs", locale)}</td>
                                            <td style={{ fontSize: '25px', textAlign: 'left', padding: '15px' }}>{t("exampleIntegrationWithYourPOSSystemEtc", locale)}</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    <p style={{ fontSize: '20px' }}>{t("weChargePerLocation", locale)}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}
