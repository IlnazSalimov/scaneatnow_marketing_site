import Link from 'next/link';
import { useState } from "react";
import Lightbox from 'react-18-image-lightbox';
import 'react-18-image-lightbox/style.css';

const images = [
    {
        id: 1,
        url: '/images/menu/burger-11.jpg',
        title: 'Image 1',
        description: 'This is the first image',
    },
    {
        id: 2,
        url: '/images/menu/burger-12.jpg',
        title: 'Image 2',
        description: 'This is the second image',
    },
    {
        id: 3,
        url: '/images/menu/burger-13.jpg',
        title: 'Image 3',
        description: 'This is the third image',
    },
    {
        id: 4,
        url: '/images/menu/burger-14.jpg',
        title: 'Image 1',
        description: 'This is the first image',
    },
    {
        id: 5,
        url: '/images/menu/burger-15.jpg',
        title: 'Image 2',
        description: 'This is the second image',
    },
    {
        id: 6,
        url: '/images/menu/burger-16.jpg',
        title: 'Image 3',
        description: 'This is the third image',
    },
    {
        id: 7,
        url: '/images/menu/burger-17.jpg',
        title: 'Image 1',
        description: 'This is the first image',
    },
    {
        id: 8,
        url: '/images/menu/burger-18.jpg',
        title: 'Image 2',
        description: 'This is the second image',
    }
];
export default function Menu6({helperCls}) {

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
            <section id="menu-6" className={`wide-70 menu-section division ${helperCls ? helperCls : ""}`}>
                <div className="container">
                    {/* SECTION TITLE */}
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <div className="section-title mb-60 text-center">
                                {/* Title 	*/}
                                <h2 className="h2-xl red-color">Explore Our Menu</h2>
                                {/* Text */}
                                <p className="p-xl">Aliquam a augue suscipit, luctus neque purus ipsum neque undo dolor
                                    primis libero tempus, blandit a cursus varius magna
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">

                        {images.map((image, index) => (
                            <div className="col-sm-6 col-lg-3" key={index}>
                                <div className="menu-6-item bg-white">
                                    {/* IMAGE */}
                                    <div className="menu-6-img rel">
                                        <div className="hover-overlay">
                                            {/* Image */}
                                            <img className="img-fluid" src={image.url} alt="menu-image" />
                                            {/* Item Code */}
                                            <span className="item-code bg-tra-dark">Code: 0850</span>
                                            {/* Zoom Icon */}
                                            <div className="menu-img-zoom ico-25">
                                                <a onClick={() => openLightbox(index)} className="image-link">
                                                    <span className="flaticon-zoom" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* TEXT */}
                                    <div className="menu-6-txt rel">
                                        {/* Rating */}
                                        <div className="item-rating">
                                            <div className="stars-rating stars-lg">
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star-half-alt" />
                                            </div>
                                        </div>
                                        {/* Like Icon */}
                                        <div className="like-ico ico-25">
                                            <Link href="#"><span className="flaticon-heart" /></Link>
                                        </div>
                                        {/* Title */}
                                        <h5 className="h5-sm coffee-color">Crispy Chicken</h5>
                                        {/* Description */}
                                        <p className="grey-color">Chicken breast, chilli sauce, tomatoes, pickles, coleslaw</p>
                                        {/* Price */}
                                        <div className="menu-6-price bg-coffee">
                                            <h5 className="h5-xs yellow-color">$8.50</h5>
                                        </div>
                                        {/* Add To Cart */}
                                        <div className="add-to-cart bg-yellow ico-10">
                                            <Link href="/product-single"><span className="flaticon-shopping-bag" /> Add to Cart</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
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
                </div>	   {/* End container */}
            </section>
        </>
    )
}
