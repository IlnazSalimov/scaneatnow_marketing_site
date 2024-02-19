import Link from "next/link";

export default function PageHero({ pageTitle, activePage, pageId }) {
    return (
        <>
            <div id={pageId} className="page-hero-section division">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <div className="hero-txt text-center white-color">
                                {/* Breadcrumb */}
                                <div id="breadcrumb">
                                    <div className="row">
                                        <div className="col">
                                            <div className="breadcrumb-nav">
                                                <nav aria-label="breadcrumb">
                                                    <ol className="breadcrumb">
                                                        <li className="breadcrumb-item"><Link href="/demo-1">Home</Link></li>
                                                        <li className="breadcrumb-item active" aria-current="page">{activePage}</li>
                                                    </ol>
                                                </nav>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Title */}
                                <h1 className="h2-xl">{pageTitle}</h1>
                            </div>
                        </div>
                    </div>	  {/* End row */}
                </div>	   {/* End container */}
            </div>
        </>
    )
}
