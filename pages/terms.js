import Layout from "@/components/layout/Layout";
import Newsletter1 from "@/components/sections/newsletter/Newsletter1";
import Link from "next/link";
export default function Home() {
    return (
        <>
            <Layout
                pageId={"terms-page"}
                activePage={"Terms & Privacy"}
                pageTitle={"Terms & Privacy"}
                headerStyle={1}
                footerStyle={1}
            >

                {/* TERMS & PRIVACY
			============================================= */}
                <section id="terms-1" className="wide-60 terms-section division">
                    <div className="container">
                        <div className="row">
                            {/* TERMS CONTENT */}
                            <div className="col-lg-10 offset-lg-1">
                                {/* TERMS BOX */}
                                <div className="terms-box">
                                    {/* Text */}
                                    <p>Donec sodales, nibh vel (the <span className="txt-700">"Terms"</span>) tristique aliquet, nisi libero
                                        suscipit diam, sed tempus ante nulla ut purus. Donec dolor magna, suscipit in magna dignissim, porttitor
                                        hendrerit diam.  Nunc gravida ultrices felis eget faucibus. Aliquet lorem purus, quis mollis nisi laoreet at
                                        vitae. Mauris consequat tortor. Duis fermentum a massa in convallis ultrices interdum.
                                    </p>
                                    {/* Text */}
                                    <p>Sagittis congue augue egestas volutpat egestas magna suscipit egestas magna ipsum vitae purus efficitur ipsum
                                        primis in cubilia laoreet augue egestas luctus donec diam. Curabitur undo dapibus libero. Quisque eu tristique
                                        neque blandit tristique justo aliquam. Aliquam <Link href="#">molestie nunc sapien justo</Link>, aliquet non molestie
                                        sed, venenatis nec purus. Aliquam eget lacinia elit. Vestibulum tincidunt tincidunt massa, et porttitor justo suscipit in magna dignissim
                                    </p>
                                </div>	{/* END TERMS BOX */}
                                {/* TERMS BOX */}
                                <div className="terms-box">
                                    {/* Title */}
                                    <h5 className="h5-lg">Processing of your data</h5>
                                    {/* Text */}
                                    <p>Donec sodales, nibh vel tristique aliquet, nisi libero suscipit diam, sed tempus ante nulla ut purus. Donec
                                        dolor magna aliquet suscipit in magna dignissim, porttitor hendrerit. Nunc gravida ultrices a felis eget
                                        faucibus. Praesent lorem purus, quis mollis nisi laoreet vitae. Mauris nec consequat tortor
                                    </p>
                                    {/* Text */}
                                    <p>Aliqum  mullam blandit tempor sapien gravida donec ipsum, at porta justo. Velna vitae auctor congue magna nihil
                                        impedit ligula risus. Mauris donec ociis et magnis sapien sagittis sapien sem congue tempor gravida donec enim
                                        ipsum porta justo integer odio velna a purus efficitur ipsum primis in cubilia laoreet augue egestas luctus donec purus and blandit sodales
                                    </p>
                                    {/* List */}
                                    <ul className="txt-list">
                                        <li className="list-item">
                                            <p><span className="txt-500">Email address</span> euismod purus pretium purus pretium ligula rutrum
                                                tempor mullam blandit tempor sapien and gravida donec ipsum at justo turpis urna augue, viverra
                                                a augue eget
                                            </p>
                                        </li>
                                        <li className="list-item">
                                            <p><span className="txt-500">Payment data</span> vitae auctor a congue magna tempor sapien
                                                gravida laoreet turpis urna augue, viverra a augue eget, dictum tempor diam pulvinar
                                                consectetur purus efficitur ipsum primis in cubilia laoreet augue donec, dictum tempor
                                            </p>
                                        </li>
                                    </ul>
                                    {/* Text */}
                                    <p>Aliqum  mullam blandit tempor sapien gravida donec ipsum, at porta justo. Velna vitae auctor congue magna nihil
                                        impedit ligula risus. Mauris donec ociis et magnis sapien sagittis sapien sem congue tempor gravida donec enim
                                        ipsum porta justo integer odio velna a purus efficitur ipsum primis in cubilia laoreet augue egestas luctus donec purus and blandit sodales
                                    </p>
                                </div>	{/* END TERMS BOX */}
                                {/* TERMS BOX */}
                                <div className="terms-box">
                                    {/* Title */}
                                    <h5 className="h5-lg">Collection of information</h5>
                                    {/* Text */}
                                    <p>In at mauris vel nisl convallis porta at vitae dui. Nam lacus ligula, vulputate mullam molestie bibendum quis,
                                        aliquet massa elementum. Vestibulum ut sagittis massa lorem fusce cursus est. Fusce non nulla vitae massa placerat vulputate vel purus. Aliqum blandit tempor undo sapien pulvinar consectetur  nibh, vel imperdiet dui varius viverra.
                                    </p>
                                </div>	{/* END TERMS BOX */}
                                {/* TERMS BOX #3 */}
                                <div className="terms-box">
                                    {/* Title */}
                                    <h5 className="h5-lg">Authorized user accounts and account security</h5>
                                    {/* Text */}
                                    <p>Suscipit in magna dignissim, porttitor hendrerit diam. Nunc gravida ultrices felis eget faucibus. Praesent
                                        aliquet lorem purus, quis mollis nisi laoreet vitae. <Link href="#"> Mauris nec consequat tortor.</Link> Duis fermentum
                                        a massa in convallis quisque eu interdum augue.
                                    </p>
                                    {/* Text */}
                                    <p>In at mauris vel nisl convallis porta at vitae dui. Nam lacus ligula, vulputate mullam molestie bibendum quis,
                                        aliquet massa elementum. Vestibulum ut sagittis massa lorem fusce cursus est. Fusce non nulla vitae massa placerat vulputate vel purus. Aliqum blandit tempor undo
                                    </p>
                                </div>	{/* END TERMS BOX */}
                                {/* TERMS BOX */}
                                <div className="terms-box">
                                    {/* Title */}
                                    <h5 className="h5-lg">Prohibited conduct and content</h5>
                                    {/* Text */}
                                    <p>Sagittis congue augue egestas volutpat egestas magna suscipit egestas magna ipsum vitae purus  efficitur ipsum
                                        primis in cubilia laoreet augue egestas luctus donec diam. Curabiturac dapibus libero. Quisque eu tristique neque. Phasellus blandit tristique justo ut aliquam. Aliquam vitae <Link href="#">molestie nunc sapien justo</Link>, aliquet non molestie sed, venenatis nec purus. Aliquam eget lacinia elit. Vestibulum tincidunt tincidunt massa, et porttitor justo.
                                    </p>
                                    {/* List */}
                                    <ul className="txt-list">
                                        <li className="list-item">
                                            <p><span className="txt-500">Quaerat sodales sapien undo euismod purus blandit velna</span>
                                                vitae auctor a congue magna tempor sapien eget gravida laoreet turpis urna augue,
                                                viverra a augue eget, dictum tempor diam pulvinar consectetur purus efficitur ipsum
                                                primis in cubilia laoreet augue donec
                                            </p>
                                        </li>
                                        <li className="list-item">
                                            <p><span className="txt-500">Nemo ipsam egestas volute turpis dolores</span> ut aliquam
                                                quaerat sodales sapien congue augue egestas volutpat egestas magna suscipit egestas
                                                magna ipsum vitae purus efficitur ipsum primis in cubilia undo pretium a purus
                                                pretium ligula
                                            </p>
                                        </li>
                                    </ul>
                                </div>	{/* END TERMS BOX */}
                                {/* TERMS BOX #5 */}
                                <div className="terms-box">
                                    {/* Title */}
                                    <h5 className="h5-lg">Your responsibilities</h5>
                                    {/* Text */}
                                    <p>Aliqum mullam blandit tempor sapien gravida donec ipsum, at porta justo. Velna vitae auctor congue magna nihil
                                        impedit ligula risus. Mauris donec ociis et magnis sapien sagittis sapien sem congue tempor gravida donec enim
                                        ipsum porta justo integer odio velna a purus efficitur ipsum primis in cubilia laoreet augue egestas luctus donec purus and blandit sodales
                                    </p>
                                    {/* List */}
                                    <ul className="simple-list">
                                        <li className="list-item">
                                            <p>Donec dolor magna, suscipit in magna dignissim, porttitor hendrerit diam. Nunc gravida ultrices
                                                felis eget faucibus. Praesent aliquet tempus, blandit posuere ligula varius congue cursus
                                            </p>
                                        </li>
                                        <li className="list-item">
                                            <p>Aliquam varius neque commodo purus vulputate pharetra bibendum in ante ornare metus</p></li>
                                        <li className="list-item">
                                            <p>Morbi dui lectus, lobortis sit amet felis nec, suscipit imperdiet sapien semper ultrices</p></li>
                                        <li className="list-item">
                                            <p>Nulla tincidunt volutpat tincidunt. Pellentesque habitant morbi tristique senectus et netus et
                                                malesuada famesa augue suscipit, luctus neque purus ipsum neque dolor primis
                                            </p>
                                        </li>
                                    </ul>
                                </div>	{/* END TERMS BOX */}
                                {/* TERMS BOX */}
                                <div className="terms-box">
                                    {/* Title */}
                                    <h5 className="h5-lg">Availability of services</h5>
                                    {/* List */}
                                    <ul className="txt-list">
                                        <li className="list-item">
                                            <p><span className="txt-500">Nemo ipsam egestas volute turpis dolores</span> ut aliquam quaerat sodales
                                                sapien congue augue egestas volutpat egestas magna suscipit egestas magna ipsum vitae purus efficitur ipsum primis in cubilia undo pretium a purus pretium ligula
                                            </p>
                                        </li>
                                        <li className="list-item">
                                            <p><span className="txt-500">Quaerat sodales sapien undo euismod purus blandit velna</span> vitae auctor
                                                a congue magna tempor sapien eget gravida laoreet turpis urna augue, viverra a augue eget, dictum
                                                tempor diam pulvinar consectetur purus efficitur ipsum primis in cubilia laoreet augue donec
                                            </p>
                                        </li>
                                        <li className="list-item">
                                            <p><span className="txt-500">Fringilla risus nec, luctus mauris orci auctor</span> euismod purus pretium
                                                purus pretium ligula  rutrum tempor mullam blandit tempor sapien and gravida donec ipsum at justo
                                                quis vehicula magna luctus tempor. Quisque laoreet turpis urna augue, viverra a augue eget, dictum
                                                tempor diam. Sed pulvinar consectetur and placerat imperdiet dui varius viverra
                                            </p>
                                        </li>
                                    </ul>
                                </div>	{/* END TERMS BOX */}
                                {/* TERMS BOX */}
                                <div className="terms-box">
                                    {/* Title */}
                                    <h5 className="h5-lg">Term for storing personal data</h5>
                                    {/* Text */}
                                    <p>Donec sodales, nibh vel tristique aliquet, nisi libero suscipit diam, sed tempus ante nulla ut purus. Donec dolor
                                        magna, suscipit in magna dignissim, porttitor hendrerit diam. Nunc gravida
                                    </p>
                                    {/* Text */}
                                    <p>Aliqum  mullam blandit tempor sapien gravida donec ipsum, at porta justo. Velna vitae auctor congue magna nihil
                                        impedit ligula risus. Mauris donec ociis et magnis sapien sagittis sapien sem congue tempor gravida donec enim
                                        ipsum porta justo integer odio velna a purus efficitur ipsum primis in cubilia laoreet augue egestas luctus donec purus and blandit sodales
                                    </p>
                                </div>	{/* END TERMS BOX */}
                                {/* TERMS BOX */}
                                <div className="terms-box">
                                    {/* Title */}
                                    <h5 className="h5-lg">Warranty limitations</h5>
                                    {/* Text */}
                                    <p>Ut non mauris libero. Sed consequat posuere nunc, eu porttitor neque dignissim nec. Donec bibendum sodales elit
                                        blandit. Suspendisse at finibus metus. Integer nulla quam, pulvinar fermentum commodo nec, pulvinar sed nisi. Sed augue turpis, mollis a vehicula ornare, dapibus
                                    </p>
                                    {/* Text */}
                                    <p>Aliqum  mullam blandit tempor sapien gravida donec ipsum, at porta justo. Velna vitae auctor congue magna nihil
                                        impedit ligula risus. Mauris donec ociis et magnis sapien sagittis sapien sem congue tempor gravida donec enim
                                        ipsum porta justo integer odio velna a purus efficitur ipsum primis in cubilia laoreet augue egestas luctus donec purus and blandit sodales
                                    </p>
                                </div>	{/* END TERMS BOX */}
                                {/* TERMS BOX #9 */}
                                <div className="terms-box">
                                    {/* Title */}
                                    <h5 className="h5-lg">Notices</h5>
                                    {/* Text */}
                                    <p>Maecenas gravida porttitor nunc, quis vehicula magna luctus tempor. Quisque laoreet turpis urna augue, viverra
                                        a augue eget, dictum tempor diam. Sed pulvinar consectetur and placerat imperdiet dui varius viverra. Pellentesque
                                        ac massa lorem fusce cursus aliquet elementum
                                    </p>
                                    {/* List */}
                                    <ul className="txt-list">
                                        <li className="list-item">
                                            <p><span className="txt-500">Quaerat sodales sapien undo euismod purus blandit velna</span> vitae auctor
                                                a congue magna tempor sapien eget gravida laoreet turpis urna augue, viverra a augue eget, dictum
                                                tempor diam pulvinar consectetur purus efficitur ipsum primis in cubilia laoreet augue donec
                                            </p>
                                        </li>
                                        <li className="list-item">
                                            <p><span className="txt-500">Fringilla risus nec, luctus mauris orci auctor</span> euismod purus pretium
                                                purus pretium ligula  rutrum tempor mullam blandit tempor sapien and gravida donec ipsum at justo
                                                quis vehicula magna luctus tempor. Quisque laoreet turpis urna augue, viverra a augue eget, dictum
                                                tempor diam. Sed pulvinar consectetur and placerat imperdiet dui varius viverra
                                            </p>
                                        </li>
                                    </ul>
                                </div>	{/* END TERMS BOX */}
                                {/* TERMS BOX */}
                                <div className="terms-box">
                                    {/* Title */}
                                    <h5 className="h5-lg">Third Party Beneficiary</h5>
                                    {/* Text */}
                                    <p>Aliqum mullam blandit tempor sapien gravida donec ipsum, at porta justo. Velna vitae auctor congue magna
                                        nihil impedit ligula risus. Mauris donec ociis et magnis sapien sagittis sapien sem congue tempor gravida
                                        donec enim ipsum porta justo integer odio velna a purus efficitur ipsum primis in cubilia laoreet augue egestas luctus donec purus and blandit sodales
                                    </p>
                                    {/* Text */}
                                    <p>Donec sodales, nibh vel tristique aliquet, nisi libero suscipit diam, sed tempus ante nulla ut purus. Donec
                                        dolor suscipit and magna, in magna dignissim, porttitor hendrerit diam. Nunc gravida ultrices felis. Quisque eleifend arcu ac tellus cursus, nec vehicula diam tempus. Nam ut sapien et mi congue tincidunt. Phasellus in
                                        ex neque. Aenean sed nunc sed elit facilisis
                                    </p>
                                </div>	{/* END TERMS BOX */}
                                {/* TERMS BOX */}
                                <div className="terms-box">
                                    {/* Title */}
                                    <h5 className="h5-lg">Other Terms</h5>
                                    {/* Text */}
                                    <p>Aliqum  mullam blandit tempor sapien gravida donec ipsum, at porta justo. Velna vitae auctor congue magna
                                        nihil impedit ligula risus. Mauris donec ociis et magnis sapien sagittis sapien sem congue tempor gravida donec
                                        enim ipsum porta justo integer odio velna a purus efficitur ipsum primis in cubilia laoreet augue egestas luctus donec purus and blandit sodales
                                    </p>
                                    {/* Text */}
                                    <p>Sagittis congue augue egestas volutpat egestas magna suscipit egestas magna ipsum vitae  purus efficitur ipsum
                                        primis in cubilia laoreet augue egestas luctus donec diam. Curabitur ac dapibus libero. Quisque eu tristique
                                        neque. Phasellus blandit tristique justo ut aliquam. Aliquam vitae <Link href="#">molestie nunc sapien justo</Link>, aliquet non molestie sed,  venenatis nec purus. Aliquam eget lacinia elit. Vestibulum tincidunt tincidunt massa,
                                        et porttitor
                                    </p>
                                    {/* List */}
                                    <ul className="simple-list">
                                        <li className="list-item">
                                            <p>Donec dolor magna, suscipit in magna dignissim, porttitor hendrerit diam. Nunc gravida ultrices
                                                felis faucibus. Praesent aliquet tempus, blandit posuere ligula varius congue cursus
                                            </p>
                                        </li>
                                        <li className="list-item">
                                            <p>Aliquam varius neque commodo purus vulputate pharetra bibendum in ante ornare metus</p>
                                        </li>
                                        <li className="list-item">
                                            <p>Morbi dui lectus, lobortis sit amet felis nec, suscipit imperdiet sapien semper ultrices. Nulla
                                                tincidunt volutpat at tincidunt. Habitant morbi tristique senectus et netus malesuada famesa augue
                                                suscipit, luctus neque purus ipsum neque dolor
                                            </p>
                                        </li>
                                    </ul>
                                    {/* Text */}
                                    <p>Suscipit in magna dignissim, porttitor hendrerit diam. Nunc gravida ultrices felis eget faucibus. Praesent
                                        aliquet lorem purus, quis mollis nisi laoreet vitae. <Link href="#"> Mauris nec consequat tortor</Link>
                                    </p>
                                </div>	{/* END TERMS BOX */}
                            </div>	{/* END TERMS CONTENT */}
                        </div>     {/* End row */}
                    </div>	    {/* End container */}
                </section>	 {/* END TERMS & PRIVACY */}

                <Newsletter1 />



            </Layout>
        </>
    )
}