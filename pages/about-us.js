import React, { useState, useEffect } from 'react';
import VideoPopup from "@/components/elements/VideoPopup";
import Layout from "@/components/layout/Layout";
import Newsletter1 from "@/components/sections/newsletter/Newsletter1";
import Link from "next/link";

import AboutUs from "@/components/sections/about-us/about-us";
import Forwhom from "@/components/sections/our-solution/for-whom";
import EmployeeTime from "@/components/sections/our-solution/employee-time";
import Efficiency from "@/components/sections/our-solution/efficiency";
import ContactUs from "@/components/sections/our-solution/contact-us";
import About4 from "@/components/sections/about/About4";
import Blog1 from "@/components/sections/blog/Blog1";
import Promo1 from "@/components/sections/promo/Promo1";

export default function Home() {
    return (
        <>
            <Layout
                pageId={"about-page"}
                activePage={"About us"}
                pageTitle={"About Us"}
                headerStyle={1} 
                footerStyle={1}
            >

                <AboutUs />

            </Layout>
        </>
    )
}