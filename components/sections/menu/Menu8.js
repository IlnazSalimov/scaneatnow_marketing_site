import Link from 'next/link';
import { useState } from "react";
export default function Menu8({helperCls}) {
    const [activeIndex, setActiveIndex] = useState(1);

    const handleOnClick = (index) => {
        setActiveIndex(index); // remove the curly braces
    };
    return (
        <>
            <section id="menu-8" className={`wide-70 menu-section division ${helperCls ? helperCls : ""}`}>
                <div className="container">
                    {/* TABS NAVIGATION */}
                    <div id="tabs-nav">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <ul className="tabs-1 ico-55 red-tabs clearfix">
                                    {/* TAB-1 LINK */}
                                    <li className={activeIndex === 1 ? "tab-link current" : "tab-link"} onClick={() => handleOnClick(1)}>
                                        <span className="flaticon-burger" />
                                        <h5 className="h5-sm">Burgers</h5>
                                    </li>
                                    {/* TAB-2 LINK */}
                                    <li className={activeIndex === 2 ? "tab-link current" : "tab-link"} onClick={() => handleOnClick(2)}>
                                        <span className="flaticon-fries" />
                                        <h5 className="h5-sm">Sides</h5>
                                    </li>
                                    {/* TAB-3 LINK */}
                                    <li className={activeIndex === 3 ? "tab-link current" : "tab-link"} onClick={() => handleOnClick(3)}>
                                        <span className="flaticon-salad-1" />
                                        <h5 className="h5-sm">Salads</h5>
                                    </li>
                                    {/* TAB-3 LINK */}
                                    <li className={activeIndex === 4 ? "tab-link current" : "tab-link"} onClick={() => handleOnClick(4)}>
                                        <span className="flaticon-doughnut" />
                                        <h5 className="h5-sm">Desserts</h5>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div> {/* END TABS NAVIGATION */}
                    {/* TABS CONTENT */}
                    <div id="tabs-content">
                        {/* TAB-1 CONTENT */}
                        <div id="tab-1" className={activeIndex === 1 ? "tab-content current" : "tab-content"}>
                            <div className="row">
                                {/* MENU ITEM #1 */}
                                <div className="col-sm-6 col-lg-3">
                                    <div className="menu-7-item">
                                        {/* IMAGE */}
                                        <div className="menu-7-img rel">
                                            {/* Image */}
                                            <img className="img-fluid" src="/images/menu/burger-01.png" alt="menu-image" />
                                            {/* Price */}
                                            <div className="menu-7-price bg-coffee">
                                                <h5 className="h5-xs yellow-color">$8.95</h5>
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
                                            <h5 className="h5-sm coffee-color">Crispy Chicken</h5>
                                            {/* Description */}
                                            <p className="grey-color">Fried chicken breast, chilli sauce, tomatoes, pickles, coleslaw</p>
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
                                            <img className="img-fluid" src="/images/menu/burger-02.png" alt="menu-image" />
                                            {/* Price */}
                                            <div className="menu-7-price bg-coffee">
                                                <h5 className="h5-xs yellow-color">$9.99</h5>
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
                                            <h5 className="h5-sm coffee-color">Ultimate Bacon</h5>
                                            {/* Description */}
                                            <p className="grey-color">House beef patty, cheddar cheese, bacon, onion, mustard</p>
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
                                            <img className="img-fluid" src="/images/menu/burger-06.png" alt="menu-image" />
                                            {/* Price */}
                                            <div className="menu-7-price bg-coffee">
                                                <h5 className="h5-xs yellow-color">$7.99</h5>
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
                                            <h5 className="h5-sm coffee-color">Smokey House</h5>
                                            {/* Description */}
                                            <p className="grey-color">Beef patty, cheddar cheese, onion, lettuce, tomatoes, pickles</p>
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
                                            <img className="img-fluid" src="/images/menu/burger-05.png" alt="menu-image" />
                                            {/* Price */}
                                            <div className="menu-7-price bg-coffee">
                                                <h5 className="h5-xs yellow-color">$8.30</h5>
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
                                            <h5 className="h5-sm coffee-color">Turkey Burger</h5>
                                            {/* Description */}
                                            <p className="grey-color">Turkey, cheddar cheese, onion, lettuce, tomatoes, pickles</p>
                                            {/* Button */}
                                            <Link href="/product-single" className="btn btn-sm btn-tra-grey yellow-hover">
                                                <span className="flaticon-shopping-bag" /> Add to Cart
                                            </Link>
                                        </div>
                                    </div>
                                </div>	{/* END MENU ITEM #4 */}
                            </div>  {/* End row */}
                        </div>	{/* END TAB-1 CONTENT */}
                        {/* TAB-2 CONTENT */}
                        <div id="tab-2" className={activeIndex === 2 ? "tab-content current" : "tab-content"}>
                            <div className="row">
                                {/* MENU ITEM #1 */}
                                <div className="col-sm-6 col-lg-3">
                                    <div className="menu-7-item">
                                        {/* IMAGE */}
                                        <div className="menu-7-img rel">
                                            {/* Image */}
                                            <img className="img-fluid" src="/images/menu/side-01.png" alt="menu-image" />
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
                                            <h5 className="h5-sm coffee-color">Onion Rings</h5>
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
                                            <img className="img-fluid" src="/images/menu/side-02.png" alt="menu-image" />
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
                                            <h5 className="h5-sm coffee-color">French Fries</h5>
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
                                            <img className="img-fluid" src="/images/menu/side-03.png" alt="menu-image" />
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
                                            <h5 className="h5-sm coffee-color">Mozzarella Sticks</h5>
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
                                            <img className="img-fluid" src="/images/menu/side-04.png" alt="menu-image" />
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
                                            <h5 className="h5-sm coffee-color">Chicken Nuggets</h5>
                                            {/* Description */}
                                            <p className="grey-color">Integer ultrice an aligula lectus purus magna and tempor</p>
                                            {/* Button */}
                                            <Link href="/product-single" className="btn btn-sm btn-tra-grey yellow-hover">
                                                <span className="flaticon-shopping-bag" /> Add to Cart
                                            </Link>
                                        </div>
                                    </div>
                                </div>	{/* END MENU ITEM #4 */}
                            </div>  {/* End row */}
                        </div>	{/* END TAB-2 CONTENT */}
                        {/* TAB-3 CONTENT */}
                        <div id="tab-3" className={activeIndex === 3 ? "tab-content current" : "tab-content"}>
                            <div className="row">
                                {/* MENU ITEM #1 */}
                                <div className="col-sm-6 col-lg-3">
                                    <div className="menu-7-item">
                                        {/* IMAGE */}
                                        <div className="menu-7-img rel">
                                            {/* Image */}
                                            <img className="img-fluid" src="/images/menu/salad-01.png" alt="menu-image" />
                                            {/* Price */}
                                            <div className="menu-7-price bg-coffee">
                                                <h5 className="h5-xs yellow-color">$7.99</h5>
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
                                            <h5 className="h5-sm coffee-color">Greek Salad</h5>
                                            {/* Description */}
                                            <p className="grey-color">Tomatoes, cucumbers, olives, feta cheese, red onion, olive oil</p>
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
                                            <img className="img-fluid" src="/images/menu/salad-02.png" alt="menu-image" />
                                            {/* Price */}
                                            <div className="menu-7-price bg-coffee">
                                                <h5 className="h5-xs yellow-color">$9.30</h5>
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
                                            <h5 className="h5-sm coffee-color">Chicken Salad</h5>
                                            {/* Description */}
                                            <p className="grey-color">Chicken breast, chilli sauce, lime juice, lettuce leaves, cucumber</p>
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
                                            <img className="img-fluid" src="/images/menu/salad-03.png" alt="menu-image" />
                                            {/* Price */}
                                            <div className="menu-7-price bg-coffee">
                                                <h5 className="h5-xs yellow-color">$8.70</h5>
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
                                            <h5 className="h5-sm coffee-color">Spinach Salad</h5>
                                            {/* Description */}
                                            <p className="grey-color">Halloumi cheese, spinach, oranges, mint leaves, olive oil</p>
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
                                            <img className="img-fluid" src="/images/menu/salad-04.png" alt="menu-image" />
                                            {/* Price */}
                                            <div className="menu-7-price bg-coffee">
                                                <h5 className="h5-xs yellow-color">$8.30</h5>
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
                                            <h5 className="h5-sm coffee-color">Turkey Burger</h5>
                                            {/* Description */}
                                            <p className="grey-color">Turkey, cheddar cheese, onion, lettuce, tomatoes, pickles</p>
                                            {/* Button */}
                                            <Link href="/product-single" className="btn btn-sm btn-tra-grey yellow-hover">
                                                <span className="flaticon-shopping-bag" /> Add to Cart
                                            </Link>
                                        </div>
                                    </div>
                                </div>	{/* END MENU ITEM #4 */}
                            </div>  {/* End row */}
                        </div>	{/* END TAB-3 CONTENT */}
                        {/* TAB-4 CONTENT */}
                        <div id="tab-4" className={activeIndex === 4 ? "tab-content current" : "tab-content"}>
                            <div className="row">
                                {/* MENU ITEM #1 */}
                                <div className="col-sm-6 col-lg-3">
                                    <div className="menu-7-item">
                                        {/* IMAGE */}
                                        <div className="menu-7-img rel">
                                            {/* Image */}
                                            <img className="img-fluid" src="/images/menu/dessert-01.png" alt="menu-image" />
                                            {/* Price */}
                                            <div className="menu-7-price bg-coffee">
                                                <h5 className="h5-xs yellow-color">$8.50</h5>
                                            </div>
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
                                            <div className="like-ico ico-20">
                                                <Link href="#"><span className="flaticon-heart" /></Link>
                                            </div>
                                        </div>
                                        {/* TEXT */}
                                        <div className="menu-7-txt rel">
                                            {/* Title */}
                                            <h5 className="h5-sm coffee-color">Strawberry Caken</h5>
                                            {/* Description */}
                                            <p className="grey-color">Strawberry, soft cheese, icing sugar, butter softened</p>
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
                                            <img className="img-fluid" src="/images/menu/dessert-02.png" alt="menu-image" />
                                            {/* Price */}
                                            <div className="menu-7-price bg-coffee">
                                                <h5 className="h5-xs yellow-color">$8.50</h5>
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
                                            <h5 className="h5-sm coffee-color">Belgian Waffle</h5>
                                            {/* Description */}
                                            <p className="grey-color">Berries, Greek yogurt, ice cream, chocolate sauce, peanut butter</p>
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
                                            <img className="img-fluid" src="/images/menu/dessert-03.png" alt="menu-image" />
                                            {/* Price */}
                                            <div className="menu-7-price bg-coffee">
                                                <h5 className="h5-xs yellow-color">$7.99</h5>
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
                                            <h5 className="h5-sm coffee-color">Cheesecake</h5>
                                            {/* Description */}
                                            <p className="grey-color">Strawberry, double cream, icing sugar, soft cheese, biscuits</p>
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
                                            <img className="img-fluid" src="/images/menu/dessert-04.png" alt="menu-image" />
                                            {/* Price */}
                                            <div className="menu-7-price bg-coffee">
                                                <h5 className="h5-xs yellow-color">$7.40</h5>
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
                                            <h5 className="h5-sm coffee-color">Chocolate Cake</h5>
                                            {/* Description */}
                                            <p className="grey-color">Milk chocolate, icing sugar, cocoa powder, milk, vanilla extract</p>
                                            {/* Button */}
                                            <Link href="/product-single" className="btn btn-sm btn-tra-grey yellow-hover">
                                                <span className="flaticon-shopping-bag" /> Add to Cart
                                            </Link>
                                        </div>
                                    </div>
                                </div>	{/* END MENU ITEM #4 */}
                            </div>  {/* End row */}
                        </div>	{/* END TAB-4 CONTENT */}
                    </div>	{/* END TABS CONTENT */}
                </div>	   {/* End container */}
            </section>
        </>
    )
}
