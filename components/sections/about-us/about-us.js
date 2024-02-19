import Link from "next/link";
import { t } from "../../../services/i18nMiddleware";
import {useLocaleContext} from "../../../services/LocaleContext";

export default function AboutUs({ icon, helperCls, newImg }) {
    const {locale, setLocale} = useLocaleContext();
    return (
        <>
            <section id="about-3" className={`wide-60 about-section division ${helperCls ? helperCls : ""}`}>
                <div className="container">
                    <div className="row d-flex align-items-center">
                        {/* ABOUT IMAGE */}
                        <div className="col-md-5 col-lg-3">
                            <div className="about-3-img text-center mb-40">
                                <img className="img-fluid" src={`/images/our-solution/${newImg ? newImg : "CEO.jpg"}`}
                                     alt="about-image"/>
                            </div>
                        </div>
                        {/* ABOUT TEXT */}
                        <div className="col-md-5 col-lg-7">
                            <div className="about-3-txt mb-40">
                                {/* Title */}
                                <h2 className="h4-sm">{t("scaneatnowIsEuropeanStartup", locale)}</h2>
                                {/* Text */}
                                <p className="p-md" style={{ fontSize: '27px' }}>{t("ourDevelopersAndSalesManagersAreInGermanyNorwayEstonia", locale)}</p>
                                <p className="p-md" style={{ fontSize: '27px' }}>{t("ceo", locale)}: Ilnaz Salimov</p>
                                <p className="p-md" style={{ fontSize: '27px' }}>{t("email", locale)}: <Link
                                    href={`mailto:ilnaz.salimov@scaneatnow.com`}
                                    className="yellow-color">ilnaz.salimov@scaneatnow.com</Link></p>
                            </div>
                        </div>
                        {/* END ABOUT TEXT */}
                    </div>
                    {/* End row */}
                </div>
                {/* End container */}
            </section>
        </>
    )
}
