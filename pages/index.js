import Link from "next/link";
export default function Home() {
    return (
        <>
            <div id="page" className="page-wrapper">
                {/* HERO
			============================================= */}
                <section id="hero" className="bg-fixed hero-section division">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="hero-txt text-center">
                                    <h2>Testo</h2>
                                    <p>Premium landing page template created to offer a perfect solution for Fast Food, Pizza, Burger, Sushi
                                        and Steak restaurants and everyone else involved in food services.
                                    </p>
                                </div>
                            </div>
                        </div>	   {/* End row */}
                    </div> 	   {/* End container */}
                    {/* Content Image */}
                    <div className="ab-img-01"><img className="img-fluid" src="assests/images/img-01.png" alt="content-image" /></div>
                    {/* Content Image */}
                    <div className="ab-img-02"><img className="img-fluid" src="assests/images/img-02.png" alt="content-image" /></div>
                </section>	{/* END HERO */}
                {/* SELECT
			============================================= */}
                <div id="select" className="bg-fixed select-section division">
                    {/* Content Image */}
                    <div className="ab-img-03"><img className="img-fluid" src="assests/images/img-03.png" alt="content-image" /></div>
                    <div className="container">
                        <div className="row">
                            {/* LAYOUT-1 */}
                            <div id="l-1" className="col-md-6 col-lg-4 select_link wow fadeInUp" data-wow-delay="0.4s">
                                <div className="hover-overlay">
                                    <Link href="/demo-1">
                                        <img className="img-fluid" src="assests/images/layout-1.jpg" alt="layout-1-preview" />
                                    </Link>
                                </div>
                                <h4>Burger Layout <span>#1</span></h4>
                                <p>( Demo #1 )</p>
                            </div>
                            {/* LAYOUT-2 */}
                            <div id="l-2" className="col-md-6 col-lg-4 select_link wow fadeInUp" data-wow-delay="0.6s">
                                <div className="hover-overlay">
                                    <Link href="/demo-2">
                                        <img className="img-fluid" src="assests/images/layout-2.jpg" alt="layout-2-preview" />
                                    </Link>
                                </div>
                                <h4>Burger Layout <span>#2</span></h4>
                                <p>( Demo #2 )</p>
                            </div>
                            {/* LAYOUT-3 */}
                            <div id="l-3" className="col-md-6 col-lg-4 select_link wow fadeInUp" data-wow-delay="0.8s">
                                <div className="hover-overlay">
                                    <Link href="/demo-3">
                                        <img className="img-fluid" src="assests/images/layout-3.jpg" alt="layout-3-preview" />
                                    </Link>
                                </div>
                                <h4>Burger Layout <span>#3</span></h4>
                                <p>( Demo #3 )</p>
                            </div>
                            {/* LAYOUT-4 */}
                            <div id="l-4" className="col-md-6 col-lg-4 select_link wow fadeInUp" data-wow-delay="0.4s">
                                <div className="hover-overlay">
                                    <Link href="/demo-4">
                                        <img className="img-fluid" src="assests/images/layout-4.jpg" alt="layout-4-preview" />
                                    </Link>
                                </div>
                                <h4>Burger Layout <span>#4</span></h4>
                                <p>( Demo #4 )</p>
                            </div>
                            {/* LAYOUT-5 */}
                            <div id="l-5" className="col-md-6 col-lg-4 select_link wow fadeInUp" data-wow-delay="0.6s">
                                <div className="hover-overlay">
                                    <Link href="/demo-5">
                                        <img className="img-fluid" src="assests/images/layout-5.jpg" alt="layout-5-preview" />
                                    </Link>
                                </div>
                                <h4>Pizza Layout <span>#1</span></h4>
                                <p>( Demo #5 )</p>
                            </div>
                            {/* LAYOUT-6 */}
                            <div id="l-6" className="col-md-6 col-lg-4 select_link wow fadeInUp" data-wow-delay="0.8s">
                                <div className="hover-overlay">
                                    <Link href="/demo-6">
                                        <img className="img-fluid" src="assests/images/layout-6.jpg" alt="layout-6-preview" />
                                    </Link>
                                </div>
                                <h4>Pizza Layout <span>#2</span></h4>
                                <p>( Demo #6 )</p>
                            </div>
                            {/* LAYOUT-7 */}
                            <div id="l-7" className="col-md-6 col-lg-4 select_link wow fadeInUp" data-wow-delay="0.4s">
                                <div className="hover-overlay">
                                    <Link href="/demo-7">
                                        <img className="img-fluid" src="assests/images/layout-7.jpg" alt="layout-7-preview" />
                                    </Link>
                                </div>
                                <h4>Pizza Layout <span>#3</span></h4>
                                <p>( Demo #7 )</p>
                            </div>
                            {/* LAYOUT-8 */}
                            <div id="l-8" className="col-md-6 col-lg-4 select_link wow fadeInUp" data-wow-delay="0.6s">
                                <div className="hover-overlay">
                                    <Link href="/demo-8">
                                        <img className="img-fluid" src="assests/images/layout-8.jpg" alt="layout-8-preview" />
                                    </Link>
                                </div>
                                <h4>Pizza Layout <span>#4</span></h4>
                                <p>( Demo #8 )</p>
                            </div>
                            {/* LAYOUT-9 */}
                            <div id="l-9" className="col-md-6 col-lg-4 select_link wow fadeInUp" data-wow-delay="0.8s">
                                <div className="hover-overlay">
                                    <Link href="/demo-9">
                                        <img className="img-fluid" src="assests/images/layout-9.jpg" alt="layout-9-preview" />
                                    </Link>
                                </div>
                                <h4>BBQ Layout <span>#1</span></h4>
                                <p>( Demo #9 )</p>
                            </div>
                            {/* LAYOUT-10 */}
                            <div id="l-10" className="col-md-6 col-lg-4 select_link wow fadeInUp" data-wow-delay="0.4s">
                                <div className="hover-overlay">
                                    <Link href="/demo-10">
                                        <img className="img-fluid" src="assests/images/layout-10.jpg" alt="layout-10-preview" />
                                    </Link>
                                </div>
                                <h4>BBQ Layout <span>#2</span></h4>
                                <p>( Demo #10 )</p>
                            </div>
                            {/* LAYOUT-11 */}
                            <div id="l-11" className="col-md-6 col-lg-4 select_link wow fadeInUp" data-wow-delay="0.6s">
                                <div className="hover-overlay">
                                    <Link href="/demo-11">
                                        <img className="img-fluid" src="assests/images/layout-11.jpg" alt="layout-11-preview" />
                                    </Link>
                                </div>
                                <h4>Sushi Layout <span>#1</span></h4>
                                <p>( Demo #11 )</p>
                            </div>
                            {/* LAYOUT-12 */}
                            <div id="l-12" className="col-md-6 col-lg-4 select_link wow fadeInUp" data-wow-delay="0.8s">
                                <div className="hover-overlay">
                                    <Link href="/demo-12">
                                        <img className="img-fluid" src="assests/images/layout-12.jpg" alt="layout-12-preview" />
                                    </Link>
                                </div>
                                <h4>Sushi Layout <span>#2</span></h4>
                                <p>( Demo #12 )</p>
                            </div>
                        </div>	{/* End row */}
                    </div>	  {/* End container */}
                </div>	{/* END SELECT */}
                {/* BANNER-1
			============================================= */}
                <section id="banner-101" className="bg-fixed banner-1 division">
                    <div className="container white-color">
                        <div className="row">
                            <div className="col-xl-10 offset-xl-1">
                                <div className="banner-txt text-center">
                                    <h5>All in One Package</h5>
                                    <h3>Premade Collections</h3>
                                    <p>Mix and match from over 80 exclusive section UI blocks. All blocks are fully customizable. Create something
                                        unique and beautifully tailored to your needs in only a few minutes
                                    </p>
                                </div>
                                <div className="banner-img"><img className="img-fluid" src="assests/images/banner-1-img.png" alt="content-image" /></div>
                            </div>
                        </div>
                    </div>	  {/* End container */}
                </section>	{/* END BANNER-1 */}
                {/* INNER PAGES
			============================================= */}
                <section id="i-pages" className="inner-pages division">
                    {/* Content Image */}
                    <div className="ab-img-05"><img className="img-fluid" src="assests/images/img-03.png" alt="content-image" /></div>
                    {/* Content Image */}
                    <div className="ab-img-04"><img className="img-fluid" src="assests/images/img-04.png" alt="content-image" /></div>
                    <div className="container">
                        {/* SECTION TITLE */}
                        <div className="row">
                            <div className="col-lg-10 offset-lg-1">
                                <div className="section-title">
                                    <h3>16 Inner Pages</h3>
                                    <p>Testo offers a vast number of pre-made inner pages which will save your time when building
                                        a website. Select a page and check it out!
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {/* ABOUT */}
                            <div className="col-md-6 col-lg-3 select_link wow fadeInUp" data-wow-delay="0.4s">
                                <div className="hover-overlay">
                                    <Link href="/about">
                                        <img className="img-fluid" src="assests/images/about.jpg" alt="about-preview" />
                                    </Link>
                                </div>
                                <h3>About Page</h3>
                            </div>
                            {/* TEAM */}
                            <div className="col-md-6 col-lg-3 select_link wow fadeInUp" data-wow-delay="0.6s">
                                <div className="hover-overlay">
                                    <Link href="/team">
                                        <img className="img-fluid" src="assests/images/team.jpg" alt="team-preview" />
                                    </Link>
                                </div>
                                <h3>Team Page</h3>
                            </div>
                            {/* GIFT CARDS */}
                            <div className="col-md-6 col-lg-3 select_link wow fadeInUp" data-wow-delay="0.8s">
                                <div className="hover-overlay">
                                    <Link href="/gift-cards">
                                        <img className="img-fluid" src="assests/images/gift-cards.jpg" alt="gift-cards-preview" />
                                    </Link>
                                </div>
                                <h3>Gift Cards Page</h3>
                            </div>
                            {/* MENU-1 */}
                            <div className="col-md-6 col-lg-3 select_link wow fadeInUp" data-wow-delay="1s">
                                <div className="hover-overlay">
                                    <Link href="/menu-1">
                                        <img className="img-fluid" src="assests/images/menu-1.jpg" alt="menu-preview" />
                                    </Link>
                                </div>
                                <h3>Menu-#1 - Tabs Cards</h3>
                            </div>
                            {/*  MENU-2 */}
                            <div className="col-md-6 col-lg-3 select_link wow fadeInUp" data-wow-delay="0.4s">
                                <div className="hover-overlay">
                                    <Link href="/menu-2">
                                        <img className="img-fluid" src="assests/images/menu-2.jpg" alt="menu-preview" />
                                    </Link>
                                </div>
                                <h3>Menu-#2 - Cards</h3>
                            </div>
                            {/*  MENU-3 */}
                            <div className="col-md-6 col-lg-3 select_link wow fadeInUp" data-wow-delay="0.6s">
                                <div className="hover-overlay">
                                    <Link href="/menu-3">
                                        <img className="img-fluid" src="assests/images/menu-3.jpg" alt="menu-preview" />
                                    </Link>
                                </div>
                                <h3>Menu-#3 - Sections</h3>
                            </div>
                            {/* SINGLE PRODUCT */}
                            <div className="col-md-6 col-lg-3 select_link wow fadeInUp" data-wow-delay="0.8s">
                                <div className="hover-overlay">
                                    <Link href="/product-single">
                                        <img className="img-fluid" src="assests/images/product-single.jpg" alt="product-preview" />
                                    </Link>
                                </div>
                                <h3>Product Single</h3>
                            </div>
                            {/* SHOPPING CART */}
                            <div className="col-md-6 col-lg-3 select_link wow fadeInUp" data-wow-delay="1s">
                                <div className="hover-overlay">
                                    <Link href="/cart">
                                        <img className="img-fluid" src="assests/images/cart.jpg" alt="cart-preview" />
                                    </Link>
                                </div>
                                <h3>Shopping Cart</h3>
                            </div>
                            {/* GALLERY */}
                            <div className="col-md-6 col-lg-3 select_link wow fadeInUp" data-wow-delay="0.4s">
                                <div className="hover-overlay">
                                    <Link href="/gallery">
                                        <img className="img-fluid" src="assests/images/gallery.jpg" alt="gallery-preview" />
                                    </Link>
                                </div>
                                <h3>Gallery Page</h3>
                            </div>
                            {/* FAQS */}
                            <div className="col-md-6 col-lg-3 select_link wow fadeInUp" data-wow-delay="0.6s">
                                <div className="hover-overlay">
                                    <Link href="/faqs">
                                        <img className="img-fluid" src="assests/images/faqs.jpg" alt="faqs-preview" />
                                    </Link>
                                </div>
                                <h3>FAQs Page</h3>
                            </div>
                            {/* BLOG LISTING */}
                            <div className="col-md-6 col-lg-3 select_link wow fadeInUp" data-wow-delay="0.8s">
                                <div className="hover-overlay">
                                    <Link href="/blog-listing">
                                        <img className="img-fluid" src="assests/images/blog-listing.jpg" alt="blog-listing-preview" />
                                    </Link>
                                </div>
                                <h3>Blog Listing Page</h3>
                            </div>
                            {/* SINGLE POST */}
                            <div className="col-md-6 col-lg-3 select_link wow fadeInUp" data-wow-delay="1s">
                                <div className="hover-overlay">
                                    <Link href="/single-post">
                                        <img className="img-fluid" src="assests/images/single-post.jpg" alt="single-post-preview" />
                                    </Link>
                                </div>
                                <h3>Single Post</h3>
                            </div>
                            {/* TERMS */}
                            <div className="col-md-6 col-lg-3 select_link wow fadeInUp" data-wow-delay="0.4s">
                                <div className="hover-overlay">
                                    <Link href="/terms">
                                        <img className="img-fluid" src="assests/images/terms.jpg" alt="terms-preview" />
                                    </Link>
                                </div>
                                <h3>Terms &amp; Privacy</h3>
                            </div>
                            {/* BOOKING */}
                            <div className="col-md-6 col-lg-3 select_link wow fadeInUp" data-wow-delay="0.6s">
                                <div className="hover-overlay">
                                    <Link href="/booking">
                                        <img className="img-fluid" src="assests/images/booking.jpg" alt="booking-preview" />
                                    </Link>
                                </div>
                                <h3>Booking Page</h3>
                            </div>
                            {/* LOCATIONS */}
                            <div className="col-md-6 col-lg-3 select_link wow fadeInUp" data-wow-delay="0.8s">
                                <div className="hover-overlay">
                                    <Link href="/locations">
                                        <img className="img-fluid" src="assests/images/locations.jpg" alt="locations-preview" />
                                    </Link>
                                </div>
                                <h3>Locations Page</h3>
                            </div>
                            {/* CONTACTS */}
                            <div className="col-md-6 col-lg-3 select_link wow fadeInUp" data-wow-delay="1s">
                                <div className="hover-overlay">
                                    <Link href="/contacts">
                                        <img className="img-fluid" src="assests/images/contacts.jpg" alt="contacts-preview" />
                                    </Link>
                                </div>
                                <h3>Contacts Page</h3>
                            </div>
                        </div>	   {/* End row */}
                    </div>	    {/* End container */}
                </section>	 {/* END INNER PAGES */}
                {/* BANNER-2
			============================================= */}
                <section id="banner-201" className="bg-fixed banner-2 division">
                    <div className="bg-fixed bg-inner division">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="banner-txt text-center">
                                        <h5>Make Your Own</h5>
                                        <h3>Stunning Menu</h3>
                                        <p>Testo comes with 3 ready to use stunning menu layouts. Create a remarkable menu for your establishment without being a professional designer</p>
                                    </div>
                                    <div className="banner-imgs pt-50"><img className="img-fluid" src="assests/images/banner-2-img.png" alt="content-image" /></div>
                                </div>
                            </div>
                        </div>	  {/* End container */}
                    </div>
                </section>	{/* END BANNER-2 */}

                <footer id="footer" className="footer division">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 footer-copyright text-center">
                                <p>Designed with <i className="far fa-heart" /> by Jthemes</p>
                                <p>© {new Date().getFullYear()} <span>Testo.</span> All Rights Reserved</p>
                            </div>
                        </div>
                    </div>
                </footer>

            </div>
        </>
    )
}
