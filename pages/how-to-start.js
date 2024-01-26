import Layout from "@/components/layout/Layout";
import Banner3 from "@/components/sections/banner/Banner3";
import Link from "next/link";
export default function Home() {
    return (
        <>
            <Layout
                pageId={"gift-page"}
                activePage={"How to start"}
                pageTitle={"How to start"}
                headerStyle={1}
                footerStyle={1}
            >

                <div id="cards-01" className="wide-60 cards-section division">
                    <div className="container">
                        {/* SECTION TITLE */}
                        <div className="row">
                            <div className="col-lg-10 offset-lg-1">
                                <div className="section-title mb-60 text-center">
                                    {/* Title 	*/}
                                    <h2 className="h2-xl">Start using scaneatnow in 3 simple steps</h2>
                                    {/* Text */}
                                    <p className="p-xl">You do no need to change anything in your existing software if you want to use our solution in its default configuration. If you want to integrate our solution into your existing system - please contact us.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row d-flex align-items-center">
                            {/* CARD #1 */}
                            <div className="col-md-4">
                                <div className="card-box">
                                    {/* Image */}
                                    <img className="img-fluid" src="/images/our-solution/Step1.png" alt="card-image" />
                                    {/* Title */}
                                    <h5 className="h5-xl">Install our app for Android</h5>
                                    {/* Text */}
                                    <p className="p-sm grey-color">Create your restaurant profile, digital menu, tables in the app</p>
                                </div>
                            </div>
                            {/* CARD #2 */}
                            <div className="col-md-4">
                                <div className="card-box">
                                    {/* Image */}
                                    <img className="img-fluid" src="/images/our-solution/Step2.png" alt="card-image" />
                                    {/* Title */}
                                    <h5 className="h5-xl">Put QR codes on the tables</h5>
                                    {/* Text */}
                                    <p className="p-sm grey-color">You will receive QR codes from us, then you can print them and set on your tables</p>
                                </div>
                            </div>
                            {/* CARD #3 */}
                            <div className="col-md-4">
                                <div className="card-box pbox-4-last">
                                    {/* Image */}
                                    <img className="img-fluid" src="/images/our-solution/Step3.png" alt="card-image" />
                                    {/* Title */}
                                    <h5 className="h5-xl">Enjoy a new enhanced process</h5>
                                    {/* Text */}
                                    <p className="p-sm grey-color">You will automatically receive payments from customers. Orders will come to your Andoid app</p>
                                </div>
                            </div>
                        </div> {/* End row */}
                    </div>  {/* End container */}
                </div>

            </Layout>
        </>
    )
}