import Layout from "@/components/layout/Layout";
import Menu6 from "@/components/sections/menu/Menu6";
import Link from "next/link";
import { useState } from "react";
export default function Home() {
    const [activeIndex, setActiveIndex] = useState(1);

    const handleOnClick = (index) => {
        setActiveIndex(index); // remove the curly braces
    };
    return (
        <>
            <Layout
                pageId={"product-page"}
                activePage={"Smokey House"}
                pageTitle={"Smokey House"}
                headerStyle={1}
                footerStyle={1}
            >

                <section id="product-1" className="pt-100 single-product division">
                    <div className="container">
                        <div className="row">
                            {/* PRODUCT IMAGE */}
                            <div className="col-lg-7">
                                <div className="product-preview">
                                    {/* TABS CONTENT */}
                                    <div className="tabs-content">
                                        {/* TAB-1 CONTENT */}
                                        <div id="tab-1-img" className="tab-content text-center displayed">
                                            <img className="img-fluid" src="/images/menu/burger-06.png" alt="menu-image" />
                                        </div>
                                        {/* TAB-2 CONTENT */}
                                        <div id="tab-2-img" className="tab-content text-center">
                                            <img className="img-fluid" src="/images/menu/burger-04.png" alt="menu-image" />
                                        </div>
                                        {/* TAB-3 CONTENT */}
                                        <div id="tab-3-img" className="tab-content text-center">
                                            <img className="img-fluid" src="/images/menu/burger-07.png" alt="menu-image" />
                                        </div>
                                    </div>	{/* END TABS CONTENT */}
                                    {/* TABS NAVIGATION */}
                                    <div className="tabs-nav">
                                        <div className="row">
                                            <div className="col-lg-12 text-center">
                                                <ul className="tabs-2 clearfix">
                                                    {/* TAB-1 LINK */}
                                                    <li className="tab-link displayed" data-tab="tab-1-img">
                                                        <img src="/images/menu/burger-06.png" alt="menu-image" />
                                                    </li>
                                                    {/* TAB-2 LINK */}
                                                    <li className="tab-link" data-tab="tab-2-img">
                                                        <img src="/images/menu/burger-04.png" alt="menu-image" />
                                                    </li>
                                                    {/* TAB-2 LINK */}
                                                    <li className="tab-link" data-tab="tab-3-img">
                                                        <img src="/images/menu/burger-07.png" alt="menu-image" />
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div> {/* END TABS NAVIGATION */}
                                </div>
                            </div>	{/* END PRODUCT IMAGE */}
                            {/* PRODUCT DISCRIPTION */}
                            <div className="col-lg-5">
                                <div className="product-description">
                                    {/* TITLE */}
                                    <div className="project-title">
                                        {/* Title */}
                                        <h2 className="h2-lg">Smokey House</h2>
                                        {/* Rating */}
                                        <div className="stars-rating">
                                            <span>4.38</span>
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star-half-alt" />
                                            <span>(3 Customer Reviews)</span>
                                        </div>
                                        {/* Price */}
                                        <div className="project-price">
                                            <h4 className="h4-xl yellow-color"><span className="old-price">$9.95</span> $8.60</h4>
                                        </div>
                                    </div>
                                    {/* TEXT */}
                                    <div className="product-txt">
                                        {/* Text */}
                                        <p className="p-md grey-color">Integer congue magna at pretium purus pretium ligula rutrum risus ultrice luctus
                                            ligula congue a vitae auctor sapien gravida enim ipsum congue morbi pretium
                                        </p>
                                        {/* Product Data */}
                                        <div className="product-info">
                                            <p>Portion Size: <span>390g</span></p>
                                            <p>Calories: <span>680Kj</span></p>
                                            <p>Allergies: <span>Lactose, Gluten, Mustard</span></p>
                                            <p>Tags: <span>Burgers, Fast Food, Testo</span></p>
                                        </div>
                                        <input className="qty" type="number" min={1} max={20} defaultValue={1} />
                                        {/* Add To Cart */}
                                        <div className="add-to-cart-btn bg-yellow ico-20 text-center">
                                            <Link href="/cart"><span className="flaticon-shopping-bag" /> Add to Cart</Link>
                                        </div>
                                        {/* List */}
                                        <ul className="txt-list">
                                            <li className="list-item"><p className="p-sm">We accept credit cards or cash to a courier</p></li>
                                            <li className="list-item"><p className="p-sm">Shipping cost is $2 (Free from $35)</p></li>
                                            <li className="list-item"><p className="p-sm">Order before noon for same day dispatch</p></li>
                                        </ul>
                                    </div>	{/* END TEXT*/}
                                </div>
                            </div>	{/* END PRODUCT DISCRIPTION */}
                        </div>	  {/* End row */}
                    </div>	   {/* End container */}
                </section>	{/* END SINGLE PRODUCT */}
                {/* SINGLE PRODUCT DATA
			============================================= */}
                <section id="product-1-data" className="wide-80 single-product-data division">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className>
                                    {/* TABS NAVIGATION */}
                                    <div className="tabs-nav">
                                        <div className="row">
                                            <div className="col-lg-12 text-center">
                                                <ul className="tabs-1 clearfix">
                                                    {/* TAB-1 LINK */}
                                                    <li className={activeIndex === 1 ? "tab-link current" : "tab-link"} onClick={() => handleOnClick(1)}>
                                                        <h5 className="h5-sm">Description</h5>
                                                    </li>
                                                    {/* TAB-2 LINK */}
                                                    <li className={activeIndex === 2 ? "tab-link current" : "tab-link"} onClick={() => handleOnClick(2)}>
                                                        <h5 className="h5-sm">Reviews (3)</h5>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div> {/* END TABS NAVIGATION */}
                                    {/* TABS CONTENT */}
                                    <div className="tabs-content">
                                        {/* TAB-1 CONTENT */}
                                        <div id="tab-1" className={activeIndex === 1 ? "tab-content current" : "tab-content"}>
                                            {/* Text */}
                                            <p>Donec sodales, nibh vel tristique aliquet, nisi libero suscipit diam, sed tempus ante nulla ut purus.
                                                Donec dolor magna aliquet suscipit in magna dignissim, porttitor hendrerit. Nunc gravida ultrices a felis eget faucibus. Praesent lorem purus, quis mollis nisi laoreet vitae consequat tortor
                                            </p>
                                            {/* List */}
                                            <ul className="txt-list">
                                                <li className="list-item">
                                                    <p><span className="txt-500">Quaerat sodales sapien undo euismod purus blandit velna</span> vitae auctor
                                                        a congue magna tempor sapien eget gravida laoreet turpis urna augue, viverra a augue eget, dictum tempor diam pulvinar consectetur purus efficitur ipsum primis in cubilia laoreet augue donec
                                                    </p>
                                                </li>
                                                <li className="list-item">
                                                    <p><span className="txt-500">Nemo ipsam egestas volute turpis dolores</span> ut aliquam quaerat sodales
                                                        sapien congue augue egestas volutpat egestas magna suscipit egestas magna ipsum vitae purus
                                                        efficitur ipsum primis in cubilia undo pretium a purus pretium ligula
                                                    </p>
                                                </li>
                                            </ul>
                                            {/* Text */}
                                            <p>Aliqum  mullam blandit tempor sapien gravida donec ipsum, at porta justo. Velna vitae auctor congue magna
                                                nihil impedit ligula risus. Mauris donec ociis et magnis sapien sagittis sapien sem congue tempor gravida donec enim ipsum porta justo integer odio velna a purus efficitur ipsum primis in cubilia laoreet augue egestas luctus donec purus and blandit sodales mpedit ligula risus. Mauris donec ociis et magnis sapien
                                            </p>
                                        </div>	{/* END TAB-1 CONTENT */}
                                        {/* TAB-2 CONTENT */}
                                        <div id="tab-2" className={activeIndex === 2 ? "tab-content current" : "tab-content"}>
                                            {/* TESTIMONIAL #1 */}
                                            <div className="review-2 b-bottom">
                                                {/* Testimonial Author Avatar */}
                                                <div className="review-2-avatar">
                                                    <img src="/images/review-author-1.jpg" alt="testimonial-avatar" />
                                                </div>
                                                {/* Testimonial Text */}
                                                <div className="review-2-txt">
                                                    {/* Rating */}
                                                    <div className="stars-rating stars-lg">
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star-half-alt" />
                                                    </div>
                                                    {/* Testimonial Author */}
                                                    <div className="review-info clearfix">
                                                        <h5 className="h5-xs">Sean McMarthy</h5>
                                                        <span className="grey-color">December 4, {new Date().getFullYear()}</span>
                                                    </div>
                                                    {/* Text */}
                                                    <p>Etiam sapien sem at sagittis congue an augue massa varius egestas a suscipit magna tempus
                                                        an aliquet porta	vitae auctor aliqum  mullam blandit tempor sapien gravida congue eros magna
                                                        nihil impedit tempor. Semper lacus cursus porta lectus enim ipsum
                                                    </p>
                                                </div>
                                            </div>	{/*END  TESTIMONIAL #1 */}
                                            {/* TESTIMONIAL #3 */}
                                            <div className="review-2 b-bottom">
                                                {/* Testimonial Author Avatar */}
                                                <div className="review-2-avatar">
                                                    <img src="/images/review-author-4.jpg" alt="testimonial-avatar" />
                                                </div>
                                                {/* Testimonial Text */}
                                                <div className="review-2-txt">
                                                    {/* Rating */}
                                                    <div className="stars-rating stars-lg">
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star-half-alt" />
                                                    </div>
                                                    {/* Testimonial Author */}
                                                    <div className="review-info clearfix">
                                                        <h5 className="h5-xs">Leslie Serpas</h5>
                                                        <span className="grey-color">November 28, {new Date().getFullYear()}</span>
                                                    </div>
                                                    {/* Text */}
                                                    <p>Etiam sapien sem at sagittis congue an augue massa varius egestas a suscipit magna tempus
                                                        aliquet porta vitae auctor aliqum mullam blandit tempor sapien gravida congue eros magna
                                                        nihil impedit tempor lacus
                                                    </p>
                                                </div>
                                            </div>	{/*END  TESTIMONIAL #2 */}
                                            {/* TESTIMONIAL #3 */}
                                            <div className="review-2">
                                                {/* Testimonial Author Avatar */}
                                                <div className="review-2-avatar">
                                                    <img src="/images/review-author-3.jpg" alt="testimonial-avatar" />
                                                </div>
                                                {/* Testimonial Text */}
                                                <div className="review-2-txt">
                                                    {/* Rating */}
                                                    <div className="stars-rating stars-lg">
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star-half-alt" />
                                                    </div>
                                                    {/* Testimonial Author */}
                                                    <div className="review-info clearfix">
                                                        <h5 className="h5-xs">Robert Peterson</h5>
                                                        <span className="grey-color">November 11, {new Date().getFullYear()}</span>
                                                    </div>
                                                    {/* Text */}
                                                    <p>Etiam sapien sem at sagittis congue an augue massa varius egestas a suscipit magna tempus
                                                        an aliquet porta	vitae auctor aliqum  mullam blandit tempor sapien gravida congue eros magna
                                                        nihil impedit tempor. Semper lacus cursus porta lectus enim ipsum feugiat primis in ultrice
                                                        ligula tempus undo auctor ipsum and mauris lectus enim ipsum
                                                    </p>
                                                </div>
                                            </div>	{/*END  TESTIMONIAL #3 */}
                                        </div>	{/* END TAB-2 CONTENT */}
                                    </div>	{/* END TABS CONTENT */}
                                </div>
                            </div>
                        </div>	  {/* End row */}
                    </div>	   {/* End container */}
                </section>	{/* END SINGLE PRODUCT DATA */}

                <Menu6 helperCls="bg-lightgrey" />
            </Layout>
        </>
    )
}