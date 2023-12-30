import Link from "next/link";

export default function Contacts3({helperCls}) {
    return (
        <>
            <section id="contacts-3" className={`bg-fixed wide-60 contacts-section division ${helperCls ? helperCls : ""}`}>
                <div className="container">
                    {/* SECTION TITLE */}
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <div className="section-title mb-60 text-center">
                                {/* Title 	*/}
                                <h2 className="h2-xl red-color">Our Locations</h2>
                                {/* Text */}
                                <p className="p-xl">Aliquam a augue suscipit, luctus neque purus ipsum neque undo dolor
                                    primis libero tempus, blandit a cursus varius magna
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {/* LOCATION-1 */}
                        <div className="col-md-6 col-lg-4">
                            <div className="cbox-3 text-center">
                                {/* Image */}
                                <div className="hover-overlay">
                                    <img className="img-fluid" src="/images/location-1.jpg" alt="location-image" />
                                </div>
                                {/* Text */}
                                <div className="cbox-3-txt">
                                    {/* Location */}
                                    <h5 className="h5-xl red-color">Downtown</h5>
                                    {/* Phone */}
                                    <h6 className="h6-xl">Phone: <span><Link href="/tel:123456789">789-654-3210</Link></span></h6>
                                    {/* Address */}
                                    <h6 className="h6-lg mt-20">Address</h6>
                                    <p className="grey-color">8721 M Central Avenue,</p>
                                    <p className="grey-color">Los Angeles, CA 90036</p>
                                    {/* Working Hours */}
                                    <p className="grey-color">Daily 11AM - 10PM</p>
                                </div>
                            </div>
                        </div>
                        {/* LOCATION-2 */}
                        <div className="col-md-6 col-lg-4">
                            <div className="cbox-3 text-center">
                                {/* Image */}
                                <div className="hover-overlay">
                                    <img className="img-fluid" src="/images/location-2.jpg" alt="location-image" />
                                </div>
                                {/* Text */}
                                <div className="cbox-3-txt">
                                    {/* Location */}
                                    <h5 className="h5-xl red-color">Central City</h5>
                                    {/* Phone */}
                                    <h6 className="h6-xl">Phone: <span><Link href="/tel:123456789">789-456-0123</Link></span></h6>
                                    {/* Address */}
                                    <h6 className="h6-lg mt-20">Address</h6>
                                    <p className="grey-color">148 D Central Avenue,</p>
                                    <p className="grey-color">Los Angeles, CA 90012</p>
                                    {/* Working Hours */}
                                    <p className="grey-color">Daily 11AM - 10PM</p>
                                </div>
                            </div>
                        </div>
                        {/* LOCATION-3 */}
                        <div className="col-md-6 col-lg-4">
                            <div className="cbox-3 text-center">
                                {/* Image */}
                                <div className="hover-overlay">
                                    <img className="img-fluid" src="/images/location-3.jpg" alt="location-image" />
                                </div>
                                {/* Text */}
                                <div className="cbox-3-txt">
                                    {/* Location */}
                                    <h5 className="h5-xl red-color">Hollywood</h5>
                                    {/* Phone */}
                                    <h6 className="h6-xl">Phone: <span><Link href="/tel:123456789">789-645-0123</Link></span></h6>
                                    {/* Address */}
                                    <h6 className="h6-lg mt-20">Address</h6>
                                    <p className="grey-color">678 W Hollywood Way,</p>
                                    <p className="grey-color">Burbank CA 91505</p>
                                    {/* Working Hours */}
                                    <p className="grey-color">Daily 10AM - 10PM</p>
                                </div>
                            </div>
                        </div>
                    </div>    {/* End row */}
                </div>	   {/* End container */}
            </section>
        </>
    )
}
