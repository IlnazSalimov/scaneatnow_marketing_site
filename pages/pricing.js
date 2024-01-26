import Layout from "@/components/layout/Layout";
import Banner3 from "@/components/sections/banner/Banner3";
import Link from "next/link";


export default function Home() {
    return (
        <>
            <Layout
                pageId={"cart-page"}
                activePage={"Pricing"}
                pageTitle={"Pricing"}
                headerStyle={1}
                footerStyle={1}
            >

<section id="cart-1" className="wide-100 cart-page division">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="cart-table mb-70">
                                    <table id="myTable" style={{ width: '100%', tableLayout: 'fixed' }}>
                                        <thead>
                                            <tr>
                                                <th scope="col" style={{ fontSize: '26px', fontWeight: 'bold', textAlign: 'left', borderBottom: '2px solid #ccc' }}>Option</th>
                                                <th scope="col" style={{ fontSize: '26px', fontWeight: 'bold', textAlign: 'left', borderBottom: '2px solid #ccc' }}>Monthly fee</th>
                                                <th scope="col" style={{ fontSize: '26px', fontWeight: 'bold', textAlign: 'left', borderBottom: '2px solid #ccc' }}>Comments</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td style={{ fontSize: '25px', textAlign: 'left', padding: '15px' }}>ScanEatNow monthly subscription</td>
                                                <td style={{ fontSize: '25px', fontWeight: 'bold', textAlign: 'left', padding: '15px' }}>45 EUR*</td>
                                                <td style={{ fontSize: '25px', textAlign: 'left', padding: '15px' }}>charged every month</td>
                                            </tr>
                                            <tr>
                                                <td style={{ fontSize: '25px', textAlign: 'left', padding: '15px' }}>ScanEatNow yearly subscription</td>
                                                <td style={{ fontSize: '25px', fontWeight: 'bold', textAlign: 'left', padding: '15px' }}>30 EUR*</td>
                                                <td style={{ fontSize: '25px', textAlign: 'left', padding: '15px' }}>360 EUR charged yearly</td>
                                            </tr>
                                            <tr>
                                                <td style={{ fontSize: '25px', textAlign: 'left', padding: '15px' }}>Integrate ScanEatNow into your existing software</td>
                                                <td style={{ fontSize: '25px', fontWeight: 'bold', textAlign: 'left', padding: '15px' }}>Contact us</td>
                                                <td style={{ fontSize: '25px', textAlign: 'left', padding: '15px' }}>Example: Integration with your POS-system, etc.</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <p style={{ fontSize: '20px' }}>*We charge per location. For instance, if your restaurant operates in two separate geographical locations, multiply the monthly fee by 2</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}