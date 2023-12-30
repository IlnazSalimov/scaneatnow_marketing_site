import Link from "next/link";

export default function Promo7({helperCls}) {
    return (
        <>
            <section id="promo-7" className={`wide-100 promo-section division ${helperCls ? helperCls : ""}`}>
                <div className="container">
                    {/* SECTION TITLE */}
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <div className="section-title mb-60 text-center">
                                {/* Title 	*/}
                                <h2 className="h2-xl red-color">Our Best Offers</h2>
                                {/* Text */}
                                <p className="p-xl">Aliquam a augue suscipit, luctus neque purus ipsum neque undo dolor
                                    primis libero tempus, blandit a cursus varius magna
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row d-flex align-items-center">
                        {/* PROMO BOX-1 */}
                        <div className="col-lg-4">
                            <div className="pbox-7 clearfix">
                                {/* Image */}
                                <div className="pbox-7-img rel">
                                    <div className="hover-overlay">
                                        {/* Image */}
                                        <img className="img-fluid" src="/images/img-01.jpg" alt="promo-image" />
                                        {/* Item Code */}
                                        <span className="item-code bg-tra-dark">Code: 0961</span>
                                        {/* Zoom Icon */}
                                        {/* <div className="menu-img-zoom ico-25">
                                            <Link href="/images/img-01.jpg" className="image-link">
                                                <span className="flaticon-zoom" />
                                            </Link>
                                        </div> */}
                                    </div>
                                </div>
                                {/* Text */}
                                <div id="pb-7-1" className="pbox-7-txt rel">
                                    {/* Rating */}
                                    <div className="item-rating">
                                        <div className="stars-rating stars-lg">
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star-half-alt" />
                                        </div>
                                    </div>
                                    {/* Like Icon */}
                                    <div className="like-ico ico-25">
                                        <Link href="#"><span className="flaticon-heart" /></Link>
                                    </div>
                                    {/* Title */}
                                    <h4 className="h4-xs coffee-color">Fried Seafood</h4>
                                    {/* Text */}
                                    <p className="grey-color">Vitae sapien justo aliquet purus molestie a semper lacus at cursus porta lobortis</p>
                                    {/* Price */}
                                    <div className="pbox-7-price">
                                        <h5 className="h5-lg red-color"><span className="old-price">$11.80</span> $9.99</h5>
                                    </div>
                                    {/* Add To Cart */}
                                    <div className="add-to-cart bg-yellow ico-10">
                                        <Link href="/product-single"><span className="flaticon-shopping-bag" /> Add to Cart</Link>
                                    </div>
                                </div>
                            </div>
                        </div>	{/* END PROMO BOX-1 */}
                        {/* PROMO BOX-2 */}
                        <div className="col-lg-4">
                            <div className="pbox-7 clearfix m-row">
                                {/* Text */}
                                <div id="pb-7-2" className="pbox-7-txt rel m-bottom">
                                    {/* Rating */}
                                    <div className="item-rating">
                                        <div className="stars-rating stars-lg">
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                        </div>
                                    </div>
                                    {/* Like Icon */}
                                    <div className="like-ico ico-25">
                                        <Link href="#"><span className="flaticon-heart" /></Link>
                                    </div>
                                    {/* Title */}
                                    <h4 className="h4-sm coffee-color">Crispy Chicken</h4>
                                    {/* Text */}
                                    <p className="grey-color">Vitae sapien justo aliquet molestie purus a semper lacus at cursus porta lobortis</p>
                                    {/* Price */}
                                    <div className="pbox-7-price">
                                        <h5 className="h5-lg red-color"><span className="old-price">$13.79</span> $11.25</h5>
                                    </div>
                                    {/* Add To Cart */}
                                    <div className="add-to-cart bg-yellow ico-10">
                                        <Link href="/product-single"><span className="flaticon-shopping-bag" /> Add to Cart</Link>
                                    </div>
                                </div>
                                {/* Image */}
                                <div className="pbox-7-img rel m-top">
                                    <div className="hover-overlay">
                                        {/* Image */}
                                        <img className="img-fluid" src="/images/img-02.jpg" alt="promo-image" />
                                        {/* Item Code */}
                                        <span className="item-code bg-tra-dark">Code: 2136</span>
                                        {/* Zoom Icon */}
                                        {/* <div className="menu-img-zoom ico-25">
                                            <Link href="/images/img-02.jpg" className="image-link">
                                                <span className="flaticon-zoom" />
                                            </Link>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>	{/* END PROMO BOX-2 */}
                        {/* PROMO BOX-3 */}
                        <div className="col-lg-4">
                            <div className="pbox-7 clearfix">
                                {/* Image */}
                                <div className="pbox-7-img rel">
                                    <div className="hover-overlay">
                                        {/* Image */}
                                        <img className="img-fluid" src="/images/img-03.jpg" alt="promo-image" />
                                        {/* Item Code */}
                                        <span className="item-code bg-tra-dark">Code: 2164</span>
                                        {/* Zoom Icon */}
                                        {/* <div className="menu-img-zoom ico-25">
                                            <Link href="/images/img-03.jpg" className="image-link">
                                                <span className="flaticon-zoom" />
                                            </Link>
                                        </div> */}
                                    </div>
                                </div>
                                {/* Text */}
                                <div id="pb-7-3" className="pbox-7-txt rel">
                                    {/* Rating */}
                                    <div className="item-rating">
                                        <div className="stars-rating stars-lg">
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star-half-alt" />
                                        </div>
                                    </div>
                                    {/* Like Icon */}
                                    <div className="like-ico ico-25">
                                        <Link href="#"><span className="flaticon-heart" /></Link>
                                    </div>
                                    {/* Title */}
                                    <h4 className="h4-sm coffee-color">French Fries</h4>
                                    {/* Text */}
                                    <p className="grey-color">Vitae sapien justo aliquet molestie purus a semper lacus at cursus porta lobortis</p>
                                    {/* Price */}
                                    <div className="pbox-7-price">
                                        <h5 className="h5-lg red-color"><span className="old-price">$5.45</span> $4.49</h5>
                                    </div>
                                    {/* Add To Cart */}
                                    <div className="add-to-cart bg-yellow ico-10">
                                        <Link href="/product-single"><span className="flaticon-shopping-bag" /> Add to Cart</Link>
                                    </div>
                                </div>
                            </div>
                        </div>	{/* END PROMO BOX-3 */}
                    </div>    {/* End row */}
                </div>	   {/* End container */}
            </section>
        </>
    )
}
