import Layout from "../components/layout/Layout";
import { t } from "../services/i18nMiddleware";
import {useLocaleContext} from "../services/LocaleContext";

export default function Home() {
    const {locale, setLocale} = useLocaleContext();
    return (
        <>
            <Layout
                pageId={"gift-page"}
                activePage={t("howToStart", locale)}
                pageTitle={t("howToStart", locale)}
                headerStyle={1}
                footerStyle={1}
            >

                <div id="cards-01" className="wide-60 cards-section division">
                    <div className="container">
                        {/* SECTION TITLE */}
                        <div className="row">
                            <div className="col-lg-10 offset-lg-1">
                                <div className="section-title mb-60 text-center">
                                    {/* Title 	*/}
                                    <h2 className="h2-xl">{t("startUsingScaneatnowIn3SimpleSteps", locale)}</h2>
                                    {/* Text */}
                                    <p className="p-xl">{t("noNeedToChangeAnythingInExistingSoftware", locale)}</p>
                                </div>
                            </div>
                        </div>
                        <div className="row d-flex align-items-center">
                            {/* CARD #1 */}
                            <div className="col-md-4">
                                <div className="card-box">
                                    {/* Image */}
                                    <img className="img-fluid" src="/images/our-solution/Step1.png" alt="card-image" />
                                    {/* Title */}
                                    <h5 className="h5-xl">{t("installOurAppForAndroid", locale)}</h5>
                                    {/* Text */}
                                    <p className="p-sm grey-color">{t("createRestaurantProfileDigitalMenuTablesInTheApp", locale)}</p>
                                </div>
                            </div>
                            {/* CARD #2 */}
                            <div className="col-md-4">
                                <div className="card-box">
                                    {/* Image */}
                                    <img className="img-fluid" src="/images/our-solution/Step2.png" alt="card-image" />
                                    {/* Title */}
                                    <h5 className="h5-xl">{t("putQRCodesOnTheTables", locale)}</h5>
                                    {/* Text */}
                                    <p className="p-sm grey-color">{t("youWillReceiveQRCodesFromUs", locale)}</p>
                                </div>
                            </div>
                            {/* CARD #3 */}
                            <div className="col-md-4">
                                <div className="card-box pbox-4-last">
                                    {/* Image */}
                                    <img className="img-fluid" src="/images/our-solution/Step3.png" alt="card-image" />
                                    {/* Title */}
                                    <h5 className="h5-xl">{t("enjoyANewEnhancedProcess", locale)}</h5>
                                    {/* Text */}
                                    <p className="p-sm grey-color">{t("youWillAutomaticallyReceivePaymentsFromCustomers", locale)}</p>
                                </div>
                            </div>
                        </div> {/* End row */}
                    </div>  {/* End container */}
                </div>

            </Layout>
        </>
    )
}
