import Link from "next/link";
import { t } from "../../../services/i18nMiddleware";
import {useLocaleContext} from "../../../services/LocaleContext";

const bulletPointStyle = {
    fontSize: '27px', // Adjust bullet point font size
    lineHeight: '1.4', // Adjust bullet point line height
    marginBottom: '15px', // Spacing between bullet points
    textAlign: 'left',
};

export default function About1({ helperCls }) {
    const {locale, setLocale} = useLocaleContext();
    return (
        <>
            <section id="about-1" className={`bg-fixed wide-100 about-section division ${helperCls ? helperCls : ""}`}>
                <div className="container">
                    <div className="row">
                        {/* ABOUT TEXT */}
                        <div className="col-xl-10 offset-xl-1">
                            <div className="about-1-txt text-center">
                                {/* Title */}
                                <h2 dangerouslySetInnerHTML={{ __html: t('improveCustomersExperience', locale) }}></h2>
                                <ul style={{ paddingLeft: '50px', listStyleType: 'disc' }}>
                                    <li style={bulletPointStyle}>{t("provideInstantMenuAccess", locale)}</li>
                                    <li style={bulletPointStyle}>{t("streamlineOrdering", locale)}</li>
                                    <li style={bulletPointStyle}>{t("saveCustomersTime", locale)}</li>
                                    <li style={bulletPointStyle}>{t("enhanceCustomerSatisfaction", locale)}</li>
                                </ul>

                                <div className="post-inner-img">
                                    <img className="img-fluid" src="/images/our-solution/DigitalMenu.png" alt="about-image" />
                                </div>
                                {/* Text */}
                                <p className="p-xl grey-color">
                                </p>
                                {/* Icons List */}
                            </div>
                        </div>	{/* END ABOUT TEXT */}
                    </div>    {/* End row */}
                </div>	   {/* End container */}
            </section>
        </>
    )
}
