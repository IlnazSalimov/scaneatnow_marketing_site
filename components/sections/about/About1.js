import Link from "next/link";

export default function About1({helperCls}) {
    return (
        <>
            <section id="about-1" className={`bg-fixed wide-100 about-section division ${helperCls ? helperCls : ""}`}>
                <div className="container">
                    <div className="row">
                        {/* ABOUT TEXT */}
                        <div className="col-xl-10 offset-xl-1">
                            <div className="about-1-txt text-center">
                                {/* Title */}
                                <h2><span className="yellow-color">Burgers…</span> what else?</h2>
                                {/* Text */}
                                <p className="p-xl grey-color">Porta semper lacus cursus, feugiat primis ultrice a ligula risus auctor an
                                    tempus feugiat dolor lacinia cubilia curae integer orci congue and metus mollislorem primis in integer
                                    metus curae integer orci congue integer and primis in integer metus  mollis faucibus
                                </p>
                                {/* Icons List */}
                                <div className="abox-1-wrapper ico-75">
                                    <div className="row">
                                        {/* ABOUT BOX #1 */}
                                        <div className="col-sm-4 col-md-2">
                                            <div className="abox-1 mb-40">
                                                {/* Icon */}
                                                <div className="abox-1-ico grey-color"><span className="flaticon-burger" /></div>
                                                {/* Text */}
                                                <h6 className="h6-xl">Burgers</h6>
                                            </div>
                                        </div>
                                        {/* ABOUT BOX #2 */}
                                        <div className="col-sm-4 col-md-2">
                                            <div className="abox-1 mb-40">
                                                {/* Icon */}
                                                <div className="abox-1-ico grey-color"><span className="flaticon-french-fries" /></div>
                                                {/* Text */}
                                                <h6 className="h6-xl">Fries</h6>
                                            </div>
                                        </div>
                                        {/* ABOUT BOX #3 */}
                                        <div className="col-sm-4 col-md-2">
                                            <div className="abox-1 mb-40">
                                                {/* Icon */}
                                                <div className="abox-1-ico grey-color"><span className="flaticon-fried-chicken" /></div>
                                                {/* Text */}
                                                <h6 className="h6-xl">Chicken</h6>
                                            </div>
                                        </div>
                                        {/* ABOUT BOX #4 */}
                                        <div className="col-sm-4 col-md-2">
                                            <div className="abox-1 mb-40">
                                                {/* Icon */}
                                                <div className="abox-1-ico grey-color"><span className="flaticon-salad" /></div>
                                                {/* Text */}
                                                <h6 className="h6-xl">Salads</h6>
                                            </div>
                                        </div>
                                        {/* ABOUT BOX #5 */}
                                        <div className="col-sm-4 col-md-2">
                                            <div className="abox-1 mb-40">
                                                {/* Icon */}
                                                <div className="abox-1-ico grey-color"><span className="flaticon-donut" /></div>
                                                {/* Text */}
                                                <h6 className="h6-xl">Desserts</h6>
                                            </div>
                                        </div>
                                        {/* ABOUT BOX #6 */}
                                        <div className="col-sm-4 col-md-2">
                                            <div className="abox-1 mb-40">
                                                {/* Icon */}
                                                <div className="abox-1-ico grey-color"><span className="flaticon-drinks" /></div>
                                                {/* Text */}
                                                <h6 className="h6-xl">Drinks</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>	{/* End Icons List */}
                                {/* Button */}
                                <Link href="/menu-3" className="btn btn-md btn-red tra-red-hover">Explore Full Menu</Link>
                            </div>
                        </div>	{/* END ABOUT TEXT */}
                    </div>    {/* End row */}
                </div>	   {/* End container */}
            </section>
        </>
    )
}
