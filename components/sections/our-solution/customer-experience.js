import Link from "next/link";

const bulletPointStyle = {
    fontSize: '27px', // Adjust bullet point font size
    lineHeight: '1.4', // Adjust bullet point line height
    marginBottom: '15px', // Spacing between bullet points
    textAlign: 'left',
};

export default function About1({helperCls}) {
    return (
        <>
            <section id="about-1" className={`bg-fixed wide-100 about-section division ${helperCls ? helperCls : ""}`}>
                <div className="container">
                    <div className="row">
                        {/* ABOUT TEXT */}
                        <div className="col-xl-10 offset-xl-1">
                            <div className="about-1-txt text-center">
                                {/* Title */}
                                <h2>Improve your<span className="yellow-color"> customers' experience</span></h2>
                                <ul style={{ paddingLeft: '50px', listStyleType: 'disc' }}> 
                                    <li style={bulletPointStyle}>Provide instant menu access with automatic translation, allergen information, and item photos.</li>
                                    <li style={bulletPointStyle}>Streamline ordering with online payment and order status updates.</li>
                                    <li style={bulletPointStyle}>Save your customers' time by reducing wait times.</li>
                                    <li style={bulletPointStyle}>Enhance customer satisfaction, translating to increased profitability for your business.</li>
                                </ul>

                                <div className="post-inner-img">
                                    <img class="img-fluid" src="/images/our-solution/DigitalMenu.png" alt="about-image"/>
                                </div>
                                {/* Text */}
                                <p className="p-xl grey-color">
                                </p>
                                {/* Icons List */}
                            </div>
                        </div>	{/* END ABOUT TEXT */}
                    </div>    {/* End row */}
                </div>	   {/* End container */}
            </section>
        </>
    )
}
