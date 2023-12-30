import Layout from "@/components/layout/Layout";
import Banner3 from "@/components/sections/banner/Banner3";
import Link from "next/link";
export default function Home() {
    return (
        <>
            <Layout
                pageId={"cart-page"}
                activePage={"Shopping Cart"}
                pageTitle={"Shopping Cart"}
                headerStyle={1}
                footerStyle={1}
            >

                <section id="cart-1" className="wide-100 cart-page division">
                    <div className="container">
                        {/* CART TABLE */}
                        <div className="row">
                            <div className="col-md-12">
                                <div className="cart-table mb-70">
                                    <table id="myTable">
                                        <thead>
                                            <tr>
                                                <th scope="col">Product</th>
                                                <th scope="col">Price</th>
                                                <th scope="col">Quantity</th>
                                                <th scope="col">Total</th>
                                                <th scope="col">Delete</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {/* CART ITEM #1 */}
                                            <tr>
                                                <td data-label="Product" className="product-name">
                                                    {/* Preview */}
                                                    <div className="cart-product-img"><img src="/images/menu/burger-07.png" alt="cart-preview" /></div>
                                                    {/* Description */}
                                                    <div className="cart-product-desc">
                                                        <h5 className="h5-sm">Smokey House Burger</h5>
                                                        <p className="p-sm">Magna donec and ipsum gravida</p>
                                                    </div>
                                                </td>
                                                <td data-label="Price" className="product-price"><h5 className="h5-md">$8.95</h5></td>
                                                <td data-label="Quantity" className="product-qty">
                                                    <input className="qty" type="number" min={1} max={20} defaultValue={1} />
                                                </td>
                                                <td data-label="Total" className="product-price-total"><h5 className="h5-md">$8.95</h5></td>
                                                <td data-label="Delete" className="td-trash"><i className="far fa-trash-alt" /></td>
                                            </tr>
                                            {/* CART ITEM #2 */}
                                            <tr className="last-tr">
                                                <td data-label="Product" className="product-name">
                                                    {/* Preview */}
                                                    <div className="cart-product-img"><img src="/images/menu/pizza-04.png" alt="cart-preview" /></div>
                                                    {/* Description */}
                                                    <div className="cart-product-desc">
                                                        <h5 className="h5-sm">BBQ Chicken Pizza</h5>
                                                        <p className="p-sm">Magna donec and ipsum gravida</p>
                                                    </div>
                                                </td>
                                                <td data-label="Price" className="product-price"><h5 className="h5-md">$27.00</h5></td>
                                                <td data-label="Quantity" className="product-qty">
                                                    <input className="qty" type="number" min={1} max={20} defaultValue={1} />
                                                </td>
                                                <td data-label="Total" className="product-price-total"><h5 className="h5-md">$27.00</h5></td>
                                                <td data-label="Delete" className="td-trash"><i className="far fa-trash-alt" /></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>	{/* END CART TABLE */}
                        {/* CART CHECKOUT */}
                        <div className="row">
                            {/* DISCOUNT COUPON */}
                            <div className="col-lg-8">
                                <div className="discount-coupon row pt-15">
                                    {/* Form */}
                                    <div className="col-md-8 col-lg-7">
                                        <form className="discount-form">
                                            <div className="input-group">
                                                <input type="text" className="form-control" placeholder="Coupon Code" id="discount-code" />
                                                <span className="input-group-btn">
                                                    <button type="submit" className="btn btn-salmon tra-salmon-hover">Apply Coupon</button>
                                                </span>
                                            </div>
                                        </form>
                                    </div>
                                    {/* Button */}
                                    <div className="col-md-4 col-lg-5 text-right">
                                        <a onclick="window.location.reload()" className="btn btn-md btn-salmon tra-salmon-hover">Update Cart</a>
                                    </div>
                                </div>
                            </div>
                            {/* CHECKOUT */}
                            <div className="col-lg-4">
                                <div className="cart-checkout bg-lightgrey">
                                    {/* Title */}
                                    <h5 className="h5-lg">Cart Total</h5>
                                    {/* Table */}
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td>Subtotal</td>
                                                <td> </td>
                                                <td className="text-right">$35.95</td>
                                            </tr>
                                            <tr className="last-tr">
                                                <td>Total</td>
                                                <td> </td>
                                                <td className="text-right">$35.95</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    {/* Button */}
                                    <Link href="#" className="btn btn-md btn-salmon tra-salmon-hover">Proceed To Checkout</Link>
                                </div>
                            </div>	{/* END CHECKOUT */}
                        </div>	  {/* END CART CHECKOUT */}
                    </div>	   {/* End container */}
                </section>

                <Banner3 helperCls="bg-yellow" />

            </Layout>
        </>
    )
}