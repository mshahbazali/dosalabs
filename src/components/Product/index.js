import React from 'react'
import Carousel from "react-multi-carousel";

export default function index() {
    const menuItem = [
        {
            name: "STARTERS",
            icon: "sausages",
            // content: "4 oz, for those love a meal with their dip",
            item: [
                {
                    image: "P26",
                    name: "Austin Anarkali",
                    content: "Dhokla is a supremely healthy and tasty snack made of chickpea batter",
                    price: '7',
                    slug: "austin-anarkali"
                },
                {
                    image: "P24",
                    name: "Dosa Taco",
                    content: "Topped with soy keema and cheese",
                    price: '9',
                    slug: "dosa-taco"
                },
                {
                    image: "P23",
                    name: "Samosa YA! (2)",
                    content: "Singara is fried pastry with a savory filling of potatoes onions and peas",
                    price: '7',
                    slug: "samosa"
                },
            ]
        },
        {
            name: "DOSAS",
            icon: "dosa",
            content: "Light, crispy crepes-made of rice and lentils – dairy free, gluten - free and delicious - served with two sauces and sambar chowder",
            item: [
                {
                    image: "p5",
                    name: "Must-Have Masala",
                    content: "Potato mix seasoned with mustard seeds",
                    price: '12',
                    slug: "must-have-masala"
                },
                {
                    image: "p6",
                    name: "Easter Egg",
                    content: "Crispy dosa topped with 24K edible gold",
                    price: '12',
                    slug: "easter-egg"
                },
                {
                    image: "p7",
                    name: "Deepika Padukone",
                    content: "Topped with fiery hot ghost chilli and stuffed with our potato mix",
                    price: '12',
                    slug: "must-have-masala"
                },
                {
                    image: "p8",
                    name: "Cheese in Domain",
                    content: "Cheese on dosa",
                    price: '12',
                    slug: "cheese-in-domain"
                },
                {
                    image: "p10",
                    name: "Austin to Mars (Kids Special)",
                    content: "Crepe made of rice and lentils topped with chocolate",
                    price: '12',
                    slug: "austin-to-mars"
                }
            ]
        },
        {
            name: "ANTI-DOSAS",
            icon: "antidosas",
            // content: "4 oz, for those love a meal with their dip",
            item: [
                {
                    image: "p5",
                    name: "Biriyani made for Domain",
                    content: "Aromatic savory chicken and rice dish",
                    price: '14',
                    slug: "biriyani-made-for-domain"
                },
                {
                    image: "p6",
                    name: "Genghis Khan Tikka Masala",
                    content: "Tender boneless chicken breast served in a creamy tomato sauce",
                    price: '14',
                    slug: "genghis-khan-tikka-masala"
                },
                {
                    image: "p7",
                    name: "Lamb curry",
                    content: "Lamb cubes cooked with coconut flakes, coconut milk and herbs",
                    price: '15',
                    slug: "lamb-curry"
                },
                {
                    image: "p1",
                    name: "Cuddly Idli Sambar",
                    content: "Steamed savory rice and lentil cakes served with sambar and chutney",
                    price: '6',
                    slug: "cuddly-idli-sambar"
                },
                {
                    image: "p2",
                    name: "Chia Chia Idly",
                    content: "A chia superfood variant of the cuddly idli with special tomato sauce",
                    price: '8',
                    slug: "chia-chia-idly"
                },
            ]
        },
        {
            name: "DRINKS",
            icon: "h30",
            // content: "Our select favorite alternatives",
            item: [
                {
                    image: "p12",
                    name: "Hari’s Special Chai",
                    content: "Tea with milk flavored with a mixture of aromatic Indian  and herbs",
                    price: '3',
                    slug: "haris-special-chai"
                },
                {
                    image: "p13",
                    name: "Chennai Coffee",
                    content: "Chicory-laced coffee poured into furiously hot milk",
                    price: '3',
                    slug: "chennai-coffee"
                },
                {
                    image: "p13",
                    name: "Regular Ole Drinks",
                    content: "Coke, diet coke, orange,sprite, dr. pepper,bottled water",
                    price: '3',
                    slug: "regular-ole-drinks"
                },
            ]
        },
        {
            name: "H30 SHOTS",
            icon: "drinks",
            // content: "Fluids – quench and electrolytic",
            item: [
                {
                    image: "p12",
                    name: "Zingy Turmeric",
                    content: "Turmeric, lemon, ginger",
                    price: '2',
                    slug: 'zingy-turmeric'
                },
                {
                    image: "p13",
                    name: "Fun Fenugreek",
                    content: "Fenugreek seeds soaked in water",
                    price: '2',
                    slug: 'fun-fenugreek'
                }
            ]
        },
        {
            name: "Sides/Deserts",
            icon: "drinks",
            // content: "Fluids – quench and electrolytic",
            item: [
                {
                    image: "p12",
                    name: "Extra Sambar",
                    // content: "Potato mix seasoned with mustard seeds",
                    price: '2',
                    slug: 'extra-sambar'
                },
                {
                    image: "p13",
                    name: "Mango Chutney",
                    // content: "Potato mix seasoned with mustard seeds",
                    price: '2',
                    slug: 'mango-chutney'
                },
                {
                    image: "p13",
                    name: "Naan",
                    // content: "Potato mix seasoned with mustard seeds",
                    price: '3',
                    slug: 'naan'
                },
                {
                    image: "p20",
                    name: "Danish Pie",
                    // content: "Potato mix seasoned with mustard seeds",
                    price: '5',
                    slug: 'danish-pie'
                },
                {
                    image: "p21",
                    name: "Midnight cookie",
                    // content: "Potato mix seasoned with mustard seeds",
                    price: '5',
                    slug: 'midnightcookie'
                },
            ]
        },

    ]
    const url = window.location.href.lastIndexOf("/")
    const slug = window.location.href.slice(url + 1)
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
    const data = menuItem.map((e) => e.item.find((e) => e.slug == slug))
    const currentItem = data.find((e) => e !== undefined)
    return (
        <div className='productContainer'>
            <div className='productTopContainer'>
                <h2 className='productName'>{currentItem?.name}</h2>
                <p className='productContent'>{currentItem?.content}</p>
            </div>
            <div className='productMetaContainer'>
                <div className='productMetaLeftContainer'>
                    {
                        currentItem?.image ?
                            <img src={require(`../../assets/${currentItem?.image}.png`)} alt="" className='primaryImage' />
                            :
                            null
                    }
                    <div className='imagesSlider'>
                        {
                            currentItem?.image ?
                                <Carousel responsive={responsive}>
                                    <img src={require(`../../assets/${currentItem?.image}.png`)} alt="" className='imagePlaceHolder' />
                                    <img src={require(`../../assets/${currentItem?.image}.png`)} alt="" className='imagePlaceHolder' />
                                    <img src={require(`../../assets/${currentItem?.image}.png`)} alt="" className='imagePlaceHolder' />
                                    <img src={require(`../../assets/${currentItem?.image}.png`)} alt="" className='imagePlaceHolder' />
                                </Carousel>
                                : null
                        }

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
                        <span className='productPrice'>{currentItem?.price}</span>
                    </div>
                    <h2 className='productDesHeading'>Description</h2>
                    <p className='productDesContent'>{currentItem?.content}</p>
                </div>
            </div>
            <div></div>
        </div>
    )
}
