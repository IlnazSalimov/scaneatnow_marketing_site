import {t} from "../../../services/i18nMiddleware";
import {useLocaleContext} from "../../../services/LocaleContext";

export default function Forwhom({ icon, helperCls, newImg }) {
    const youtubeUrl = "https://www.youtube.com/embed/evZwsIagNNw";
    const {locale, setLocale} = useLocaleContext();
    return (
        <>
            <section id="about-3" className={`wide-60 about-section division ${helperCls ? helperCls : ""}`}>
            <div className="container">
                    <div className="row align-items-center"> {/* Add 'align-items-center' for vertical centering */}
                        {/* ABOUT TEXT */}
                        <div className="col-lg-8"> {/* Adjust the size as needed */}
                            <div className="about-1-txt">
                                {/* Title */}
                                <h4 className="h2-sm coffee-color" dangerouslySetInnerHTML={{ __html: t("demoTable", locale) }}></h4>
                                {/* Other text and elements */}
                            </div>
                        </div> {/* END ABOUT TEXT */}

                        {/* ABOUT VIDEO */}
                        <div className="col-lg-4"> {/* Adjust the size as needed */}
                        <div className="about-3-img text-center video-container">
                                <iframe
                                    src={youtubeUrl} 
                                    title="YouTube video player" 
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                    allowFullScreen>
                                </iframe>
                            </div>
                        </div> {/* END ABOUT VIDEO */}
                    </div> {/* End row */}
                </div> {/* End container */}
            </section>
        </>
    )
}
