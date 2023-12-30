import Layout from "@/components/layout/Layout";
import Newsletter1 from "@/components/sections/newsletter/Newsletter1";
import Link from "next/link";
export default function Home() {
    return (
        <>
            <Layout
                pageId={"faqs-page"}
                activePage={"F.A.Q.s"}
                pageTitle={"F.A.Q.s"}
                headerStyle={1}
                footerStyle={1}
            >

                <section id="faqs-1" className="wide-100 faqs-section division">
                    <div className="container">
                        {/* FAQs-1 QUESTIONS */}
                        <div className="faqs-1-questions">
                            <div className="row">
                                {/* QUESTIONS WRAPPER */}
                                <div className="col-lg-6">
                                    <div className="questions-wrapper">
                                        {/* QUESTION #1 */}
                                        <div className="question">
                                            {/* Question */}
                                            <h5 className="h5-xs">What payment methods do you accept?</h5>
                                            {/* Answer */}
                                            <p className="grey-color">Etiam amet mauris suscipit in odio. Integer congue undo metus. Vitae arcu mollis
                                                blandit ultrice ligula egestas a magna suscipit lectus magna suscipit luctus blandit molestie purus
                                            </p>
                                        </div>
                                        {/* QUESTION #2 */}
                                        <div className="question">
                                            {/* Question */}
                                            <h5 className="h5-xs">Is my payment information secure?</h5>
                                            {/* Answer */}
                                            <p className="grey-color">Aliqum mullam blandit and tempor sapien donec ipsum gravida porta. Velna vitae
                                                auctor congue quaerat and sodales sapien
                                            </p>
                                        </div>
                                        {/* QUESTION #3 */}
                                        <div className="question">
                                            {/* Question */}
                                            <h5 className="h5-xs">Is there a discount code?</h5>
                                            {/* Answer */}
                                            <p className="grey-color">Praesent semper lacus sed cursus porta, feugiat primis luctus in ligula eros ac
                                                ligula massa and faucibus orci a luctus aliquet and molestie purus venenatis aliquam eget lacinia
                                            </p>
                                        </div>
                                        {/* QUESTION #4 */}
                                        <div className="question">
                                            {/* Question */}
                                            <h5 className="h5-xs">What if I have lost my gift certificate?</h5>
                                            {/* Answer */}
                                            <p className="grey-color">Praesent semper lacus sed cursus porta, feugiat primis luctus in ligula eros ac
                                                ligula massa and faucibus orci a luctus aliquet and molestie purus venenatis aliquam eget lacinia
                                            </p>
                                        </div>
                                    </div>
                                </div>	{/* END QUESTIONS WRAPPER */}
                                {/* QUESTIONS WRAPPER */}
                                <div className="col-lg-6">
                                    <div className="questions-wrapper pc-30">
                                        {/* QUESTION #5 */}
                                        <div className="question">
                                            {/* Question */}
                                            <h5 className="h5-xs">How can I change something in my order?</h5>
                                            {/* Answer */}
                                            <p className="grey-color">Aliqum mullam blandit and tempor sapien donec ipsum at gravida porta. Velna vitae
                                                auctor congue tristique
                                            </p>
                                        </div>
                                        {/* QUESTION #6 */}
                                        <div className="question">
                                            {/* Question */}
                                            <h5 className="h5-xs">How much is shipping?</h5>
                                            {/* Answer */}
                                            <p className="grey-color">Praesent semper lacus sed cursus porta, feugiat primis luctus in ligula eros ac
                                                ligula massa and faucibus orci a luctus aliquet and molestie purus venenatis aliquam eget lacinia
                                            </p>
                                        </div>
                                        {/* QUESTION #7 */}
                                        <div className="question">
                                            {/* Question */}
                                            <h5 className="h5-xs">How long will my order take to be delivered?</h5>
                                            {/* Answer */}
                                            <p className="grey-color">Praesent semper lacus sed cursus porta, feugiat primis luctus in ligula ligula
                                                massa in faucibus orci a luctus ultrices ipsum primis in faucibus odio feugiat primis luctus in ligula eros
                                                ligula
                                            </p>
                                        </div>
                                        {/* QUESTION #8 */}
                                        <div className="question">
                                            {/* Question */}
                                            <h5 className="h5-xs">How do I track my order?</h5>
                                            {/* Answer */}
                                            <p className="grey-color">Praesent semper lacus sed cursus porta, feugiat primis luctus in ligula eros ac
                                                ligula massa and faucibus orci a luctus aliquet and molestie purus venenatis aliquam eget lacinia
                                            </p>
                                        </div>
                                    </div>
                                </div>	{/* END QUESTIONS WRAPPER */}
                            </div>	{/* End row */}
                        </div>	{/* END FAQs-1 QUESTIONS */}
                        {/* MORE QUESTIONS BUTTON */}
                        <div className="row">
                            <div className="col-md-12">
                                <div className="more-questions-btn text-center">
                                    <Link href="/contacts" className="btn btn-md btn-red tra-red-hover">Still Have A Question?</Link>
                                </div>
                            </div>
                        </div>
                    </div>     {/* End container */}
                </section>	{/* END FAQs-1 */}

                <Newsletter1 />



            </Layout>
        </>
    )
}