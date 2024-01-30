import Link from "next/link";
import {useState} from "react";

export default function Header1({headerCls, scroll, isToggled, handleToggle}) {

    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    });

    const handleNav = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            });
        } else {
            setIsActive({
                status: true,
                key,
            });
        }
    };

    return (
        <>
            <header id="header-1"
                    className={`header navik-header header-transparent header-shadow viewport-lg ${headerCls ? headerCls : ""} ${scroll ? "sticky" : "header-transparent-on"}`}>
                <div className="container">
                    <div className="navik-header-container">
                        <div className="logo" data-mobile-logo="images/logo-01.png"
                             data-sticky-logo="images/logo-01.png">

                            <Link href="/">
                                <img
                                    src="/images/our-solution/logo.png" // Make sure this is the correct path to your logo image
                                    alt="header-logo" // Adjust the max height as per your requirement
                                />
                            </Link>
                        </div>

                        <div className={`burger-menu ${isToggled ? "menu-open" : ""}`} onClick={handleToggle}>
                            <div className="line-menu line-half first-line"/>
                            <div className="line-menu"/>
                            <div className="line-menu line-half last-line"/>
                        </div>
                        <nav className="navik-menu menu-caret navik-yellow">
                            <ul className={`top-list ${isToggled ? "d-block" : "d-none"}`}>

                                <li className="dropdown_menu"><Link href="/our-solution">Our solution</Link>
                                </li>
                                <li className="dropdown_menu"><Link href="/how-to-start">How to start</Link>
                                </li>
                                <li className="dropdown_menu"><Link href="/pricing">Pricing</Link>
                                </li>
                                <li className="dropdown_menu"><Link href="/about-us">About us</Link>
                                </li>
                                <li className="dropdown_menu"><Link href="/contact-us">Contact</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    )
}


