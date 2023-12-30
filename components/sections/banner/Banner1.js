
export default function Banner1({helperCls}) {
    return (
        <>
            <section id="banner-1" className={`bg-fixed banner-section division ${helperCls ? helperCls : ""}`}>
                <div className="container">
                    <div className="row">
                        {/* BANNER TEXT */}
                        <div className="col-lg-10 offset-lg-1">
                            <div className="banner-1-txt white-color">
                                {/* Title */}
                                <h2 className="h2-lg">Covid-19 Update</h2>
                                {/* Text */}
                                <p className="p-lg">We take the safety of our staff and customers very seriously and are doing all we can
                                    to operate in the safest manner possible.  Here are the safety measures being taken across all locations:
                                </p>
                                {/* List */}
                                <ul className="txt-list">
                                    <li><p className="p-lg">Masks and gloves for all employees at all times</p></li>
                                    <li><p className="p-lg">Social distancing inside the shop to the best of our ability</p></li>
                                    <li><p className="p-lg">Glove change/hand washing every hour</p></li>
                                    <li><p className="p-lg">Increased cleaning and sanitizing of all touchable surfaces throughout the day</p></li>
                                    <li><p className="p-lg">Daily symptom checks with all staff</p></li>
                                </ul>
                            </div>
                        </div>
                    </div>	 {/* End row */}
                </div>	   {/* End container */}
            </section>
        </>
    )
}
