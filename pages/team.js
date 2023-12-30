import Layout from "@/components/layout/Layout";
import Banner3 from "@/components/sections/banner/Banner3";
import Link from "next/link";
export default function Home() {
    return (
        <>
            <Layout
                pageId={"team-page"}
                activePage={"OUR TEAM"}
                pageTitle={"MEET THE TEAM"}
            >

                <section id="team-1" className="team-1 wide-60 reviews-section division">
                    <div className="container">
                        {/* TEAM-1 WRAPPER */}
                        <div className="team-1-wrapper text-center">
                            <div className="row">
                                {/* TEAM MEMBER #1 */}
                                <div className="col-sm-6 col-lg-3">
                                    <div className="team-member">
                                        {/* Team Member Photo */}
                                        <div className="team-member-photo">
                                            <img className="img-fluid" src="/images/team-1.jpg" alt="team-member-foto" />
                                            {/* Social Icons */}
                                            <div className="tm-social clearfix">
                                                <ul className="text-center clearfix">
                                                    <li><Link href="#" className="ico-facebook"><i className="fab fa-facebook-f" /></Link></li>
                                                    <li><Link href="#" className="ico-twitter"><i className="fab fa-twitter" /></Link></li>
                                                    <li><Link href="#" className="ico-linkedin"><i className="fab fa-linkedin-in" /></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        {/* Team Member Meta */}
                                        <div className="tm-meta">
                                            <h5 className="h5-xs">Sam Richardson</h5>
                                            <span className="yellow-color">Head chef</span>
                                        </div>
                                    </div>
                                </div>
                                {/* TEAM MEMBER #2 */}
                                <div className="col-sm-6 col-lg-3">
                                    <div className="team-member">
                                        {/* Team Member Photo */}
                                        <div className="team-member-photo">
                                            <img className="img-fluid" src="/images/team-2.jpg" alt="team-member-foto" />
                                            {/* Social Icons */}
                                            <div className="tm-social clearfix">
                                                <ul className="text-center clearfix">
                                                    <li><Link href="#" className="ico-facebook"><i className="fab fa-facebook-f" /></Link></li>
                                                    <li><Link href="#" className="ico-twitter"><i className="fab fa-twitter" /></Link></li>
                                                    <li><Link href="#" className="ico-instagram"><i className="fab fa-instagram" /></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        {/* Team Member Meta */}
                                        <div className="tm-meta">
                                            <h5 className="h5-xs">Jennifer Harper</h5>
                                            <span className="yellow-color">Sous Chef</span>
                                        </div>
                                    </div>
                                </div>
                                {/* TEAM MEMBER #3 */}
                                <div className="col-sm-6 col-lg-3">
                                    <div className="team-member">
                                        {/* Team Member Photo */}
                                        <div className="team-member-photo">
                                            <img className="img-fluid" src="/images/team-3.jpg" alt="team-member-foto" />
                                            {/* Social Icons */}
                                            <div className="tm-social clearfix">
                                                <ul className="text-center clearfix">
                                                    <li><Link href="#" className="ico-facebook"><i className="fab fa-facebook-f" /></Link></li>
                                                    <li><Link href="#" className="ico-twitter"><i className="fab fa-twitter" /></Link></li>
                                                    <li><Link href="#" className="ico-linkedin"><i className="fab fa-linkedin-in" /></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        {/* Team Member Meta */}
                                        <div className="tm-meta">
                                            <h5 className="h5-xs">Jonathan Coronado</h5>
                                            <span className="yellow-color">Burger - Сhef</span>
                                        </div>
                                    </div>
                                </div>
                                {/* TEAM MEMBER #4 */}
                                <div className="col-sm-6 col-lg-3">
                                    <div className="team-member">
                                        {/* Team Member Photo */}
                                        <div className="team-member-photo">
                                            <img className="img-fluid" src="/images/team-4.jpg" alt="team-member-foto" />
                                            {/* Social Icons */}
                                            <div className="tm-social clearfix">
                                                <ul className="text-center clearfix">
                                                    <li><Link href="#" className="ico-facebook"><i className="fab fa-facebook-f" /></Link></li>
                                                    <li><Link href="#" className="ico-twitter"><i className="fab fa-twitter" /></Link></li>
                                                    <li><Link href="#" className="ico-instagram"><i className="fab fa-instagram" /></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        {/* Team Member Meta */}
                                        <div className="tm-meta">
                                            <h5 className="h5-xs">Jorge Stucky</h5>
                                            <span className="yellow-color">Grill Chef</span>
                                        </div>
                                    </div>
                                </div>
                                {/* TEAM MEMBER #5 */}
                                <div className="col-sm-6 col-lg-3">
                                    <div className="team-member">
                                        {/* Team Member Photo */}
                                        <div className="team-member-photo">
                                            <img className="img-fluid" src="/images/team-5.jpg" alt="team-member-foto" />
                                            {/* Social Icons */}
                                            <div className="tm-social clearfix">
                                                <ul className="text-center clearfix">
                                                    <li><Link href="#" className="ico-facebook"><i className="fab fa-facebook-f" /></Link></li>
                                                    <li><Link href="#" className="ico-twitter"><i className="fab fa-twitter" /></Link></li>
                                                    <li><Link href="#" className="ico-linkedin"><i className="fab fa-linkedin-in" /></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        {/* Team Member Meta */}
                                        <div className="tm-meta">
                                            <h5 className="h5-xs">Anthony Backer</h5>
                                            <span className="yellow-color">Fry Chef</span>
                                        </div>
                                    </div>
                                </div>
                                {/* TEAM MEMBER #6 */}
                                <div className="col-sm-6 col-lg-3">
                                    <div className="team-member">
                                        {/* Team Member Photo */}
                                        <div className="team-member-photo">
                                            <img className="img-fluid" src="/images/team-6.jpg" alt="team-member-foto" />
                                            {/* Social Icons */}
                                            <div className="tm-social clearfix">
                                                <ul className="text-center clearfix">
                                                    <li><Link href="#" className="ico-facebook"><i className="fab fa-facebook-f" /></Link></li>
                                                    <li><Link href="#" className="ico-twitter"><i className="fab fa-twitter" /></Link></li>
                                                    <li><Link href="#" className="ico-instagram"><i className="fab fa-instagram" /></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        {/* Team Member Meta */}
                                        <div className="tm-meta">
                                            <h5 className="h5-xs">Lea Victoria</h5>
                                            <span className="yellow-color">Roast Chef</span>
                                        </div>
                                    </div>
                                </div>
                                {/* TEAM MEMBER #7 */}
                                <div className="col-sm-6 col-lg-3">
                                    <div className="team-member">
                                        {/* Team Member Photo */}
                                        <div className="team-member-photo">
                                            <img className="img-fluid" src="/images/team-7.jpg" alt="team-member-foto" />
                                            {/* Social Icons */}
                                            <div className="tm-social clearfix">
                                                <ul className="text-center clearfix">
                                                    <li><Link href="#" className="ico-facebook"><i className="fab fa-facebook-f" /></Link></li>
                                                    <li><Link href="#" className="ico-twitter"><i className="fab fa-twitter" /></Link></li>
                                                    <li><Link href="#" className="ico-linkedin"><i className="fab fa-linkedin-in" /></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        {/* Team Member Meta */}
                                        <div className="tm-meta">
                                            <h5 className="h5-xs">Justin Roberto</h5>
                                            <span className="yellow-color">Pizza Chef</span>
                                        </div>
                                    </div>
                                </div>
                                {/* TEAM MEMBER #8 */}
                                <div className="col-sm-6 col-lg-3">
                                    <div className="team-member">
                                        {/* Team Member Photo */}
                                        <div className="team-member-photo">
                                            <img className="img-fluid" src="/images/team-8.jpg" alt="team-member-foto" />
                                            {/* Social Icons */}
                                            <div className="tm-social clearfix">
                                                <ul className="text-center clearfix">
                                                    <li><Link href="#" className="ico-facebook"><i className="fab fa-facebook-f" /></Link></li>
                                                    <li><Link href="#" className="ico-twitter"><i className="fab fa-twitter" /></Link></li>
                                                    <li><Link href="#" className="ico-instagram"><i className="fab fa-instagram" /></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        {/* Team Member Meta */}
                                        <div className="tm-meta">
                                            <h5 className="h5-xs">Stephanie Reed</h5>
                                            <span className="yellow-color">Executive Chef</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>	{/* END TEAM-1 WRAPPER */}
                    </div>	    {/* End container */}
                </section>	 {/* END TEAM-1 */}
                {/* PAGE PAGINATION
			============================================= */}
                <div className="bg-color-01 page-pagination division">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <nav aria-label="Page navigation">
                                    <ul className="pagination justify-content-center">
                                        <li className="page-item disabled"><Link className="page-link" href="#" tabIndex={-1}><i className="fas fa-angle-left" /></Link></li>
                                        <li className="page-item active"><Link className="page-link" href="#">1 <span className="sr-only">(current)</span></Link></li>
                                        <li className="page-item"><Link className="page-link" href="#">2</Link></li>
                                        <li className="page-item"><Link className="page-link" href="#">3</Link></li>
                                        <li className="page-item"><Link className="page-link" href="#">4</Link></li>
                                        <li className="page-item"><Link className="page-link" href="#"><i className="fas fa-angle-right" /></Link></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>  {/* End row */}
                    </div> {/* End container */}
                </div>	{/* END PAGE PAGINATION */}

                <Banner3 helperCls="bg-yellow" />


            </Layout>
        </>
    )
}