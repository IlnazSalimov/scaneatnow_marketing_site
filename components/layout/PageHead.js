"use client"

import Head from 'next/head';

const PageHead = ({headTitle}) => {
    return (
        <>
            <Head>
                <title>
                    {headTitle ? `QR Code Ordering and Online Payments - ${headTitle}` : 'QR Code Ordering and Online Payments'}
                </title>
                <meta name="description"
                      content="Enhance customer experience and streamline operations for restaurants, cafeterias, and food courts with our solution. Provide instant menu access with automatic translation, allergen information, and item photos. Enable online ordering with payment and status updates. Free up employees' time and optimize service efficiency. Automatically translate menus into multiple languages, reduce errors, and organize order picking."/>
                <meta name="keywords"
                      content="restaurant solution, cafeteria solution, food court solution, customer experience, streamline operations, instant menu access, automatic translation, allergen information, item photos, online ordering, payment, order status updates, staff efficiency, multi-language support, digital menu, reduce errors, order picking"/>
                <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
                      rel="stylesheet"/>
                <link
                    href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap"
                    rel="stylesheet"/>
                <link href="https://fonts.googleapis.com/css2?family=Lilita+One&display=swap" rel="stylesheet"/>

                <link href="https://use.fontawesome.com/releases/v5.11.0/css/all.css" rel="stylesheet"
                      crossOrigin="anonymous"/>
            </Head>
        </>
    );
};

export default PageHead;
