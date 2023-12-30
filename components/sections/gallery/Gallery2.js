import Link from 'next/link';
import { useState } from "react";
import Lightbox from 'react-18-image-lightbox';
import 'react-18-image-lightbox/style.css';

const images = [
    {
        id: 1,
        url: '/images/gallery/img-01.jpg',
        title: 'Image 1',
        description: 'This is the first image',
    },
    {
        id: 2,
        url: '/images/gallery/img-02.jpg',
        title: 'Image 2',
        description: 'This is the second image',
    },
    {
        id: 3,
        url: '/images/gallery/img-03.jpg',
        title: 'Image 3',
        description: 'This is the third image',
    },
    {
        id: 4,
        url: '/images/gallery/img-04.jpg',
        title: 'Image 1',
        description: 'This is the first image',
    },
    {
        id: 5,
        url: '/images/gallery/img-05.jpg',
        title: 'Image 2',
        description: 'This is the second image',
    },
    {
        id: 6,
        url: '/images/gallery/img-06.jpg',
        title: 'Image 3',
        description: 'This is the third image',
    },
    {
        id: 7,
        url: '/images/gallery/img-07.jpg',
        title: 'Image 1',
        description: 'This is the first image',
    },
    {
        id: 8,
        url: '/images/gallery/img-08.jpg',
        title: 'Image 2',
        description: 'This is the second image',
    }
];

export default function Gallery2({ helperCls }) {

    const [isOpen, setIsOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);

    const openLightbox = (index) => {
        setPhotoIndex(index);
        setIsOpen(true);
    };

    const closeLightbox = () => {
        setIsOpen(false);
    };

    return (
        <>
            <section id="gallery-2" className={`gallery-section division ${helperCls ? helperCls : ""}`}>
                <div className="container">
                    {/* SECTION TITLE */}
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <div className="section-title mb-60 text-center">
                                {/* Title 	*/}
                                <h2 className="h2-xl red-color">Image Gallery</h2>
                                {/* Text */}
                                <p className="p-xl">Aliquam a augue suscipit, luctus neque purus ipsum neque undo dolor
                                    primis libero tempus, blandit a cursus varius magna
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* IMAGES HOLDER */}
                    <div className="row">
                        {images.map((image, index) => (
                            <div className="col-sm-6 col-lg-3">
                                <div className="gallery-img">
                                    <a className="image-link" onClick={() => openLightbox(index)}>
                                        <div className="hover-overlay">
                                            <img className="img-fluid" src={image.url} alt="gallery-image" />
                                            <div className="item-overlay" />
                                            {/* Image Meta */}
                                            <div className="img-meta white-color">
                                                <h5 className="h5-xs">Classic California</h5>
                                                <div className="txt-block-rating">
                                                    <div className="stars-rating">
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
                                        </div>
                                    </a>
                                </div>
                            </div>
                        ))}
                        {isOpen && (
                            <Lightbox
                                mainSrc={images[photoIndex].url}
                                nextSrc={images[(photoIndex + 1) % images.length].url}
                                prevSrc={images[(photoIndex + images.length - 1) % images.length].url}
                                onCloseRequest={closeLightbox}
                                onMovePrevRequest={() => setPhotoIndex((photoIndex + images.length - 1) % images.length)}
                                onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)}
                                // imageTitle={images[photoIndex].title}
                                // imageCaption={images[photoIndex].description}
                                className="abc"
                            />
                        )}
                    </div>	{/* END IMAGES HOLDER */}
                </div>	   {/* End container */}
            </section>
        </>
    )
}
