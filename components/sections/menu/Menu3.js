import Link from "next/link";

export default function Menu3({helperCls}) {
    return (
        <>
            <section id="menu-3" className={`wide-100 menu-section division ${helperCls ? helperCls : ""}`}>
                <div className="container">
                    {/* MENU-3 WRAPPER */}
                    <div className="menu-3-wrapper">
                        {/* Title */}
                        <div className="row">
                            <div className="col-md-12">
                                <div className="menu-3-title"><h3 className="h3-md red-color">Appetizers &amp; Sides</h3></div>
                            </div>
                        </div>
                        <div className="row">
                            {/* LEFT COLUMN */}
                            <div className="col-lg-6">
                                <div className="menu-3-txt">
                                    <ul className="menu-3-list">
                                        {/* MENU ITEM-1 */}
                                        <li className="menu-3-item">
                                            <Link href="/product-single">
                                                {/* Title & Price */}
                                                <div className="menu-title-wrapper rel">
                                                    <div className="menu-item-title"><h5 className="h5-sm">Sticky Grilled Chicken</h5></div>
                                                    <div className="menu-item-dots" />
                                                    <div className="menu-item-price"><h5 className="h5-sm">$11.95</h5></div>
                                                    <div className="menu-3-item-data bg-grey"><h6 className="h6-xs grey-color">430g</h6></div>
                                                </div>
                                                {/* Description */}
                                                <div className="menu-item-desc">
                                                    <p>Integer ultrice an aligula lectus luctus neque a purus ipsum and neque dolor purus magna
                                                        tempor
                                                    </p>
                                                </div>
                                            </Link>
                                        </li>
                                        {/* MENU ITEM-2 */}
                                        <li className="menu-3-item">
                                            <Link href="/product-single">
                                                {/* Title & Price */}
                                                <div className="menu-title-wrapper rel">
                                                    <div className="menu-item-title"><h5 className="h5-sm">Mozzarella Sticks</h5></div>
                                                    <div className="menu-item-dots" />
                                                    <div className="menu-item-price"><h5 className="h5-sm">$7.95</h5></div>
                                                    <div className="menu-3-item-data bg-grey"><h6 className="h6-xs grey-color">320g</h6></div>
                                                </div>
                                                {/* Description */}
                                                <div className="menu-item-desc">
                                                    <p>Integer ultrice an aligula lectus luctus neque a purus ipsum and neque dolor purus magna
                                                        tempor
                                                    </p>
                                                </div>
                                            </Link>
                                        </li>
                                        {/* MENU ITEM-3 */}
                                        <li className="menu-3-item">
                                            <Link href="/product-single">
                                                {/* Title & Price */}
                                                <div className="menu-title-wrapper rel">
                                                    <div className="menu-item-title"><h5 className="h5-sm">Grilled Buffalo Wings</h5></div>
                                                    <div className="menu-item-dots" />
                                                    <div className="menu-item-price"><h5 className="h5-sm">$8.90</h5></div>
                                                    <div className="menu-3-item-data bg-grey"><h6 className="h6-xs grey-color">440g</h6></div>
                                                </div>
                                                {/* Description */}
                                                <div className="menu-item-desc">
                                                    <p>Integer ultrice an aligula lectus luctus neque a purus ipsum and neque dolor purus magna
                                                        tempor
                                                    </p>
                                                </div>
                                            </Link>
                                        </li>
                                        {/* MENU ITEM-4 */}
                                        <li className="menu-3-item">
                                            <Link href="/product-single">
                                                {/* Title & Price */}
                                                <div className="menu-title-wrapper rel">
                                                    <div className="menu-item-title"><h5 className="h5-sm">Onion rings</h5></div>
                                                    <div className="menu-item-dots" />
                                                    <div className="menu-item-price"><h5 className="h5-sm">$4.95</h5></div>
                                                    <div className="menu-3-item-data bg-grey"><h6 className="h6-xs grey-color">360g</h6></div>
                                                </div>
                                                {/* Description */}
                                                <div className="menu-item-desc">
                                                    <p>Integer ultrice an aligula lectus luctus neque a purus ipsum and neque dolor purus magna
                                                        tempor
                                                    </p>
                                                </div>
                                            </Link>
                                        </li>
                                        {/* MENU ITEM-5 */}
                                        <li className="menu-3-item resp-lst">
                                            <Link href="/product-single">
                                                {/* Title & Price */}
                                                <div className="menu-title-wrapper rel">
                                                    <div className="menu-item-title"><h5 className="h5-sm">Potato Wedges</h5></div>
                                                    <div className="menu-item-dots" />
                                                    <div className="menu-item-price"><h5 className="h5-sm">$6.50</h5></div>
                                                    <div className="menu-3-item-data bg-grey"><h6 className="h6-xs grey-color">390g</h6></div>
                                                </div>
                                                {/* Description */}
                                                <div className="menu-item-desc">
                                                    <p>Integer ultrice an aligula lectus luctus neque a purus ipsum and neque dolor purus magna
                                                        tempor
                                                    </p>
                                                </div>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>	{/* END LEFT COLUMN */}
                            {/* RIGHT COLUMN */}
                            <div className="col-lg-6">
                                <div className="menu-3-txt">
                                    <ul className="menu-3-list">
                                        {/* MENU ITEM-6 */}
                                        <li className="menu-3-item">
                                            <Link href="/product-single">
                                                {/* Title & Price */}
                                                <div className="menu-title-wrapper rel">
                                                    <div className="menu-item-title"><h5 className="h5-sm">Grilled Potatoes</h5></div>
                                                    <div className="menu-item-dots" />
                                                    <div className="menu-item-price"><h5 className="h5-sm">$6.95</h5></div>
                                                    <div className="menu-3-item-data bg-grey"><h6 className="h6-xs grey-color">380g</h6></div>
                                                </div>
                                                {/* Description */}
                                                <div className="menu-item-desc">
                                                    <p>Integer ultrice an aligula lectus luctus neque a purus ipsum and neque dolor purus magna
                                                        tempor
                                                    </p>
                                                </div>
                                            </Link>
                                        </li>
                                        {/* MENU ITEM-7 */}
                                        <li className="menu-3-item">
                                            <Link href="/product-single">
                                                {/* Title & Price */}
                                                <div className="menu-title-wrapper rel">
                                                    <div className="menu-item-title"><h5 className="h5-sm">Sticky Ribs</h5></div>
                                                    <div className="menu-item-dots" />
                                                    <div className="menu-item-price"><h5 className="h5-sm">$12.90</h5></div>
                                                    <div className="menu-3-item-data bg-grey"><h6 className="h6-xs grey-color">460g</h6></div>
                                                </div>
                                                {/* Description */}
                                                <div className="menu-item-desc">
                                                    <p>Integer ultrice an aligula lectus luctus neque a purus ipsum and neque dolor purus magna
                                                        tempor
                                                    </p>
                                                </div>
                                            </Link>
                                        </li>
                                        {/* MENU ITEM-8 */}
                                        <li className="menu-3-item">
                                            <Link href="/product-single">
                                                {/* Title & Price */}
                                                <div className="menu-title-wrapper rel">
                                                    <div className="menu-item-title"><h5 className="h5-sm">Chili Cheese Dog</h5></div>
                                                    <div className="menu-item-dots" />
                                                    <div className="menu-item-price"><h5 className="h5-sm">$6.95</h5></div>
                                                    <div className="menu-3-item-data bg-grey"><h6 className="h6-xs grey-color">335g</h6></div>
                                                </div>
                                                {/* Description */}
                                                <div className="menu-item-desc">
                                                    <p>Integer ultrice an aligula lectus luctus neque a purus ipsum and neque dolor purus magna
                                                        tempor
                                                    </p>
                                                </div>
                                            </Link>
                                        </li>
                                        {/* MENU ITEM-9 */}
                                        <li className="menu-3-item">
                                            <Link href="/product-single">
                                                {/* Title & Price */}
                                                <div className="menu-title-wrapper rel">
                                                    <div className="menu-item-title"><h5 className="h5-sm">Breakfast Burrito</h5></div>
                                                    <div className="menu-item-dots" />
                                                    <div className="menu-item-price"><h5 className="h5-sm">$5.15</h5></div>
                                                    <div className="menu-3-item-data bg-grey"><h6 className="h6-xs grey-color">340g</h6></div>
                                                </div>
                                                {/* Description */}
                                                <div className="menu-item-desc">
                                                    <p>Integer ultrice an aligula lectus luctus neque a purus ipsum and neque dolor purus magna
                                                        tempor
                                                    </p>
                                                </div>
                                            </Link>
                                        </li>
                                        {/* MENU ITEM-10 */}
                                        <li className="menu-3-item">
                                            <Link href="/product-single">
                                                {/* Title & Price */}
                                                <div className="menu-title-wrapper rel">
                                                    <div className="menu-item-title"><h5 className="h5-sm">White Truffle Salt Fries</h5></div>
                                                    <div className="menu-item-dots" />
                                                    <div className="menu-item-price"><h5 className="h5-sm">$5.65</h5></div>
                                                    <div className="menu-3-item-data bg-grey"><h6 className="h6-xs grey-color">390g</h6></div>
                                                </div>
                                                {/* Description */}
                                                <div className="menu-item-desc">
                                                    <p>Integer ultrice an aligula lectus luctus neque a purus ipsum and neque dolor purus magna
                                                        tempor
                                                    </p>
                                                </div>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>	{/* END RIGHT COLUMN */}
                        </div>	{/* End row */}
                    </div>	{/* END MENU-3 WRAPPER */}
                    {/* MENU-3 IMAGE */}
                    <div className="menu-3-img mb-60">
                        <div className="row">
                            <div className="col-md-12">
                                <img className="img-fluid" src="/images/menu-3-3-img.jpg" alt="menu-image" />
                            </div>
                        </div>
                    </div>
                    {/* MENU-3 WRAPPER */}
                    <div className="menu-3-wrapper">
                        {/* Title */}
                        <div className="row">
                            <div className="col-md-12">
                                <div className="menu-3-title"><h3 className="h3-md red-color">Pasta &amp; Salads</h3></div>
                            </div>
                        </div>
                        <div className="row">
                            {/* LEFT COLUMN */}
                            <div className="col-lg-6">
                                <div className="menu-3-txt">
                                    <ul className="menu-3-list">
                                        {/* MENU ITEM-1 */}
                                        <li className="menu-3-item">
                                            <Link href="/product-single">
                                                {/* Title & Price */}
                                                <div className="menu-title-wrapper rel">
                                                    <div className="menu-item-title"><h5 className="h5-sm">Shrimp &amp; Tonnarelli Pasta</h5></div>
                                                    <div className="menu-item-dots" />
                                                    <div className="menu-item-price"><h5 className="h5-sm">$21.50</h5></div>
                                                    <div className="menu-3-item-data bg-grey"><h6 className="h6-xs grey-color">365g</h6></div>
                                                </div>
                                                {/* Description */}
                                                <div className="menu-item-desc">
                                                    <p>Serrano ham, spinach, roasted red peppers, tomato, pil pil sauce</p>
                                                </div>
                                            </Link>
                                        </li>
                                        {/* MENU ITEM-2 */}
                                        <li className="menu-3-item">
                                            <Link href="/product-single">
                                                {/* Title & Price */}
                                                <div className="menu-title-wrapper rel">
                                                    <div className="menu-item-title"><h5 className="h5-sm">Spaghetti Bolognese</h5></div>
                                                    <div className="menu-item-dots" />
                                                    <div className="menu-item-price"><h5 className="h5-sm">$8.65</h5></div>
                                                    <div className="menu-3-item-data bg-grey"><h6 className="h6-xs grey-color">375g</h6></div>
                                                </div>
                                                {/* Description */}
                                                <div className="menu-item-desc">
                                                    <p>Pork sausages, parmesan cheese, onion, tomatoes, cream, basil</p>
                                                </div>
                                            </Link>
                                        </li>
                                        {/* MENU ITEM-3 */}
                                        <li className="menu-3-item">
                                            <Link href="/product-single">
                                                {/* Title & Price */}
                                                <div className="menu-title-wrapper rel">
                                                    <div className="menu-item-title"><h5 className="h5-sm">Spaghetti Alla Puttanesca</h5></div>
                                                    <div className="menu-item-dots" />
                                                    <div className="menu-item-price"><h5 className="h5-sm">$9.95</h5></div>
                                                    <div className="menu-3-item-data bg-grey"><h6 className="h6-xs grey-color">285g</h6></div>
                                                </div>
                                                {/* Description */}
                                                <div className="menu-item-desc">
                                                    <p>Garlic, black olives, cherry tomatoes, red chillies, spaghetti, olive oil, anchovy fillets,
                                                        Parmesan cheese
                                                    </p>
                                                </div>
                                            </Link>
                                        </li>
                                        {/* MENU ITEM-4 */}
                                        <li className="menu-3-item resp-lst">
                                            <Link href="/product-single">
                                                {/* Title & Price */}
                                                <div className="menu-title-wrapper rel">
                                                    <div className="menu-item-title"><h5 className="h5-sm">Chicken Salad</h5></div>
                                                    <div className="menu-item-dots" />
                                                    <div className="menu-item-price"><h5 className="h5-sm">$6.45</h5></div>
                                                    <div className="menu-3-item-data bg-grey"><h6 className="h6-xs grey-color">330g</h6></div>
                                                </div>
                                                {/* Description */}
                                                <div className="menu-item-desc">
                                                    <p>Chicken breast, pepper, cilantro, mint, red onion, oil, garlic chili sauce, soy sauce,
                                                        sugar, ginger root
                                                    </p>
                                                </div>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>	{/* END LEFT COLUMN */}
                            {/* RIGHT COLUMN */}
                            <div className="col-lg-6">
                                <div className="menu-3-txt">
                                    <ul className="menu-3-list">
                                        {/* MENU ITEM-5 */}
                                        <li className="menu-3-item">
                                            <Link href="/product-single">
                                                {/* Title & Price */}
                                                <div className="menu-title-wrapper rel">
                                                    <div className="menu-item-title"><h5 className="h5-sm">Spicy Seafood Salad</h5></div>
                                                    <div className="menu-item-dots" />
                                                    <div className="menu-item-price"><h5 className="h5-sm">$9.95</h5></div>
                                                    <div className="menu-3-item-data bg-grey"><h6 className="h6-xs grey-color">340g</h6></div>
                                                </div>
                                                {/* Description */}
                                                <div className="menu-item-desc">
                                                    <p>Crab sticks, shrimps, scallions, mayonnaise, tobiko, lemon, hot chili sauce, salt</p>
                                                </div>
                                            </Link>
                                        </li>
                                        {/* MENU ITEM-6 */}
                                        <li className="menu-3-item">
                                            <Link href="/product-single">
                                                {/* Title & Price */}
                                                <div className="menu-title-wrapper rel">
                                                    <div className="menu-item-title"><h5 className="h5-sm">Green Salad</h5></div>
                                                    <div className="menu-item-dots" />
                                                    <div className="menu-item-price"><h5 className="h5-sm">$5.95</h5></div>
                                                    <div className="menu-3-item-data bg-grey"><h6 className="h6-xs grey-color">290g</h6></div>
                                                </div>
                                                {/* Description */}
                                                <div className="menu-item-desc">
                                                    <p>Romaine lettuce, cucumber, tomatoes, red onion, olive oil, red wine vinegar, pepper</p>
                                                </div>
                                            </Link>
                                        </li>
                                        {/* MENU ITEM-7 */}
                                        <li className="menu-3-item">
                                            <Link href="/product-single">
                                                {/* Title & Price */}
                                                <div className="menu-title-wrapper rel">
                                                    <div className="menu-item-title"><h5 className="h5-sm">Nice Little Side Salad</h5></div>
                                                    <div className="menu-item-dots" />
                                                    <div className="menu-item-price"><h5 className="h5-sm">$7.95</h5></div>
                                                    <div className="menu-3-item-data bg-grey"><h6 className="h6-xs grey-color">350g</h6></div>
                                                </div>
                                                {/* Description */}
                                                <div className="menu-item-desc">
                                                    <p>Spinach, Tuscan Romaine, red onion, roasted corn, cherry tomatoes, heirloom carrots, BL
                                                        Lemon-Basil Vinaigrette
                                                    </p>
                                                </div>
                                            </Link>
                                        </li>
                                        {/* MENU ITEM-8 */}
                                        <li className="menu-3-item">
                                            <Link href="/product-single">
                                                {/* Title & Price */}
                                                <div className="menu-title-wrapper rel">
                                                    <div className="menu-item-title"><h5 className="h5-sm">Spicy Spinach Salad</h5></div>
                                                    <div className="menu-item-dots" />
                                                    <div className="menu-item-price"><h5 className="h5-sm">$6.85</h5></div>
                                                    <div className="menu-3-item-data bg-grey"><h6 className="h6-xs grey-color">290g</h6></div>
                                                </div>
                                                {/* Description */}
                                                <div className="menu-item-desc">
                                                    <p>Veggie patties, baby spinach, red pepper, cilantro, mint, red onion, gingerroot, soy
                                                        sauce, oil, chili sauce
                                                    </p>
                                                </div>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>	{/* END RIGHT COLUMN */}
                        </div>	{/* End row */}
                    </div>	{/* END MENU-3 WRAPPER */}
                </div>	   {/* End container */}
            </section>
        </>
    )
}
