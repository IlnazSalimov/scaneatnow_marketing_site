import Link from "next/link";

export default function Footer2() {
    return (
        <>
            <footer id="footer-2" className="footer division">
                <div className="container">
                    <div className="footer-2-holder text-center">
                        <div className="row">

                            <div className="col-sm-6 col-lg-3">
                                <div className="footer-info mb-30">

                                    <h5 className="h5-md">Location</h5>

                                    <p>8721 M Central Avenue,</p>
                                    <p>Los Angeles, CA 90036,</p>
                                    <p>United States</p>
                                </div>
                            </div>

                            <div className="col-sm-6 col-lg-3">
                                <div className="footer-info mb-30">

                                    <h5 className="h5-md">Working Hours</h5>

                                    <p>Mon-Fri: 9:00AM - 10:00PM</p>
                                    <p>Saturday: 10:00AM - 8:30PM</p>
                                    <p>Sunday: 12:00PM - 5:00PM</p>
                                </div>
                            </div>

                            <div className="col-sm-6 col-lg-3">
                                <div className="footer-contacts mb-30">

                                    <h5 className="h5-md">Order Now</h5>
                                    <p>Quaerat neque purus ipsum at neque dolor primis tempus</p>
                                    <p className="mt-5"><span className="yellow-color"><Link href="/tel:123456789">789-654-3210</Link></span></p>
                                </div>
                            </div>

                            <div className="col-sm-6 col-lg-3">
                                <div className="footer-socials-links mb-30">

                                    <h5 className="h5-md">Follow Us</h5>

                                    <p>Quaerat neque purus ipsum at neque dolor primis tempus</p>

                                    <ul className="foo-socials text-center clearfix">
                                        <li><Link href="#" className="ico-facebook"><i className="fab fa-facebook-f" /></Link></li>
                                        <li><Link href="#" className="ico-twitter"><i className="fab fa-twitter" /></Link></li>
                                        <li><Link href="#" className="ico-instagram"><i className="fab fa-instagram" /></Link></li>
                                        <li><Link href="#" className="ico-youtube"><i className="fab fa-youtube" /></Link></li>

                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="bottom-footer">
                            <div className="row d-flex align-items-center">
                                <div className="col-lg-10 offset-lg-1">

                                    <ul className="bottom-footer-list clearfix">
                                        <li><p>© {new Date().getFullYear()} Testo. All Rights Reserved</p></li>
                                        <li><p className="first-li"><Link href="#">About Us</Link></p></li>
                                        <li><p><Link href="#">Gift Cards</Link></p></li>
                                        <li><p><Link href="#">Terms Of Use</Link></p></li>
                                        <li><p className="last-li"><Link href="#">Privacy Policy</Link></p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}