{/*
import Link from "next/link";
import { useState } from "react";
export default function Header1({ headerCls, scroll, isToggled, handleToggle }) {

    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    });

    const handleNav = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            });
        } else {
            setIsActive({
                status: true,
                key,
            });
        }
    };

    return (
        <>
            <header id="header-1" className={`header navik-header header-shadow center-menu-1 header-transparent ${headerCls ? headerCls : ""} ${scroll ? "sticky" : "header-transparent-on"}`}>
                <div className="container">

                    <div className="navik-header-container">

                    <div className="logo" data-mobile-logo="images/logo-01.png" data-sticky-logo="images/logo-01.png" style={{ position: 'absolute', top: '0', left: '0' }}>
              <Link href="#hero-1">
                <img
                  src="/images/our-solution/logo.png"
                  alt="header-logo"
                  style={{ maxHeight: '100px', maxWidth: '100%' }} // Adjust the max height as per your requirement
                />
              </Link>
            </div>

                        <div className="callusbtn"><Link href="/tel:123456789"><i className="fas fa-phone" /></Link></div>

                        <div className="logo" data-mobile-logo="images/logo-01.png" data-sticky-logo="/images/our-solution/logo.png">
                            <Link href="#hero-1"><img src="/images/our-solution/logo.png" alt="header-logo" /></Link>
                        </div>

                        <div className={`burger-menu ${isToggled ? "menu-open" : ""}`} onClick={handleToggle}>
                            <div className="line-menu line-half first-line" />
                            <div className="line-menu" />
                            <div className="line-menu line-half last-line" />
                        </div>

                        <nav className="navik-menu menu-caret navik-yellow">
                            <ul className={`top-list ${isToggled ? "d-block" : "d-none"}`}>

                                
                                <li className="dropdown_menu"><Link href="/our-solution">Our solution</Link>
                                    {/*<ul className={isActive.key == 2 ? "d-block" : "d-none"}>
                                        {/*<li><Link href="/menu-1">Menu v.1 - Tabs Cards</Link></li>
                                        <li><Link href="/menu-2">Menu v.2 - Cards</Link></li>
    <li><Link href="/menu-3">Menu v.3 - Sections</Link></li>
                                    </ul>
                                    <span className={isActive.key == 2 ? "dropdown-plus dropdown-open" : "dropdown-plus"} onClick={() => handleNav(2)}></span>
                                </li>

                                <li className="dropdown_menu"><Link href="/how-to-start">How to start</Link>
                                    <ul className={isActive.key == 5 ? "d-block" : "d-none"}>
                                        <li><Link href="/blog-listing">Blog Listing</Link></li>
                                        <li><Link href="/single-post">Single Post</Link></li>
                                    </ul>
                                    <span className={isActive.key == 5 ? "dropdown-plus dropdown-open" : "dropdown-plus"} onClick={() => handleNav(5)}></span>
                                </li>

                                <li className="dropdown_menu"><Link href="/pricing">Pricing</Link>
                                    <ul className={isActive.key == 4 ? "d-block" : "d-none"}>
                                        <li><Link href="/product-single">Single Product</Link></li>
                                        <li><Link href="/cart">Shopping Cart</Link></li>
                                    </ul>
                                    <span className={isActive.key == 4 ? "dropdown-plus dropdown-open" : "dropdown-plus"} onClick={() => handleNav(4)}></span>
                                </li>

                                <li className="mega-menu dropdown_menu"><Link href="#">Megamenu</Link>
                                    <ul className={isActive.key == 3 ? "d-block" : "d-none"}>
                                        <li>

                                            <div className="mega-menu-container">
                                                <div className="row">

                                                    <div className="col-md-6 col-lg-4">
                                                        <div className="mega-menu-box">
                                                            <div className="mega-menu-media">
                                                                <div className="mega-menu-media-img">
                                                                    <div className="mega-menu-thumbnail">
                                                                        <Link href="/blog-listing">
                                                                            <img src="/images/img-05.jpg" alt="thumbnail" />
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                                <div className="mega-menu-media-info">
                                                                    <h4 className="mega-menu-heading"><Link href="/blog-listing">Aliquam and lobortis...</Link>
                                                                    </h4>
                                                                    <div className="mega-menu-desc">
                                                                        Donec nec faucibus lobortis viverra blandit sem justo
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="mega-menu-box">
                                                            <div className="mega-menu-media">
                                                                <div className="mega-menu-media-img">
                                                                    <div className="mega-menu-thumbnail">
                                                                        <Link href="/blog-listing">
                                                                            <img src="/images/img-01.jpg" alt="thumbnail" />
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                                <div className="mega-menu-media-info">
                                                                    <h4 className="mega-menu-heading"><Link href="/blog-listing">Donec neca faucibus...</Link>
                                                                    </h4>
                                                                    <div className="mega-menu-desc">
                                                                        Aliquam ultrices ullamcoroe ultrices gravida dictum
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="mega-menu-box last-menu-box">
                                                            <div className="mega-menu-media">
                                                                <div className="mega-menu-media-img">
                                                                    <div className="mega-menu-thumbnail">
                                                                        <Link href="/blog-listing">
                                                                            <img src="/images/img-07.jpg" alt="thumbnail" />
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                                <div className="mega-menu-media-info">
                                                                    <h4 className="mega-menu-heading"><Link href="/blog-listing">Lobortis sem mauris...</Link>
                                                                    </h4>
                                                                    <div className="mega-menu-desc">
                                                                        Integer aliquet magna neca tellus orci quis semper
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-md-6 col-lg-4">
                                                        <div className="mega-menu-box">
                                                            <div className="mega-menu-media">
                                                                <div className="mega-menu-media-img">
                                                                    <div className="mega-menu-thumbnail">
                                                                        <Link href="/blog-listing">
                                                                            <img src="/images/img-08.jpg" alt="thumbnail" />
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                                <div className="mega-menu-media-info">
                                                                    <h4 className="mega-menu-heading"><Link href="/blog-listing">Fusce semper aliquet...</Link>
                                                                    </h4>
                                                                    <div className="mega-menu-desc">
                                                                        Laoreet tellus a consectetur bibendum dolor posuere
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="mega-menu-box">
                                                            <div className="mega-menu-media">
                                                                <div className="mega-menu-media-img">
                                                                    <div className="mega-menu-thumbnail">
                                                                        <Link href="/blog-listing">
                                                                            <img src="/images/img-09.jpg" alt="thumbnail" />
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                                <div className="mega-menu-media-info">
                                                                    <h4 className="mega-menu-heading"><Link href="/blog-listing">Aliquam libero ipsum...</Link>
                                                                    </h4>
                                                                    <div className="mega-menu-desc">
                                                                        Sollicitudin ut gravida libero commodo sit malesuada
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="mega-menu-box last-menu-box">
                                                            <div className="mega-menu-media">
                                                                <div className="mega-menu-media-img">
                                                                    <div className="mega-menu-thumbnail">
                                                                        <Link href="/blog-listing">
                                                                            <img src="/images/img-10.jpg" alt="thumbnail" />
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                                <div className="mega-menu-media-info">
                                                                    <h4 className="mega-menu-heading"><Link href="/blog-listing">Posuere himenaeos...</Link>
                                                                    </h4>
                                                                    <div className="mega-menu-desc">
                                                                        Porta gravida hendrerit vitae blandit in phasellus ipsum
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-4">
                                                        <div className="mega-menu-box last-menu-box">
                                                            <div className="mega-menu-thumbnail">
                                                                <Link href="/blog-listing">
                                                                    <img src="/images/img-26.jpg" alt="thumbnail" />
                                                                </Link>
                                                            </div>
                                                            <h4 className="mega-menu-heading"><Link href="/blog-listing">Etiam
                                                                semper mauris...</Link></h4>
                                                            <div className="mega-menu-desc">
                                                                Aliquam a augue suscipit, luctus neque purus ipsum neque undo
                                                                dolor primis libero
                                                                tempus, blandit a cursus varius magna
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                    <span className={isActive.key == 3 ? "dropdown-plus dropdown-open" : "dropdown-plus"} onClick={() => handleNav(3)}></span>
                                </li>
                            </ul>

                            <div className="logoCenter" style={{  width: '151.453px'}}>
                                <div className="logo" data-mobile-logo="images/logo-01.png" data-sticky-logo="images/logo-01.png">
                                    <Link href="#hero-1">
                                        <img src="/images/logo-01.png" alt="header-logo"/>
                                    </Link>
                                </div>
                            </div>

                            
                            <div className="logoCenter" style={{ width: '151.453px' }}><div className="logo" data-mobile-logo="images/logo-01.png" data-sticky-logo="images/logo-01.png">
                                
                            </div></div>

                            <ul className={isToggled ? "d-block" : "d-none"}>

                            <li className="dropdown_menu"><Link href="/about-us">About us</Link>
                                    <ul className={isActive.key == 1 ? "d-block" : "d-none"}>
                                        <li><Link href="/about">About Testo</Link></li>
                                        <li><Link href="/team">Meet The Team</Link></li>
                                        <li><Link href="/gallery">Images Gallery</Link></li>
                                        <li><Link href="/gift-cards">Gift Cards</Link></li>
                                        <li><Link href="/faqs">F.A.Q.s</Link></li>
                                        <li><Link href="/terms">Terms &amp; Privacy</Link></li>
                                    </ul>
                                    <span className={isActive.key == 1 ? "dropdown-plus dropdown-open" : "dropdown-plus"} onClick={() => handleNav(1)}></span>
                                </li>

                                <li className="dropdown_menu"><Link href="/contact-us">Contact</Link>
                                    <ul className={isActive.key == 6 ? "d-block" : "d-none"}>
                                        <li><Link href="/booking">Book A Table</Link></li>
                                        <li><Link href="/locations">Our Locations</Link></li>
                                        <li><Link href="/contacts">Contact Us</Link></li>
                                    </ul>
                                    <span className={isActive.key == 6 ? "dropdown-plus dropdown-open" : "dropdown-plus"} onClick={() => handleNav(6)}></span>
                                </li>

                               


                                <li className="basket-ico ico-30">
                                    <Link href="/cart">
                                        <span className="ico-holder"><span className="flaticon-shopping-bag" /> <em className="roundpoint">2</em></span>
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>

        </>
    )
}
*/
}
