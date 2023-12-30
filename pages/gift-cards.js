import Layout from "@/components/layout/Layout";
import Banner3 from "@/components/sections/banner/Banner3";
import Link from "next/link";
export default function Home() {
    return (
        <>
            <Layout
                pageId={"gift-page"}
                activePage={"Gift Cards"}
                pageTitle={"Gift Cards"}
                headerStyle={1}
                footerStyle={1}
            >

                <div id="cards-01" className="wide-60 cards-section division">
                    <div className="container">
                        {/* GIFT CARDS IMAGE */}
                        <div className="cards-01-img mb-100">
                            <div className="row">
                                <div className="col-md-12">
                                    <img className="img-fluid" src="/images/voucher.jpg" alt="cards-image" />
                                </div>
                            </div>
                        </div>
                        {/* SECTION TITLE */}
                        <div className="row">
                            <div className="col-lg-10 offset-lg-1">
                                <div className="section-title mb-60 text-center">
                                    {/* Title 	*/}
                                    <h2 className="h2-xl">Select Your Card</h2>
                                    {/* Text */}
                                    <p className="p-xl">Aliquam a augue suscipit, luctus neque purus ipsum neque undo dolor
                                        primis libero tempus, blandit a cursus varius magna
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row d-flex align-items-center">
                            {/* CARD #1 */}
                            <div className="col-md-4">
                                <div className="card-box">
                                    {/* Image */}
                                    <img className="img-fluid" src="/images/card-1.png" alt="card-image" />
                                    {/* Title */}
                                    <h5 className="h5-xl">$50 Gift Card</h5>
                                    {/* Text */}
                                    <p className="p-sm grey-color">Fusce eu cursus non nulla vitae massa placerat purus undo congue augue</p>
                                    {/* Button */}
                                    <Link href="/product-single" className="btn btn-sm btn-red tra-red-hover">
                                        <span className="flaticon-shopping-bag" /> Add to Cart
                                    </Link>
                                </div>
                            </div>
                            {/* CARD #2 */}
                            <div className="col-md-4">
                                <div className="card-box">
                                    {/* Image */}
                                    <img className="img-fluid" src="/images/card-2.png" alt="card-image" />
                                    {/* Title */}
                                    <h5 className="h5-xl">$85 Gift Card</h5>
                                    {/* Text */}
                                    <p className="p-sm grey-color">Fusce eu cursus non nulla vitae massa placerat purus undo congue augue</p>
                                    {/* Button */}
                                    <Link href="/product-single" className="btn btn-sm btn-red tra-red-hover">
                                        <span className="flaticon-shopping-bag" /> Add to Cart
                                    </Link>
                                </div>
                            </div>
                            {/* CARD #3 */}
                            <div className="col-md-4">
                                <div className="card-box pbox-4-last">
                                    {/* Image */}
                                    <img className="img-fluid" src="/images/card-3.png" alt="card-image" />
                                    {/* Title */}
                                    <h5 className="h5-xl">$125 Gift Card</h5>
                                    {/* Text */}
                                    <p className="p-sm grey-color">Fusce eu cursus non nulla vitae massa placerat purus undo congue augue</p>
                                    {/* Button */}
                                    <Link href="/product-single" className="btn btn-sm btn-red tra-red-hover">
                                        <span className="flaticon-shopping-bag" /> Add to Cart
                                    </Link>
                                </div>
                            </div>
                        </div> {/* End row */}
                    </div>  {/* End container */}
                </div>

                <Banner3 helperCls="bg-yellow" />

            </Layout>
        </>
    )
}