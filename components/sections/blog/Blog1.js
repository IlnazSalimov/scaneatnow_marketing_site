import Link from "next/link";

export default function Blog1({helperCls}) {
    return (
        <>
            <section id="blog-1" className={`wide-60 blog-section division ${helperCls ? helperCls : ""}`}>
                <div className="container">
                    {/* SECTION TITLE */}
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <div className="section-title mb-60 text-center">
                                {/* Title 	*/}
                                <h2 className="h2-xl red-color">Events &amp; Catering</h2>
                                {/* Text */}
                                <p className="p-xl">Aliquam a augue suscipit, luctus neque purus ipsum neque undo dolor
                                    primis libero tempus, blandit a cursus varius magna
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* BLOG POSTS HOLDER */}
                    <div className="row">
                        {/* BLOG POST #1 */}
                        <div className="col-md-6 col-lg-4">
                            <div className="blog-post">
                                {/* BLOG POST IMAGE */}
                                <div className="blog-post-img">
                                    <div className="hover-overlay">
                                        <img className="img-fluid" src="/images/blog/img-01.jpg" alt="blog-post-image" />
                                    </div>
                                </div>
                                {/* BLOG POST TITLE */}
                                <div className="blog-post-txt">
                                    {/* Post Title */}
                                    <h5 className="h5-lg coffee-color"><Link href="/single-post">Quaerat neque purus ipsum neque dolor</Link></h5>
                                    {/* Post Text */}
                                    <p className="grey-color">Quaerat neque purus ipsum neque dolor primis tempus impedit</p>
                                </div>
                            </div>
                        </div>	{/* END  BLOG POST #1 */}
                        {/* BLOG POST #2 */}
                        <div className="col-md-6 col-lg-4">
                            <div className="blog-post">
                                {/* BLOG POST IMAGE */}
                                <div className="blog-post-img">
                                    <div className="hover-overlay">
                                        <img className="img-fluid" src="/images/blog/img-02.jpg" alt="blog-post-image" />
                                    </div>
                                </div>
                                {/* BLOG POST TEXT */}
                                <div className="blog-post-txt">
                                    {/* Post Title */}
                                    <h5 className="h5-lg coffee-color"><Link href="/single-post">Tempor blandit sapien at gravida donec ipsum</Link></h5>
                                    {/* Post Text */}
                                    <p className="grey-color">Neque dolor primis libero tempus impedit tempor sapien gravida</p>
                                </div>
                            </div>
                        </div>	{/* END  BLOG POST #2 */}
                        {/* BLOG POST #3 */}
                        <div className="col-md-6 col-lg-4">
                            <div className="blog-post">
                                {/* BLOG POST IMAGE */}
                                <div className="blog-post-img">
                                    <div className="hover-overlay">
                                        <img className="img-fluid" src="/images/blog/img-03.jpg" alt="blog-post-image" />
                                    </div>
                                </div>
                                {/* BLOG POST TEXT */}
                                <div className="blog-post-txt">
                                    {/* Post Title */}
                                    <h5 className="h5-lg coffee-color"><Link href="/single-post">Neque dolor primis a libero tempus a tempor</Link></h5>
                                    {/* Post Text */}
                                    <p className="grey-color">Impedit tempor at donec sapien ipsum a neque dolor primis libero</p>
                                </div>
                            </div>
                        </div>	{/* END  BLOG POST #3 */}
                    </div>	{/* END BLOG POSTS HOLDER */}
                </div>	   {/* End container */}
            </section>
        </>
    )
}
