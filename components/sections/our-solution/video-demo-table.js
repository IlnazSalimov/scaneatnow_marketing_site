
export default function Forwhom({ icon, helperCls, newImg }) {
    const videoSrc = "/images/our-solution/counter service.mp4";
    const youtubeUrl = "https://www.youtube.com/embed/evZwsIagNNw";
    return (
        <>
            <section id="about-3" className={`wide-60 about-section division ${helperCls ? helperCls : ""}`}>
            <div className="container">
                    <div className="row align-items-center"> {/* Add 'align-items-center' for vertical centering */}
                        {/* ABOUT TEXT */}
                        <div className="col-lg-8"> {/* Adjust the size as needed */}
                            <div className="about-1-txt">
                                {/* Title */}
                                <h4 className="h2-sm coffee-color">View the <strong style={{ color: 'blue', fontWeight: 'bold' }}>demo</strong> of our solution for restauarants offering <strong style={{ color: 'blue', fontWeight: 'bold' }}>table service.</strong></h4>
                                {/* Other text and elements */}
                            </div>
                        </div> {/* END ABOUT TEXT */}

                        {/* ABOUT VIDEO */}
                        <div className="col-lg-4"> {/* Adjust the size as needed */}
                        <div className="about-3-img text-center">
                                <iframe 
                                    width="560" 
                                    height="315" 
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
