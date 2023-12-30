import Link from "next/link";

export default function Footer1() {
    return (
        <>
            <footer id="footer-1" className="footer division">
                <div className="container">
                    <div className="row">

                        <div className="col-md-5 col-lg-4 col-xl-4">
                            <div className="footer-info mb-40">

                                <div className="footer-logo"><img src="/images/logo-01.png" alt="footer-logo" /></div>

                                <p>© {new Date().getFullYear()} Testo. All Rights Reserved</p>
                            </div>
                        </div>

                        <div className="col-md-7 col-lg-4 col-xl-5">
                            <div className="footer-contacts mb-40">

                                <p className="p-xl mt-10">Los Angeles,</p>
                                <p className="p-xl">8721 M Central Avenue, CA 90036</p>

                                <p className="p-lg foo-email">Email: <Link href="/mailto:yourdomain@mail.com">hello@yourdomain.com</Link></p>
                                <p className="p-lg">Call Now: <span className="yellow-color"><Link href="/tel:123456789">789-654-3210</Link></span></p>
                            </div>
                        </div>

                        <div className="col-md-12 col-lg-4 col-xl-3">
                            <div className="footer-img mb-40">

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
                </div>
            </footer>


        </>
    )
}
