import { t } from "../../../services/i18nMiddleware";
import { useLocaleContext } from "../../../services/LocaleContext";

export default function Forwhom({ icon, helperCls, newImg }) {
    const { locale, setLocale } = useLocaleContext();

    return (
        <>
            <section id="about-3" className={`wide-60 about-section division ${helperCls ? helperCls : ""}`}>
                <div className="container">
                    <div className="row d-flex align-items-center">
                        {/* ABOUT IMAGE */}
                        <div className="col-md-5 col-lg-8">
                            <div className="about-3-img text-center mb-40">
                                <img className="img-fluid"
                                     src={`/images/our-solution/${newImg ? newImg : "for_whom.png"}`}
                                     alt="about-image" />

                            </div>
                        </div>
                        {/* ABOUT TEXT */}
                        <div className="col-md-5 col-lg-4">
                            <div className="about-3-txt mb-40">
                                {/* Title */}
                                <h2 className="h2-sm">{t('forWhomIsOurSolution', locale)}</h2>
                                {/* Text */}
                                <p className="p-md" style={{ fontSize: '27px' }}>{t("restaurantsCafeteriasFoodCourts", locale)}
                                </p>
                                {/* List */}
                                <ul className="txt-list">
                                    <li className="list-item">
                                        <p className="p-md" style={{ fontSize: '27px' }}>{t("withCounterService", locale)}
                                        </p>
                                    </li>
                                    <li className="list-item">
                                        <p className="p-md" style={{ fontSize: '27px' }}>{t("withTableService", locale)}</p>
                                    </li>
                                </ul>
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
