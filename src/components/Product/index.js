import React from 'react'
import Carousel from "react-multi-carousel";

export default function index() {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2
        }
    };
    return (
        <div className='productContainer'>
            <div className='productTopContainer'>
                <h2 className='productName'>Sausage & Dips</h2>
                <p className='productContent'>4 oz, for those love a meal with their dip</p>
            </div>
            <div className='productMetaContainer'>
                <div className='productMetaLeftContainer'>
                    <img src={require("../../assets/dosabg.jpg")} alt="" className='primaryImage' />
                    <div className='imagesSlider'>
                        <Carousel responsive={responsive}>
                            <img src={require("../../assets/dosabg.jpg")} alt="" className='imagePlaceHolder' />
                            <img src={require("../../assets/dosabg.jpg")} alt="" className='imagePlaceHolder' />
                            <img src={require("../../assets/dosabg.jpg")} alt="" className='imagePlaceHolder' />
                            <img src={require("../../assets/dosabg.jpg")} alt="" className='imagePlaceHolder' />
                        </Carousel>
                    </div>
                </div>
                <div className='productMetaRightContainer'>
                    <h2 className='productPriceHeading'>Price</h2>
                    <div className='priceMeta'>
                        <span className='dollarSign'>$</span>
                        <span className='productPrice'>12</span>
                    </div>
                    <h2 className='productDesHeading'>Description</h2>
                    <p className='productDesContent'>Rice and lentil crepe topped
                        with fluffy fried egg</p>
                </div>
            </div>
            <div></div>
        </div>
    )
}
