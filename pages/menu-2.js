import Layout from "@/components/layout/Layout";
import Banner4 from "@/components/sections/banner/Banner4";
import Menu6 from "@/components/sections/menu/Menu6";
import Link from "next/link";
export default function Home() {
    return (
        <>
            <Layout
                pageId={"menu-page"}
                activePage={"Menu #2"}
                pageTitle={"Main Menu #2"}
                headerStyle={1}
                footerStyle={1}
            >

                <Menu6 />

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
                </div>

                <Banner4 />


            </Layout>
        </>
    )
}