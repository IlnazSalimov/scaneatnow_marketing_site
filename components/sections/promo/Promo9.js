
export default function Promo9({helperCls}) {
    return (
        <>
            <section id="promo-9" className={`wide-100 promo-section division ${helperCls ? helperCls : ""}`}>
                <div className="container">
                    {/* PROMO BOX-1 */}
                    <div id="pb-9-1" className="pbox-9 mb-40">
                        <div className="row d-flex align-items-center">
                            {/* Image */}
                            <div className="col-lg-7">
                                <div className="pbox-9-img">
                                    <img className="img-fluid" src="/images/img-11.jpg" alt="promo-image" />
                                </div>
                            </div>
                            {/* Text */}
                            <div className="col-lg-5">
                                <div className="pbox-9-txt">
                                    {/* Title */}
                                    <h2 className="h2-lg">Appetizers</h2>
                                    {/* Text */}
                                    <p className="p-lg">Chicken Tenders, Mozzarella Sticks, Chicken Wings, Onion Rings, French Fries,
                                        Cheesy Garlic Bread, Mediterranean Fried Shrimps
                                    </p>
                                    {/* Price */}
                                    <div className="pbox-9-price">
                                        <p>From <span className="meat-color"> $4.20</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>	{/* END PROMO BOX-1 */}
                    {/* PROMO BOX-2 */}
                    <div id="pb-9-2" className="pbox-9 mb-40">
                        <div className="row d-flex align-items-center m-row">
                            {/* Text */}
                            <div className="col-lg-5 m-bottom">
                                <div className="pbox-9-txt">
                                    {/* Title */}
                                    <h2 className="h2-lg">Salads</h2>
                                    {/* Text */}
                                    <p className="p-lg">Antipasto Salad, Greek Salad, Caesar Salad, Tuna Pate Salad, Grilled Chicken Salad,
                                        Tossed Salad, Turket Salad Plate
                                    </p>
                                    {/* Price */}
                                    <div className="pbox-9-price">
                                        <p>From <span className="meat-color"> $12.50</span></p>
                                    </div>
                                </div>
                            </div>
                            {/* Image */}
                            <div className="col-lg-7 m-top">
                                <div className="pbox-9-img">
                                    <img className="img-fluid" src="/images/img-12.jpg" alt="promo-image" />
                                </div>
                            </div>
                        </div>
                    </div>	{/* END PROMO BOX-2 */}
                    {/* PROMO BOX-3 */}
                    <div id="pb-9-3" className="pbox-9 last-box">
                        <div className="row d-flex align-items-center">
                            {/* Image */}
                            <div className="col-lg-7">
                                <div className="pbox-9-img">
                                    <img className="img-fluid" src="/images/img-13.jpg" alt="promo-image" />
                                </div>
                            </div>
                            {/* Text */}
                            <div className="col-lg-5">
                                <div className="pbox-9-txt">
                                    {/* Title */}
                                    <h2 className="h2-lg">Pastas</h2>
                                    {/* Text */}
                                    <p className="p-lg">Marinara Meat Sause, Meatballs, Sausage, Meat Lovers, Grilled Mushrooms, Grilled
                                        Chicken Parmesan, Eggplant Parmesan</p>
                                    {/* Price */}
                                    <div className="pbox-9-price">
                                        <p>From <span className="meat-color"> $10.49</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>	{/* END CONTENT BOX-3 */}
                </div>	   {/* End container */}
            </section>
        </>
    )
}
