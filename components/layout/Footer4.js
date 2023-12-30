import Link from "next/link";

export default function Footer4() {
    return (
        <>
            <footer id="footer-4" className="footer division">
                <div className="container grey-color">

                    <div className="row">

                        <div className="col-xl-3">
                            <div className="footer-info mb-40">

                                <div className="footer-logo"><img src="/images/logo-01.png" alt="footer-logo" /></div>

                                <p>An orci nullam tempor a sapien eget gravida and integer donec ipsum porta justo integer</p>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4 col-xl-3">
                            <div className="footer-contacts mb-40">

                                <h5 className="h5-sm">Order Now</h5>

                                <p>8721 M Central Avenue,</p>
                                <p>Los Angeles, CA 90036</p>

                                <p className="foo-email txt-500 mt-15"><Link href="/mailto:yourdomain@mail.com">hello@yourdomain.com</Link></p>
                                <p><span className="yellow-color"><Link href="/tel:123456789">789-654-3210</Link></span></p>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4 col-xl-3">
                            <div className="footer-info mb-30">

                                <h5 className="h5-sm">Working Hours</h5>

                                <p>Quaerat neque purus ipsum at neque dolor primis tempus</p>

                                <p className="mt-15">Mon-Fri: <span>9:00AM - 10:00PM</span></p>
                                <p>Saturday: <span>10:00AM - 8:30PM</span></p>
                                <p>Sunday: <span>12:00PM - 5:00PM</span></p>
                            </div>
                        </div>

                        <div className="col-md-12 col-lg-4 col-xl-3">
                            <div className="footer-img mb-40">

                                <h5 className="h5-sm">Instagram Feed</h5>

                                <ul className="text-center clearfix">
                                    <li><Link href="#" target="_blank"><img className="insta-img" src="/images/instagram/img-01.jpg" alt="insta-img" /></Link></li>
                                    <li><Link href="#" target="_blank"><img className="insta-img" src="/images/instagram/img-02.jpg" alt="insta-img" /></Link></li>
                                    <li><Link href="#" target="_blank"><img className="insta-img" src="/images/instagram/img-03.jpg" alt="insta-img" /></Link></li>
                                    <li><Link href="#" target="_blank"><img className="insta-img" src="/images/instagram/img-04.jpg" alt="insta-img" /></Link></li>
                                    <li><Link href="#" target="_blank"><img className="insta-img" src="/images/instagram/img-05.jpg" alt="insta-img" /></Link></li>
                                    <li><Link href="#" target="_blank"><img className="insta-img" src="/images/instagram/img-06.jpg" alt="insta-img" /></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="bottom-footer">
                        <div className="row d-flex align-items-center">

                            <div className="col-md-5 col-lg-6">
                                <div className="footer-copyright">
                                    <p>© {new Date().getFullYear()} Testo. All Rights Reserved</p>
                                </div>
                            </div>

                            <div className="col-md-7 col-lg-6">
                                <ul className="bottom-footer-list text-right clearfix">
                                    <li><p className="first-list-link"><Link href="#"><i className="fab fa-facebook-f" /> Facebook</Link></p></li>
                                    <li><p><Link href="#"><i className="fab fa-twitter" /> Twitter</Link></p></li>
                                    <li><p><Link href="#"><i className="fab fa-youtube" /> YouTube</Link></p></li>
                                    <li><p className="last-li"><Link href="#"><i className="fab fa-yelp" /> Yelp</Link></p></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}
