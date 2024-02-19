import {t} from "../../../services/i18nMiddleware";
import {useLocaleContext} from "../../../services/LocaleContext";

export default function EmployeeTime({icon, helperCls, newImg}) {
    const {locale, setLocale} = useLocaleContext();
    return (
        <>
            <section id="about-3" className={`wide-60 about-section division ${helperCls ? helperCls : ""}`}>
                <div className="container">
                    <div className="row d-flex align-items-center">
                        {/* ABOUT IMAGE */}
                        <div className="col-md-5 col-lg-5">
                            <div className="post-inner-img">
                                <img className="img-fluid"
                                     src={`/images/our-solution/${newImg ? newImg : "EmployeeTime.jpg"}`}
                                     alt="about-image"/>
                            </div>
                        </div>
                        {/* ABOUT TEXT */}
                        <div className="col-md-5 col-lg-6">
                            <div className="about-3-txt mb-40">
                                {/* Title */}
                                <h2 className="h2-sm"
                                    dangerouslySetInnerHTML={{__html: t('freeUpEmployeesTime', locale)}}></h2>
                                {/* List */}
                                <ul className="txt-list">
                                    <li className="list-item">
                                        <p className="p-md"
                                           style={{fontSize: '27px'}}>{t('enableSelfServiceOrders', locale)}</p>
                                    </li>
                                    <li className="list-item">
                                        <p className="p-md"
                                           style={{fontSize: '27px'}}>{t('reduceMenuInquiries', locale)}</p>
                                    </li>
                                    <li className="list-item">
                                        <p className="p-md"
                                           style={{fontSize: '27px'}}>{t('lowerCostsOptimizeEfficiency', locale)}</p>
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
