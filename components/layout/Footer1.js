import Link from "next/link";

export default function Footer1() {
    return (
        <>
            <footer id="footer-1" className="footer division">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 col-lg-4 col-xl-4">
                            <div className="footer-info mb-40">
                                <div className="footer-contacts mb-40">
                                    <p className="p-xl mt-10">Germany</p>
                                    <p className="p-lg foo-email">Email: <Link href="mailto:germany@scaneatnow.com" style={{ color: 'white' }}>germany@scaneatnow.com</Link></p>
                                    <p className="p-lg">Tel.: <span className="yellow-color"><Link href="tel:+4917664683597">(+49) 176 64683597</Link></span></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7 col-lg-4 col-xl-4">
                            <div className="footer-contacts mb-40">
                                <p className="p-xl mt-10">Norway</p>
                                <p className="p-lg foo-email">Email: <Link href="mailto:norway@scaneatnow.com" style={{ color: 'white' }}>norway@scaneatnow.com</Link></p>
                                <p className="p-lg">Tel.: <span className="yellow-color"><Link href="tel:+4747141426">(+47) 47141426</Link></span></p>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-4 col-xl-4">
                            <div className="footer-img mb-40">
                                <div className="footer-contacts mb-40">
                                    <p className="p-xl mt-10">Estonia</p>
                                    <p className="p-lg foo-email">Email: <Link href="mailto:estonia@scaneatnow.com" style={{ color: 'white' }}>estonia@scaneatnow.com</Link></p>
                                    <p className="p-lg">Tel.: <span className="yellow-color"><Link href="tel:+4747141426">(+372) 58880788</Link></span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
