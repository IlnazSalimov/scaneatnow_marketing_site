import Layout from "@/components/layout/Layout";
import Banner3 from "@/components/sections/banner/Banner3";
import Link from "next/link";
import React, { useState } from 'react';

export default function Home() {
    // State to store form data
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
        alert('Hi');
        e.preventDefault();
        try {
            const response = await fetch('https://api.scaneatnow.com/api/v1/email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    comment: formData.message
                })
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
                headerStyle={1}
                footerStyle={1}
            >

                <section id="contacts-5" className="wide-80 contacts-section division">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-10 offset-lg-1">
                                <div className="section-title mb-40 text-center">
                                    <h2 className="h2-xl">Get in Touch</h2>
                                    <p className="p-xl">Contact us if you have any questions or if you would like to schedule a demo.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-10 offset-lg-1">
                                <div className="form-holder">
                                    <form name="contactform" className="row contact-form" onSubmit={handleSubmit}>
                                        <div className="col-md-12 col-lg-6">
                                            <input type="text" name="name" className="form-control name" placeholder="Your Name*" onChange={handleChange}/>
                                        </div>
                                        <div className="col-md-12 col-lg-6">
                                            <input type="email" name="email" className="form-control email" placeholder="Email Address*" onChange={handleChange}/>
                                        </div>
                                        <div className="col-md-12">
                                            <input type="text" name="subject" className="form-control subject" placeholder="What's this about?" onChange={handleChange}/>
                                        </div>
                                        <div className="col-md-12">
                                            <textarea name="message" className="form-control message" rows={6} placeholder="Your Message ..." defaultValue={""} onChange={handleChange}/>
                                        </div>
                                        <div className="col-md-12 mt-5 text-right">
                                            <button type="submit" className="btn btn-md btn-red tra-red-hover submit">Send Message</button>
                                        </div>
                                        <div className="col-md-12 contact-form-msg text-center">
                                            <div className="sending-msg"><span className="loading" /></div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>  
                    </div>	   
                </section>	

                
            </Layout>
        </>
    );
}