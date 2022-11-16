import React from 'react'
import Carousel from "react-multi-carousel";

export default function index() {
    const menuItem = [
        {
            name: "DOSAS",
            icon: "dosa",
            content: "Light, crispy crepes-made of rice and lentils – dairy free, gluten - free and delicious - served with two sauces and sambar chowder",
            item: [
                {
                    image: "p1",
                    name: "Must-Have Masala",
                    content: "Potato mix seasoned with mustard seeds",
                    price: '20',
                    slug: "must-have-masala"
                },
                {
                    image: "p2",
                    name: "Must-Have Masala",
                    content: "Potato mix seasoned with mustard seeds",
                    price: '20',
                    slug: "must-have-masala"
                },
                {
                    image: "p3",
                    name: "Must-Have Masala",
                    content: "Potato mix seasoned with mustard seeds",
                    price: '20'
                },
                {
                    image: "p4",
                    name: "Must-Have Masala",
                    content: "Potato mix seasoned with mustard seeds",
                    price: '20',
                    slug: "must-have-masala"
                },
                {
                    image: "p5",
                    name: "Must-Have Masala",
                    content: "Potato mix seasoned with mustard seeds",
                    price: '20',
                    slug: "must-have-masala"
                },
                {
                    image: "p6",
                    name: "Must-Have Masala",
                    content: "Potato mix seasoned with mustard seeds",
                    price: '20',
                    slug: "must-have-masala"
                },
            ]
        },
        {
            name: "IDLI",
            icon: "sausages",
            content: "4 oz, for those love a meal with their dip",
            item: [
                {
                    image: "p7",
                    name: "Must-Have Masala",
                    content: "Potato mix seasoned with mustard seeds",
                    price: '20'
                },
                {
                    image: "p8",
                    name: "Must-Have Masala",
                    content: "Potato mix seasoned with mustard seeds",
                    price: '20'
                },
                {
                    image: "p9",
                    name: "Must-Have Masala",
                    content: "Potato mix seasoned with mustard seeds",
                    price: '20'
                },
                {
                    image: "p10",
                    name: "Must-Have Masala",
                    content: "Potato mix seasoned with mustard seeds",
                    price: '20'
                },
                {
                    image: "p11",
                    name: "Must-Have Masala",
                    content: "Potato mix seasoned with mustard seeds",
                    price: '20'
                },
                {
                    image: "p12",
                    name: "Must-Have Masala",
                    content: "Potato mix seasoned with mustard seeds",
                    price: '20'
                },
            ]
        },
        {
            name: "ANTI-DOSAS",
            icon: "antidosas",
            content: "4 oz, for those love a meal with their dip",
            item: [
                {
                    image: "p13",
                    name: "Must-Have Masala",
                    content: "Potato mix seasoned with mustard seeds",
                    price: '20'
                },
                {
                    image: "p14",
                    name: "Must-Have Masala",
                    content: "Potato mix seasoned with mustard seeds",
                    price: '20'
                },
                {
                    image: "p15",
                    name: "Must-Have Masala",
                    content: "Potato mix seasoned with mustard seeds",
                    price: '20'
                },
                {
                    image: "p16",
                    name: "Must-Have Masala",
                    content: "Potato mix seasoned with mustard seeds",
                    price: '20'
                },
                {
                    image: "p17",
                    name: "Must-Have Masala",
                    content: "Potato mix seasoned with mustard seeds",
                    price: '20'
                },
                {
                    image: "p18",
                    name: "Must-Have Masala",
                    content: "Potato mix seasoned with mustard seeds",
                    price: '20'
                },
            ]
        },
        {
            name: "DRINKS",
            icon: "drinks",
            content: "Our select favorite alternatives",
            item: [
                {
                    image: "p21",
                    name: "Must-Have Masala",
                    content: "Potato mix seasoned with mustard seeds",
                    price: '20'
                },
                {
                    image: "p1",
                    name: "Must-Have Masala",
                    content: "Potato mix seasoned with mustard seeds",
                    price: '20'
                },
                {
                    image: "p2",
                    name: "Must-Have Masala",
                    content: "Potato mix seasoned with mustard seeds",
                    price: '20'
                },
                {
                    image: "p3",
                    name: "Must-Have Masala",
                    content: "Potato mix seasoned with mustard seeds",
                    price: '20'
                },
                {
                    image: "p4",
                    name: "Must-Have Masala",
                    content: "Potato mix seasoned with mustard seeds",
                    price: '20'
                },
                {
                    image: "p5",
                    name: "Must-Have Masala",
                    content: "Potato mix seasoned with mustard seeds",
                    price: '20'
                },
            ]
        },
        {
            name: "Sides/Deserts",
            icon: "drinks",
            content: "Fluids – quench and electrolytic",
            item: [
                {
                    image: "p6",
                    name: "Must-Have Masala",
                    content: "Potato mix seasoned with mustard seeds",
                    price: '20'
                },
                {
                    image: "p7",
                    name: "Must-Have Masala",
                    content: "Potato mix seasoned with mustard seeds",
                    price: '20'
                },
                {
                    image: "p8",
                    name: "Must-Have Masala",
                    content: "Potato mix seasoned with mustard seeds",
                    price: '20'
                },
                {
                    image: "p9",
                    name: "Must-Have Masala",
                    content: "Potato mix seasoned with mustard seeds",
                    price: '20'
                },
                {
                    image: "p10",
                    name: "Must-Have Masala",
                    content: "Potato mix seasoned with mustard seeds",
                    price: '20'
                },
                {
                    image: "p11",
                    name: "Must-Have Masala",
                    content: "Potato mix seasoned with mustard seeds",
                    price: '20'
                },
                {
                    image: "p12",
                    name: "Must-Have Masala",
                    content: "Potato mix seasoned with mustard seeds",
                    price: '20'
                },
            ]
        },

    ]
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
                    <h2 className='productDesHeading'>Easter Egg</h2>
                    <p className='productDesContent'>Rice and lentil crepe topped
                        with fluffy fried egg</p>
                    <h2 className='productDesHeading'>Ingridients</h2>
                    <p className='productDesContent'>Rice and lentil crepe topped
                        with fluffy fried egg</p>
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
