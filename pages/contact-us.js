import Layout from "@/components/layout/Layout";
import Banner3 from "@/components/sections/banner/Banner3";
import Link from "next/link";
import React, { useState } from 'react';

export default function Home() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    // Function to update state on input change
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }
    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        const requestData = {
            name: formData.name,
            email: formData.email,
            comment: formData.message
        };
        const jsonString = JSON.stringify(requestData);
        alert(jsonString);

        try {
            const response = await fetch('https://api.scaneatnow.com/api/v1/email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: jsonString
            });

            if (response.ok) {
                // Handle successful response
                alert('Message sent successfully');
            } else {
                // Handle error response
                alert('Error sending message');
            }
        } catch (error) {
            alert('An error occurred: ' + error.message);
        }
    }

    return (
        <>
            <Layout
                pageId={"contacts-page"}
                activePage={"Contact Us"}
                pageTitle={"Contact Us"}
                headerStyle={1}
                footerStyle={1}
            >

                <section id="contacts-5" className="wide-80 contacts-section division">
                    <div className="container">
                        {/* CONTACT INFO */}
                        <div className="row">
                            <div className="col-xl-10 offset-xl-1">
                                <div className="row">
                                    {/* LOCATION */}
                                    <div className="col-md-4">
                                        <div className="cbox-5">
                                            {/* Title */}
                                            <h5 className="h5-lg">Norway</h5>
                                            {/* Address */}
                                            <p className="p-md">Phone: (+47) 47141426</p>
                                            <p className="p-md">Email: <Link href="mailto:ilnaz.salimov@scaneatnow.com" className="yellow-color">norway@scaneatnow.com</Link></p>
                                        </div>
                                    </div>
                                    {/* QUICK CONTACTS */}
                                    <div className="col-md-4">
                                        <div className="cbox-5">
                                            {/* Title */}
                                            <h5 className="h5-lg">Germany</h5>
                                            {/* Text */}
                                            <p className="p-md">Phone: (+49) 176 64683597</p>
                                            <p className="p-md">Email: <Link href="/mailto:ilnaz.salimov@scaneatnow.com" className="yellow-color">germany@scaneatnow.com</Link></p>
                                        </div>
                                    </div>
                                    {/* WORKING HOURS */}
                                    <div className="col-md-4">
                                        <div className="cbox-5">
                                            {/* Title */}
                                            <h5 className="h5-lg">Estonia</h5>
                                            {/* Title */}
                                            <p className="p-md">Phone: (+372) 58880788</p>
                                            <p className="p-md">Email: <Link href="/mailto:ilnaz.salimov@scaneatnow.com" className="yellow-color">estonia@scaneatnow.com</Link></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>	{/* END CONTACT INFO */}
                        {/* SECTION TITLE */}
                        <div className="row">
                            <div className="col-lg-10 offset-lg-1">
                                <div className="section-title mb-40 text-center">
                                    {/* Title 	*/}
                                    <h2 className="h2-xl">Get in Touch</h2>
                                    {/* Text */}
                                    <p className="p-xl">If you have any questions or would like to schedule a demo, please contact us. We offer both online meetings and in-person demonstrations at your location, depending on your preference.</p>
                                </div>
                            </div>
                        </div>
                        {/* CONTACT FORM */}
                        <div className="row">
                            <div className="col-lg-10 offset-lg-1">
                                <div className="form-holder">
                                    <form name="contactform" className="row contact-form" onSubmit={handleSubmit}>
                                        {/* Form Input */}
                                        <div className="col-md-12 col-lg-6">
                                            <input type="text" name="name" className="form-control name" placeholder="Your Name*" onChange={handleChange}/>
                                        </div>
                                        {/* Form Input */}
                                        <div className="col-md-12 col-lg-6">
                                            <input type="email" name="email" className="form-control email" placeholder="Email Address*" onChange={handleChange}/>
                                        </div>
                                        {/* Form Input */}
                                        <div className="col-md-12">
                                            <input type="text" name="subject" className="form-control subject" placeholder="What's this about?" onChange={handleChange}/>
                                        </div>
                                        {/* Form Textarea */}
                                        <div className="col-md-12">
                                            <textarea name="message" className="form-control message" rows={6} placeholder="Your Message ..." defaultValue={""} onChange={handleChange}/>
                                        </div>
                                        {/* Form Button */}
                                        <div className="col-md-12 mt-5 text-right">
                                            <button type="submit" className="btn btn-md btn-red tra-red-hover submit">Send Message</button>
                                        </div>
                                        {/* Form Message */}
                                        <div className="col-md-12 contact-form-msg text-center">
                                            <div className="sending-msg"><span className="loading" /></div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>  {/* END CONTACT FORM */}
                    </div>	   {/* End container */}
                </section>	{/* END CONTACTS-5 */}

                
            </Layout>
        </>
    )
}