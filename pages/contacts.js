import Layout from "@/components/layout/Layout";
import Banner3 from "@/components/sections/banner/Banner3";
import Link from "next/link";
export default function Home() {
    return (
        <>
            <Layout
                pageId={"contacts-page"}
                activePage={"Contact Us"}
                pageTitle={"Contact Us"}
                headerStyle={1}
                footerStyle={1}
            >

                <section id="contacts-5" className="wide-80 contacts-section division">
                    <div className="container">
                        {/* CONTACT INFO
					============================================= */}
                        <div className="row">
                            <div className="col-xl-10 offset-xl-1">
                                <div className="row">
                                    {/* LOCATION */}
                                    <div className="col-md-4">
                                        <div className="cbox-5">
                                            {/* Title */}
                                            <h5 className="h5-lg">Location</h5>
                                            {/* Address */}
                                            <p className="p-md">8721 M Central Avenue,</p>
                                            <p className="p-md">Los Angeles, CA 90036,</p>
                                            <p className="p-md">United States</p>
                                        </div>
                                    </div>
                                    {/* QUICK CONTACTS */}
                                    <div className="col-md-4">
                                        <div className="cbox-5">
                                            {/* Title */}
                                            <h5 className="h5-lg">Working Hours</h5>
                                            {/* Text */}
                                            <p className="p-md">Mon-Fri: 9:00AM - 10:00PM</p>
                                            <p className="p-md">Saturday: 10:00AM - 8:30PM</p>
                                            <p className="p-md">Sunday: 12:00PM - 5:00PM</p>
                                        </div>
                                    </div>
                                    {/* WORKING HOURS */}
                                    <div className="col-md-4">
                                        <div className="cbox-5">
                                            {/* Title */}
                                            <h5 className="h5-lg">Working Hours</h5>
                                            {/* Title */}
                                            <p className="p-md">P: +12 3 3456 7890</p>
                                            <p className="p-md">F: +12 9 8765 4321</p>
                                            <p className="p-md">E: <Link href="/mailto:yourdomain@mail.com" className="yellow-color">hello@yourdomain.com</Link></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>	{/* END CONTACT INFO */}
                        {/* GOOGLE MAP
					============================================= */}
                        <div className="row">
                            <div className="col-md-12">
                                <div id="gmap">
                                    <div className="google-map">
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.838357620288!2d144.95358331497258!3d-37.81725497975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4dd5a05d97%3A0x3e64f855a564844d!2zMTIxIEtpbmcgU3QsIE1lbGJvdXJuZSBWSUMgMzAwMCwg0JDQstGB0YLRgNCw0LvQuNGP!5e0!3m2!1sru!2sua!4v1605805230806!5m2!1sru!2sua" width={600} height={450} style={{ border: 0 }} allowFullScreen aria-hidden="false" tabIndex={0} />
                                    </div>
                                </div>
                            </div>
                        </div>	{/* END GOOGLE MAP */}
                        {/* SECTION TITLE */}
                        <div className="row">
                            <div className="col-lg-10 offset-lg-1">
                                <div className="section-title mb-40 text-center">
                                    {/* Title 	*/}
                                    <h2 className="h2-xl">Get in Touch</h2>
                                    {/* Text */}
                                    <p className="p-xl">Aliquam a augue suscipit, luctus neque purus ipsum neque undo dolor
                                        primis libero tempus, blandit a cursus varius magna
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* CONTACT FORM */}
                        <div className="row">
                            <div className="col-lg-10 offset-lg-1">
                                <div className="form-holder">
                                    <form name="contactform" className="row contact-form">
                                        {/* Form Input */}
                                        <div className="col-md-12 col-lg-6">
                                            <input type="text" name="name" className="form-control name" placeholder="Your Name*" />
                                        </div>
                                        {/* Form Input */}
                                        <div className="col-md-12 col-lg-6">
                                            <input type="email" name="email" className="form-control email" placeholder="Email Address*" />
                                        </div>
                                        {/* Form Input */}
                                        <div className="col-md-12">
                                            <input type="text" name="subject" className="form-control subject" placeholder="What's this about?" />
                                        </div>
                                        {/* Form Textarea */}
                                        <div className="col-md-12">
                                            <textarea name="message" className="form-control message" rows={6} placeholder="Your Message ..." defaultValue={""} />
                                        </div>
                                        {/* Form Button */}
                                        <div className="col-md-12 mt-5 text-right">
                                            <button type="submit" className="btn btn-md btn-red tra-red-hover submit">Send Message</button>
                                        </div>
                                        {/* Form Message */}
                                        <div className="col-md-12 contact-form-msg text-center">
                                            <div className="sending-msg"><span className="loading" /></div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>  {/* END CONTACT FORM */}
                    </div>	   {/* End container */}
                </section>	{/* END CONTACTS-5 */}

                <Banner3 helperCls="bg-yellow" />
            </Layout>
        </>
    )
}