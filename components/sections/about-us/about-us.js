import Link from "next/link";

export default function AboutUs({ icon, helperCls, newImg }) {
    return (
        <>
            <section id="about-3" className={`wide-60 about-section division ${helperCls ? helperCls : ""}`}>
                <div className="container">
                    <div className="row d-flex align-items-center">
                        {/* ABOUT IMAGE */}
                        <div className="col-md-5 col-lg-3">
                            <div className="about-3-img text-center mb-40">
                                <img className="img-fluid" src={`/images/our-solution/${newImg ? newImg : "CEO.jpg"}`} alt="about-image"/>

                            </div>
                        </div>
                        {/* ABOUT TEXT */}
                        <div className="col-md-5 col-lg-7">
                            <div className="about-3-txt mb-40">


                                {icon ?
                                    <>
                                        {/* Title */}
                                        <h2 className="h2-sm coffee-color">Scaneatnow is European startup</h2>
                                        {/* Text */}
                                        <p className="p-md" style={{fontSize: '27px'}}>Our developers and sales managers are in Germany, Norway, Estonia
                                        </p>
                                        <p className="p-md" style={{fontSize: '27px'}}>CEO: Ilnaz Salimov
                                        </p>
                                        {/* List */}
                                        <ul className="txt-list">
                                            <li className="list-item">
                                                <p className="p-md" style={{fontSize: '27px'}}>With counter service
                                                </p>
                                            </li>
                                            <li className="list-item">
                                                <p className="p-md" style={{fontSize: '27px'}}>With table service</p>
                                            </li>
                                        </ul>
                                        {/* Icons List */}
                                        <div className="abox-2-wrapper ico-70">
                                            <div className="row text-center">
                                                {/* ABOUT BOX #1 */}
                                                <div className="col-sm-3">
                                                    <div className="abox-2">
                                                        {/* Icon */}
                                                        <div className="abox-2-ico grey-color"><span className="flaticon-burger" /></div>
                                                        {/* Text */}
                                                        <h6 className="h6-lg">Burgers</h6>
                                                    </div>
                                                </div>
                                                {/* ABOUT BOX #2 */}
                                                <div className="col-sm-3">
                                                    <div className="abox-2">
                                                        {/* Icon */}
                                                        <div className="abox-2-ico grey-color"><span className="flaticon-french-fries" /></div>
                                                        {/* Text */}
                                                        <h6 className="h6-lg">Fries</h6>
                                                    </div>
                                                </div>
                                                {/* ABOUT BOX #3 */}
                                                <div className="col-sm-3">
                                                    <div className="abox-2">
                                                        {/* Icon */}
                                                        <div className="abox-2-ico grey-color"><span className="flaticon-fried-chicken" /></div>
                                                        {/* Text */}
                                                        <h6 className="h6-lg">Chicken</h6>
                                                    </div>
                                                </div>
                                                {/* ABOUT BOX #4 */}
                                                <div className="col-sm-3">
                                                    <div className="abox-2">
                                                        {/* Icon */}
                                                        <div className="abox-2-ico grey-color"><span className="flaticon-salad" /></div>
                                                        {/* Text */}
                                                        <h6 className="h6-lg">Salads</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>	{/* End Icons List */}

                                    </>
                                    :
                                    <>

                                        {/* Title */}
                                        <h2 className="h4-sm">Scaneatnow is a European startup</h2>
                                        {/* Text */}
                                        <p className="p-md" style={{fontSize: '27px'}}>ScanEatNow is a European startup with developers and sales managers based in Germany, Norway, and Estonia
                                        </p>
                                        <p className="p-md" style={{fontSize: '27px'}}>CEO: Ilnaz Salimov
                                        </p>
                                        <p className="p-md" style={{fontSize: '27px'}}>Email: <Link href="/mailto:ilnaz.salimov@scaneatnow.com" className="yellow-color" >ilnaz.salimov@scaneatnow.com</Link></p>
                                    </>}

                            </div>
                        </div>	{/* END ABOUT TEXT */}
                    </div>	   {/* End row */}
                </div>	   {/* End container */}
            </section>
        </>
    )
}