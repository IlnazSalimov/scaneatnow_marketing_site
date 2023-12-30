
export default function Menu4({helperCls}) {
    return (
        <>
            <section id="menu-4" className={`wide-60 menu-section division ${helperCls ? helperCls : ""}`}>
                <div className="container">
                    {/* MENU-4 TOP */}
                    <div id="m4-top" className="mb-40">
                        <div className="row d-flex align-items-center m-row">
                            {/* MENU-4 IMAGE */}
                            <div className="col-md-4 col-lg-6 col-xl-7 m-bottom">
                                <div className="menu-4-img">
                                    <img className="img-fluid" src="/images/menu-4-1-img.png" alt="menu-image" />
                                </div>
                            </div>
                            {/* MENU-4 TEXT */}
                            <div className="col-md-8 col-lg-6 col-xl-5 m-top">
                                <div className="menu-4-txt">
                                    <ul className="menu-4-list common-dishes">
                                        {/* MENU ITEM-1 */}
                                        <li className="menu-4-item">
                                            {/* Title & Price */}
                                            <div className="menu-title-wrapper">
                                                <div className="menu-item-title"><h5 className="h5-sm">Shrimp &amp; Tonnarelli Pasta</h5></div>
                                                <div className="menu-item-dots" />
                                                <div className="menu-item-price"><h5 className="h5-sm">$11.50</h5></div>
                                            </div>
                                            {/* Description */}
                                            <div className="menu-item-desc">
                                                <p className="grey-color">Serrano ham, spinach, roasted red peppers, tomato, pil pil sauce</p>
                                                <div className="item-rating">
                                                    <div className="stars-rating grey-color">
                                                        <span>4.52</span>
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star-half-alt" />
                                                        <span>(58)</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        {/* MENU ITEM-2 */}
                                        <li className="menu-4-item">
                                            {/* Title & Price */}
                                            <div className="menu-title-wrapper">
                                                <div className="menu-item-title"><h5 className="h5-sm">Spaghetti Alla Puttanesca</h5></div>
                                                <div className="menu-item-dots" />
                                                <div className="menu-item-price"><h5 className="h5-sm">$24.75</h5></div>
                                            </div>
                                            {/* Description */}
                                            <div className="menu-item-desc">
                                                <p className="grey-color">Garlic, black olives, cherry tomatoes, red chillies, spaghetti, olive oil,
                                                    anchovy fillets, Parmesan cheese
                                                </p>
                                                <div className="item-rating">
                                                    <div className="stars-rating grey-color">
                                                        <span>4.9</span>
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <span>(69)</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        {/* MENU ITEM-3 */}
                                        <li className="menu-4-item">
                                            {/* Title & Price */}
                                            <div className="menu-title-wrapper">
                                                <div className="menu-item-title"><h5 className="h5-sm">BBQ lamb and barley salad</h5></div>
                                                <div className="menu-item-dots" />
                                                <div className="menu-item-price"><h5 className="h5-sm">$16.25</h5></div>
                                            </div>
                                            {/* Description */}
                                            <div className="menu-item-desc">
                                                <p className="grey-color"> Lamb forequarter chops, pearl barley, smoked paprika, oregano, olive oil,
                                                    tomatoes, cucumber, red onion, mint, parsley, lemon
                                                </p>
                                                <div className="item-rating">
                                                    <div className="stars-rating grey-color">
                                                        <span>4.38</span>
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="far fa-star" />
                                                        <span>(41)</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        {/* MENU ITEM-4 */}
                                        <li className="menu-4-item">
                                            {/* Title & Price */}
                                            <div className="menu-title-wrapper">
                                                <div className="menu-item-title"><h5 className="h5-sm">Garden Salad</h5></div>
                                                <div className="menu-item-dots" />
                                                <div className="menu-item-price"><h5 className="h5-sm">$11.50</h5></div>
                                            </div>
                                            {/* Description */}
                                            <div className="menu-item-desc">
                                                <p className="grey-color">Cucumber, head lettuce, tomato, red onion, pea shoots, fresh dill</p>
                                                <div className="item-rating">
                                                    <div className="stars-rating grey-color">
                                                        <span>5</span>
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <span>(86)</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>	{/* END MENU-4 TEXT */}
                        </div>	  {/* End row */}
                    </div>	{/* END MENU-4 TOP */}
                    {/* MENU-4 BOTTOM */}
                    <div id="m4-bottom">
                        <div className="row d-flex align-items-center">
                            {/* MENU-4 TEXT */}
                            <div className="col-md-8 col-lg-6 col-xl-5">
                                <div className="menu-4-txt mb-40">
                                    <ul className="menu-4-list common-dishes">
                                        {/* MENU ITEM-5 */}
                                        <li className="menu-4-item">
                                            {/* Title & Price */}
                                            <div className="menu-title-wrapper">
                                                <div className="menu-item-title"><h5 className="h5-sm">Nice Little Side Salad</h5></div>
                                                <div className="menu-item-dots" />
                                                <div className="menu-item-price"><h5 className="h5-sm">$8.99</h5></div>
                                            </div>
                                            {/* Description */}
                                            <div className="menu-item-desc">
                                                <p className="grey-color">Spinach, Tuscan Romaine, red onion, roasted corn, cherry tomatoes,
                                                    heirloom carrots, BL Lemon-Basil Vinaigrette</p>
                                                <div className="item-rating">
                                                    <div className="stars-rating grey-color">
                                                        <span>4.38</span>
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="far fa-star" />
                                                        <span>(41)</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        {/* MENU ITEM-6 */}
                                        <li className="menu-4-item">
                                            {/* Title & Price */}
                                            <div className="menu-title-wrapper">
                                                <div className="menu-item-title"><h5 className="h5-sm">Cobb Salad</h5></div>
                                                <div className="menu-item-dots" />
                                                <div className="menu-item-price"><h5 className="h5-sm">$13.49</h5></div>
                                            </div>
                                            {/* Description */}
                                            <div className="menu-item-desc">
                                                <p className="grey-color">Fresh greens, chopped bacon, sliced hard-boiled egg, heirloom tomatoes,
                                                    avocado, crumbled bleu cheese</p>
                                                <div className="item-rating">
                                                    <div className="stars-rating grey-color">
                                                        <span>5</span>
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <span>(86)</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        {/* MENU ITEM-7 */}
                                        <li className="menu-4-item">
                                            {/* Title & Price */}
                                            <div className="menu-title-wrapper">
                                                <div className="menu-item-title"><h5 className="h5-sm">Chinese Chicken Salad</h5></div>
                                                <div className="menu-item-dots" />
                                                <div className="menu-item-price"><h5 className="h5-sm">$12.65</h5></div>
                                            </div>
                                            {/* Description */}
                                            <div className="menu-item-desc">
                                                <p className="grey-color">Chicken, black peppercorns, bay leaves, cucumber, almonds, basil, fat-free
                                                    natural yoghurt, low-fat mayonnaise, salad leaves
                                                </p>
                                                <div className="item-rating">
                                                    <div className="stars-rating grey-color">
                                                        <span>4.5</span>
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star-half-alt" />
                                                        <span>(23)</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        {/* MENU ITEM-8 */}
                                        <li className="menu-4-item">
                                            {/* Title & Price */}
                                            <div className="menu-title-wrapper">
                                                <div className="menu-item-title"><h5 className="h5-sm">Caesar Salad</h5></div>
                                                <div className="menu-item-dots" />
                                                <div className="menu-item-price"><h5 className="h5-sm">$11.25</h5></div>
                                            </div>
                                            {/* Description */}
                                            <div className="menu-item-desc">
                                                <p className="grey-color">Chicken, bread, garlic, olive oil, anchovies, red chillies, lemon,
                                                    romaine lettuces, cucumber, fresh chives, radishes
                                                </p>
                                                <div className="item-rating">
                                                    <div className="stars-rating grey-color">
                                                        <span>4.65</span>
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star-half-alt" />
                                                        <span>(30)</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>	{/* END MENU-4 TEXT */}
                            {/* MENU-4 IMAGE */}
                            <div className="col-md-4 col-lg-6 col-xl-7">
                                <div className="menu-4-img">
                                    <img className="img-fluid" src="/images/menu-4-2-img.png" alt="menu-image" />
                                </div>
                            </div>
                        </div>	  {/* End row */}
                    </div>	{/* END MENU-4 BOTTOM */}
                </div>	   {/* End container */}
            </section>
        </>
    )
}
