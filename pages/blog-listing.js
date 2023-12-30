import Layout from "@/components/layout/Layout";
import Newsletter1 from "@/components/sections/newsletter/Newsletter1";
import Link from "next/link";
export default function Home() {
    return (
        <>
            <Layout
                pageId={"blog-page"}
                activePage={"Our Blog"}
                pageTitle={"Blog Listing"}
                headerStyle={1}
                footerStyle={1}
            >




                {/* BLOG POSTS LISTING
			============================================= */}
                <section id="blog-listing" className="wide-60 blog-page-section division">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-10 offset-xl-1">
                                {/* BLOG POST #1 */}
                                <div className="blog-post">
                                    <div className="row">
                                        {/* BLOG POST IMAGE */}
                                        <div className="col-lg-8 blog-post-img">
                                            <div className="hover-overlay">
                                                <img className="img-fluid" src="/images/blog/img-08.jpg" alt="blog-post-image" />
                                            </div>
                                        </div>
                                        {/* BLOG POST TEXT */}
                                        <div className="col-lg-4 blog-post-txt">
                                            {/* Post Link */}
                                            <h4 className="h4-xs"><Link href="/single-post">Quaerat neque purus ipsum a neque dolor</Link></h4>
                                            {/* Post Text */}
                                            <p className="grey-color">
                                                Aliqum  mullam blandit tempor at sapien gravida donec ipsum justo lectus aenean magna...
                                            </p>
                                            {/* Post Meta */}
                                            <div className="blog-post-meta grey-color">
                                                <span><i className="fas fa-comment" /> 15</span>
                                                <span><i className="fas fa-heart" /> 8</span>
                                            </div>
                                        </div>	{/* END BLOG POST TEXT */}
                                    </div>   {/* End row */}
                                </div>	{/* END BLOG POST #1 */}
                                {/* BLOG POSTS CATEGORY */}
                                <h5 className="h5-xl posts-category">Latest Articles</h5>
                                {/* BLOG POSTS HOLDER */}
                                <div className="row">
                                    {/* BLOG POST #2 */}
                                    <div className="col-md-6 col-lg-4">
                                        <div id="sp-2-1" className="blog-post">
                                            {/* BLOG POST IMAGE */}
                                            <div className="blog-post-img">
                                                <div className="hover-overlay">
                                                    <img className="img-fluid" src="/images/blog/img-01.jpg" alt="blog-post-image" />
                                                </div>
                                            </div>
                                            {/* BLOG POST TITLE */}
                                            <div className="blog-post-txt">
                                                {/* Post Title */}
                                                <h5 className="h5-lg"><Link href="/single-post">Quaerat neque purus ipsum neque dolor</Link></h5>
                                                {/* Post Text */}
                                                <p className="grey-color">Quaerat neque purus ipsum neque dolor primis tempus impedit</p>
                                                {/* Post Meta */}
                                                <div className="blog-post-meta grey-color">
                                                    <span><i className="fas fa-comment" /> 3</span>
                                                    <span><i className="fas fa-heart" /> 11</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>	{/* END  BLOG POST #1 */}
                                    {/* BLOG POST #3 */}
                                    <div className="col-md-6 col-lg-4">
                                        <div id="sp-2-2" className="blog-post">
                                            {/* BLOG POST IMAGE */}
                                            <div className="blog-post-img">
                                                <div className="hover-overlay">
                                                    <img className="img-fluid" src="/images/blog/img-02.jpg" alt="blog-post-image" />
                                                </div>
                                            </div>
                                            {/* BLOG POST TEXT */}
                                            <div className="blog-post-txt">
                                                {/* Post Title */}
                                                <h5 className="h5-lg"><Link href="/single-post">Tempor blandit sapien at gravida donec ipsum</Link></h5>
                                                {/* Post Text */}
                                                <p className="grey-color">Neque dolor primis libero tempus impedit tempor sapien gravida</p>
                                                {/* Post Meta */}
                                                <div className="blog-post-meta grey-color">
                                                    <span><i className="fas fa-comment" /> 7</span>
                                                    <span><i className="fas fa-heart" /> 15</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>	{/* END  BLOG POST #2 */}
                                    {/* BLOG POST #4 */}
                                    <div className="col-md-6 col-lg-4">
                                        <div id="sp-2-3" className="blog-post">
                                            {/* BLOG POST IMAGE */}
                                            <div className="blog-post-img">
                                                <div className="hover-overlay">
                                                    <img className="img-fluid" src="/images/blog/img-03.jpg" alt="blog-post-image" />
                                                </div>
                                            </div>
                                            {/* BLOG POST TEXT */}
                                            <div className="blog-post-txt">
                                                {/* Post Title */}
                                                <h5 className="h5-lg"><Link href="/single-post">Neque dolor primis a libero tempus a tempor</Link></h5>
                                                {/* Post Text */}
                                                <p className="grey-color">Impedit tempor at donec sapien ipsum a neque dolor primis libero</p>
                                                {/* Post Meta */}
                                                <div className="blog-post-meta grey-color">
                                                    <span><i className="fas fa-comment" /> 8</span>
                                                    <span><i className="fas fa-heart" /> 13</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>	{/* END  BLOG POST #3 */}
                                </div>	{/* END BLOG POSTS HOLDER */}
                                {/* BLOG POSTS CATEGORY */}
                                <h5 className="h5-xl posts-category">Most Read Articles</h5>
                                {/* BLOG POST #5 */}
                                <div className="blog-post b-bottom">
                                    <div className="row">
                                        {/* BLOG POST IMAGE */}
                                        <div className="col-lg-8 blog-post-img">
                                            <div className="hover-overlay">
                                                <img className="img-fluid" src="/images/blog/img-09.jpg" alt="blog-post-image" />
                                            </div>
                                        </div>
                                        {/* BLOG POST TEXT */}
                                        <div className="col-lg-4 blog-post-txt">
                                            {/* Post Link */}
                                            <h4 className="h4-xs">
                                                <Link href="/single-post">At ultrice ligula tempus auctor ipsum mauris</Link>
                                            </h4>
                                            {/* Post Text */}
                                            <p className="grey-color">
                                                Aliqum  mullam blandit tempor a sapien and gravida donec at justo sapien gravida donec ipsum...
                                            </p>
                                            {/* Post Meta */}
                                            <div className="blog-post-meta grey-color">
                                                <span><i className="fas fa-comment" /> 6</span>
                                                <span><i className="fas fa-heart" /> 20</span>
                                            </div>
                                        </div>	{/* END BLOG POST TEXT */}
                                    </div>   {/* End row */}
                                </div>	{/* END BLOG POST #5 */}
                                {/* BLOG POST #6 */}
                                <div className="blog-post">
                                    <div className="row">
                                        {/* BLOG POST IMAGE */}
                                        <div className="col-lg-8 blog-post-img">
                                            <div className="hover-overlay">
                                                <img className="img-fluid" src="/images/blog/img-10.jpg" alt="blog-post-image" />
                                            </div>
                                        </div>
                                        {/* BLOG POST TEXT */}
                                        <div className="col-lg-4 blog-post-txt">
                                            {/* Post Link */}
                                            <h4 className="h4-xs">
                                                <Link href="/single-post">Donec ipsum porta justo velna vitae </Link>
                                            </h4>
                                            {/* Post Text */}
                                            <p className="grey-color">
                                                Aliqum  mullam blandit tempor a sapien and gravida donec at justo sapien gravida donec ipsum...
                                            </p>
                                            {/* Post Meta */}
                                            <div className="blog-post-meta grey-color">
                                                <span><i className="fas fa-comment" /> 13</span>
                                                <span><i className="fas fa-heart" /> 8</span>
                                            </div>
                                        </div>	{/* END BLOG POST TEXT */}
                                    </div>   {/* End row */}
                                </div>	{/* END BLOG POST #6 */}
                            </div>
                        </div>    {/* End row */}
                    </div>     {/* End container */}
                </section>	{/* END BLOG POSTS LISTING */}
                {/* PAGE PAGINATION
			============================================= */}
                <div className="bg-color-01 page-pagination division">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <nav aria-label="Page navigation">
                                    <ul className="pagination justify-content-center">
                                        <li className="page-item disabled"><Link className="page-link" href="#" tabIndex={-1}><i className="fas fa-angle-left" /></Link></li>
                                        <li className="page-item active"><Link className="page-link" href="#">1 <span className="sr-only">(current)</span></Link></li>
                                        <li className="page-item"><Link className="page-link" href="#">2</Link></li>
                                        <li className="page-item"><Link className="page-link" href="#">3</Link></li>
                                        <li className="page-item"><Link className="page-link" href="#">4</Link></li>
                                        <li className="page-item"><Link className="page-link" href="#"><i className="fas fa-angle-right" /></Link></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>  {/* End row */}
                    </div> {/* End container */}
                </div>	{/* END PAGE PAGINATION */}

                <Newsletter1 />





            </Layout>
        </>
    )
}