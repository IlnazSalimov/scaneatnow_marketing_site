import Layout from "@/components/layout/Layout";
import Banner3 from "@/components/sections/banner/Banner3";
import Link from "next/link";
export default function Home() {
    return (
        <>
            <Layout
                pageId={"booking-page"}
                activePage={"Booking"}
                pageTitle={"Reserve A Table"}
                headerStyle={1}
                footerStyle={1}
            >

                <div id="booking-2" className="wide-70 booking-section division">
                    <div className="container">
                        <div className="row">
                            {/* BOOKING FORM */}
                            <div className="col-lg-10 col-xl-8 offset-lg-1 offset-xl-2">
                                <div className="form-holder">
                                    {/* Text */}
                                    <p className="p-xl text-center">
                                        Fill in the form below or give us a call <Link href="/tel:123456789">789-654-3210</Link>
                                    </p>
                                    {/* Form */}
                                    <form name="bookinkform" className="row booking-form">
                                        {/* Form Input */}
                                        <div className="col-lg-6">
                                            <input id="datetimepicker" type="text" name="date" className="form-control date" placeholder="Select Date*" required />
                                        </div>
                                        {/* Form Input */}
                                        <div className="col-lg-6">
                                            <input type="text" name="name" className="form-control name" placeholder="Your Name*" required />
                                        </div>
                                        {/* Form Input */}
                                        <div className="col-lg-6">
                                            <input type="email" name="email" className="form-control email" placeholder="Email Address*" required />
                                        </div>
                                        {/* Form Input */}
                                        <div className="col-lg-6">
                                            <input type="tel" name="phone" className="form-control phone" placeholder="Phone Number*" required />
                                        </div>
                                        {/* Form Textarea */}
                                        <div className="col-md-12">
                                            <textarea name="message" className="form-control message" rows={4} placeholder="Your Message ..." defaultValue={""} />
                                        </div>
                                        {/* Form Button */}
                                        <div className="col-md-12 mt-10">
                                            <button type="submit" className="btn btn-md btn-red tra-red-hover submit">Request Booking</button>
                                        </div>
                                        {/* Form Message */}
                                        <div className="col-md-12 booking-form-msg text-center">
                                            <div className="sending-msg"><span className="loading" /></div>
                                        </div>
                                    </form>	{/* End Form */}
                                </div>
                            </div>	{/* END BOOKING FORM */}
                        </div>	{/* End row */}
                    </div>	   {/* End container */}
                </div>

                <Banner3 helperCls="bg-yellow" />

            </Layout>
        </>
    )
}