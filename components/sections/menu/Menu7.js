import Link from "next/link";

export default function Menu7({helperCls}) {
    return (
        <>
            <section id="menu-7" className={`wide-50 menu-section division ${helperCls ? helperCls : ""}`}>
                <div className="container">
                    {/* SECTION TITLE */}
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <div className="section-title mb-60 text-center">
                                {/* Title 	*/}
                                <h2 className="h2-xl red-color">Taste The Difference</h2>
                                {/* Text */}
                                <p className="p-xl">Aliquam a augue suscipit, luctus neque purus ipsum neque undo dolor
                                    primis libero tempus, blandit a cursus varius magna
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {/* MENU ITEM #1 */}
                        <div className="col-sm-6 col-lg-3">
                            <div className="menu-7-item">
                                {/* IMAGE */}
                                <div className="menu-7-img rel">
                                    {/* Image */}
                                    <img className="img-fluid" src="/images/menu/side-08.png" alt="menu-image" />
                                    {/* Price */}
                                    <div className="menu-7-price bg-coffee">
                                        <h5 className="h5-xs yellow-color">$3.85</h5>
                                    </div>
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
                                    <div className="like-ico ico-20">
                                        <Link href="#"><span className="flaticon-heart" /></Link>
                                    </div>
                                </div>
                                {/* TEXT */}
                                <div className="menu-7-txt rel">
                                    {/* Title */}
                                    <h5 className="h5-sm">Buffalo Wings</h5>
                                    {/* Description */}
                                    <p className="grey-color">Integer ultrice an aligula lectus purus magna and tempor</p>
                                    {/* Button */}
                                    <Link href="/product-single" className="btn btn-sm btn-tra-grey yellow-hover">
                                        <span className="flaticon-shopping-bag" /> Add to Cart
                                    </Link>
                                </div>
                            </div>
                        </div>	{/* END MENU ITEM #1 */}
                        {/* MENU ITEM #2 */}
                        <div className="col-sm-6 col-lg-3">
                            <div className="menu-7-item">
                                {/* IMAGE */}
                                <div className="menu-7-img rel">
                                    {/* Image */}
                                    <img className="img-fluid" src="/images/menu/side-04.png" alt="menu-image" />
                                    {/* Price */}
                                    <div className="menu-7-price bg-coffee">
                                        <h5 className="h5-xs yellow-color">$3.69</h5>
                                    </div>
                                    {/* Rating */}
                                    <div className="item-rating">
                                        <div className="stars-rating stars-lg">
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="far fa-star" />
                                        </div>
                                    </div>
                                    {/* Like Icon */}
                                    <div className="like-ico ico-20">
                                        <Link href="#"><span className="flaticon-heart" /></Link>
                                    </div>
                                </div>
                                {/* TEXT */}
                                <div className="menu-7-txt rel">
                                    {/* Title */}
                                    <h5 className="h5-sm">Crispy Chicken</h5>
                                    {/* Description */}
                                    <p className="grey-color">Integer ultrice an aligula lectus purus magna and tempor</p>
                                    {/* Button */}
                                    <Link href="/product-single" className="btn btn-sm btn-tra-grey yellow-hover">
                                        <span className="flaticon-shopping-bag" /> Add to Cart
                                    </Link>
                                </div>
                            </div>
                        </div>	{/* END MENU ITEM #2 */}
                        {/* MENU ITEM #3 */}
                        <div className="col-sm-6 col-lg-3">
                            <div className="menu-7-item">
                                {/* IMAGE */}
                                <div className="menu-7-img rel">
                                    {/* Image */}
                                    <img className="img-fluid" src="/images/menu/side-06.png" alt="menu-image" />
                                    {/* Price */}
                                    <div className="menu-7-price bg-coffee">
                                        <h5 className="h5-xs yellow-color">$5.25</h5>
                                    </div>
                                    {/* Rating */}
                                    <div className="item-rating">
                                        <div className="stars-rating stars-lg">
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="far fa-star" />
                                        </div>
                                    </div>
                                    {/* Like Icon */}
                                    <div className="like-ico ico-20">
                                        <Link href="#"><span className="flaticon-heart" /></Link>
                                    </div>
                                </div>
                                {/* TEXT */}
                                <div className="menu-7-txt rel">
                                    {/* Title */}
                                    <h5 className="h5-sm">Chicken Fingers</h5>
                                    {/* Description */}
                                    <p className="grey-color">Integer ultrice an aligula lectus purus magna and tempor</p>
                                    {/* Button */}
                                    <Link href="/product-single" className="btn btn-sm btn-tra-grey yellow-hover">
                                        <span className="flaticon-shopping-bag" /> Add to Cart
                                    </Link>
                                </div>
                            </div>
                        </div>	{/* END MENU ITEM #3 */}
                        {/* MENU ITEM #4 */}
                        <div className="col-sm-6 col-lg-3">
                            <div className="menu-7-item">
                                {/* IMAGE */}
                                <div className="menu-7-img rel">
                                    {/* Image */}
                                    <img className="img-fluid" src="/images/menu/side-05.png" alt="menu-image" />
                                    {/* Price */}
                                    <div className="menu-7-price bg-coffee">
                                        <h5 className="h5-xs yellow-color">$4.99</h5>
                                    </div>
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
                                    <div className="like-ico ico-20">
                                        <Link href="#"><span className="flaticon-heart" /></Link>
                                    </div>
                                </div>
                                {/* TEXT */}
                                <div className="menu-7-txt rel">
                                    {/* Title */}
                                    <h5 className="h5-sm">Chicken Nuggets</h5>
                                    {/* Description */}
                                    <p className="grey-color">Integer ultrice an aligula lectus purus magna and tempor</p>
                                    {/* Button */}
                                    <Link href="/product-single" className="btn btn-sm btn-tra-grey yellow-hover">
                                        <span className="flaticon-shopping-bag" /> Add to Cart
                                    </Link>
                                </div>
                            </div>
                        </div>	{/* END MENU ITEM #4 */}
                    </div>	  {/* End row */}
                </div>	   {/* End container */}
            </section>
        </>
    )
}
