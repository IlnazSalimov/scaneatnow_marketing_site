import React, { useState, useEffect } from 'react';
import VideoPopup from "@/components/elements/VideoPopup";
import Layout from "@/components/layout/Layout";
import Newsletter1 from "@/components/sections/newsletter/Newsletter1";
import Link from "next/link";

import CustomerExperience from "@/components/sections/our-solution/customer-experience";
import Forwhom from "@/components/sections/our-solution/for-whom";
import VideoCounter from "@/components/sections/our-solution/video-demo-counter";
import VideoTable from "@/components/sections/our-solution/video-demo-table";
import EmployeeTime from "@/components/sections/our-solution/employee-time";
import Efficiency from "@/components/sections/our-solution/efficiency";
import ContactUs from "@/components/sections/our-solution/contact-us";
import About4 from "@/components/sections/about/About4";
import Blog1 from "@/components/sections/blog/Blog1";
import Promo1 from "@/components/sections/promo/Promo1";

export default function OurSolution() {
    return (
        <>
            <Layout
                pageId={"about-page"}
                activePage={"Our Solution"}
                pageTitle={"Our Solution"}
                headerStyle={1} 
                footerStyle={1}
            >

                <Forwhom />

                <VideoCounter />

                <VideoTable />

                <CustomerExperience />

                <EmployeeTime />

                <Efficiency />

            </Layout>
        </>
    )
}

{/*}
const textStyle = {
    fontSize: '30px', // Adjust font size
    lineHeight: '1.6', // Adjust line height
    color: '#333' // Optional: Adjust text color
};

const bulletPointStyle = {
    fontSize: '27px', // Adjust bullet point font size
    lineHeight: '1.4', // Adjust bullet point line height
    marginBottom: '15px', // Spacing between bullet points
};

const postContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '40px',
    flexWrap: 'wrap', // Allow items to wrap on smaller screens
    width: '50%', // Set the width to 70% of the screen
    //maxWidth: '1200px', // Maximum width can be set to a fixed value
    margin: 'auto' // Center the container
};

const post2ContainerStyle = {
    ...postContainerStyle, // Spread the existing styles
    flexDirection: 'row-reverse', // Reverse the order of flex items
};

const textContainerStyle = {
    flexBasis: '60%', // Adjust basis to control the initial width
    flexGrow: 1, // Allow it to grow if needed
    padding: '20px 20px', // Horizontal padding only
    // Rest of your styles
};

const imageContainerStyle = {
    flexBasis: '40%', // Adjust basis to control the initial width
    flexGrow: 1, // Allow it to grow if needed
    padding: '20px 20px', // Horizontal padding only
    // Rest of your styles
};


const imageStyle = {
    maxWidth: '100%',
    maxHeight: '300px'
};

const Post1 = () => (
    <div style={postContainerStyle}>
        <div style={textContainerStyle}>
            <h2 style={textStyle}>For whom is our solution</h2>
            <ul style={{ paddingLeft: '20px', listStyleType: 'disc' }}>
                <li style={bulletPointStyle}>Restaurants, cafeterias, food courts with both counter and table service.</li>
            </ul>
        </div>
        <div style={imageContainerStyle}>
            <img src="/images/our-solution/for_whom.jpg" alt="Happy Customers" style={imageStyle} />
        </div>
    </div>
);

const Post2 = () => (
    <div style={post2ContainerStyle}>
        <div style={textContainerStyle}>
            <h2 style={textStyle}>Improve your customers' experience</h2>
            <ul style={{ paddingLeft: '20px', listStyleType: 'disc' }}> 
                <li style={bulletPointStyle}>Provide instant menu access with automatic translation, allergen information, and item photos.</li>
                <li style={bulletPointStyle}>Streamline ordering with online payment and order status updates.</li>
                <li style={bulletPointStyle}>Save your customers' time by reducing wait times.</li>
                <li style={bulletPointStyle}>Enhance customer satisfaction, translating to increased profitability for your business.</li>
            </ul>
        </div>
        <div style={imageContainerStyle}>
            <img src="/images/our-solution/happy_customers.png" alt="Happy Customers" style={imageStyle} />
        </div>
    </div>
);

const Post3 = () => (
    <div style={postContainerStyle}>
        <div style={textContainerStyle}>
            <h2 style={textStyle}>Free up your employees' time</h2>
            <ul style={{ paddingLeft: '20px', listStyleType: 'disc' }}> 
                <li style={bulletPointStyle}>Enable customers to place orders by themselves, enhancing service efficiency.</li>
                <li style={bulletPointStyle}>Reduce menu inquiries with a detailed digital menu.</li>
                <li style={bulletPointStyle}>Lower costs and optimize staff efficiency.</li>
            </ul>
        </div>
        <div style={imageContainerStyle}>
            <img src="/images/our-solution/save_time.jpg" alt="Save Time" style={imageStyle} />
        </div>
    </div>
);

const Post4 = () => (
    <div style={post2ContainerStyle}>
        <div style={textContainerStyle}>
            <h2 style={textStyle}>Enhance Your Menu Accessibility</h2>
            <ul style={{ paddingLeft: '20px', listStyleType: 'disc' }}> 
                <li style={bulletPointStyle}>Offer instant access to a digital menu for your customers.</li>
                <li style={bulletPointStyle}>Automatically or manually translate your menu into multiple languages.</li>
                <li style={bulletPointStyle}>Include allergen information and item photos in your digital menu.</li>
            </ul>
        </div>
        <div style={imageContainerStyle}>
            <img src="/images/our-solution/digital_menu.png" alt="Save Time" style={imageStyle} />
        </div>
    </div>
);

export default function Home() {
    const [lastVisiblePost, setLastVisiblePost] = useState(1);

    useEffect(() => {
        const loadMorePosts = () => {
            if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 1) {
                setLastVisiblePost(lastVisiblePost + 1);
            }
        };

        window.addEventListener('scroll', loadMorePosts);
        return () => window.removeEventListener('scroll', loadMorePosts);
    }, [lastVisiblePost]);

    return (
        <>
            <Layout
                pageId={"blog-page"}
                activePage={"Blog Post"}
                pageTitle={"Our solution"}
                headerStyle={1}
                footerStyle={1}
            >


                {lastVisiblePost >= 1 && <Post1 />}
                {lastVisiblePost >= 2 && <Post2 />}
                {lastVisiblePost >= 3 && <Post3 />}
                {lastVisiblePost >= 4 && <Post4 />}


            </Layout>
        </>
    );
}
*/}
