import Link from "next/link";

export default function Footer3() {
    return (
        <>
            <footer id="footer-3" className="footer division">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">

                            <div className="footer-logo"><img src="/images/logo-01.png" alt="footer-logo" /></div>

                            <div className="footer-socials-links">

                                <ul className="foo-socials text-center clearfix">
                                    <li><Link href="#" className="ico-facebook"><i className="fab fa-facebook-f" /></Link></li>
                                    <li><Link href="#" className="ico-twitter"><i className="fab fa-twitter" /></Link></li>
                                    <li><Link href="#" className="ico-instagram"><i className="fab fa-instagram" /></Link></li>
                                    <li><Link href="#" className="ico-youtube"><i className="fab fa-youtube" /></Link></li>
                                    <li><Link href="#" className="ico-pinterest"><i className="fab fa-pinterest-p" /></Link></li>

                                </ul>
                            </div>

                            <div className="footer-links">
                                <ul className="bottom-footer-list clearfix">
                                    <li><p><Link href="#">About</Link></p></li>
                                    <li><p><Link href="#">Menu</Link></p></li>
                                    <li><p><Link href="#">Order Now</Link></p></li>
                                    <li><p><Link href="#">Gallery</Link></p></li>
                                    <li><p><Link href="#">Gift Cards</Link></p></li>
                                    <li><p className="last-li"><Link href="#">Contacts</Link></p></li>
                                </ul>
                            </div>

                            <div className="footer-copyright">
                                <p>© {new Date().getFullYear()} Testo. All Rights Reserved</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}
