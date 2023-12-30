import Link from "next/link";

export default function Contacts2({helperCls}) {
    return (
        <>
            <section id="contacts-2" className={`bg-fixed contacts-section division ${helperCls ? helperCls : ""}`}>
                <div className="container white-color">
                    <div className="row">
                        {/* LOCATION */}
                        <div className="col-md-4">
                            <div className="cbox-2 ico-65 clearfix">
                                {/* Icon */}
                                <span className="flaticon-world" />
                                {/* Text */}
                                <div className="cbox-2-txt">
                                    {/* Title */}
                                    <h5 className="h5-lg">Our Location:</h5>
                                    {/* Title */}
                                    <p>Testo Pizza</p>
                                    <p>8721 M Central Avenue,</p>
                                    <p>Los Angeles, CA 90036</p>
                                </div>
                            </div>
                        </div>
                        {/* QUICK CONTACTS */}
                        <div className="col-md-4">
                            <div className="cbox-2 ico-65 clearfix">
                                {/* Icon */}
                                <span className="flaticon-contact-book" />
                                {/* Text */}
                                <div className="cbox-2-txt">
                                    {/* Title */}
                                    <h5 className="h5-lg">Quick Contacts:</h5>
                                    {/* Text */}
                                    <p>Phone: 789-654-3210</p>
                                    <p>Fax: 789-654-0123</p>
                                    <p><Link href="/mailto:yourdomain@mail.com">hello@yourdomain.com</Link></p>
                                </div>
                            </div>
                        </div>
                        {/* WORKING HOURS */}
                        <div className="col-md-4">
                            <div className="cbox-2 ico-65 clearfix">
                                {/* Icon */}
                                <span className="flaticon-sign-1" />
                                {/* Text */}
                                <div className="cbox-2-txt">
                                    {/* Title */}
                                    <h5 className="h5-lg">Working Hours:</h5>
                                    {/* Text */}
                                    <p>Mon-Fri: 9:00AM - 10:00PM</p>
                                    <p>Saturday: 10:00AM - 8:30PM</p>
                                    <p>Sunday: 12:00PM - 5:00PM</p>
                                </div>
                            </div>
                        </div>
                    </div>	   {/* End row */}
                </div>	   {/* End container */}
            </section>
        </>
    )
}
