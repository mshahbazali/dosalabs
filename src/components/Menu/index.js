import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Index() {
    const [selectMenu, setSelectMenu] = useState(0)
    const [popUpShow, setPopupShow] = useState()
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
    return (
        <div className='menusContainer'>
            <div className='menuTitleContainer'>
                <span className='menuTitle'>OUR MENU</span>
            </div>
            <div className='menuHeadingContainer'>
                <h2 className='menuHeading'>Menu That Always Makes You Fall In Love</h2>
            </div>
            <div className='menusItemContainer'>
                {
                    menuItem.map((e, i) => {
                        return (
                            <div key={i} className={`${selectMenu == i ? 'selectedMenu' : "menusItem"} `} onClick={() => setSelectMenu(i)}>
                                <img src={require(`../../assets/${e.icon}.png`)} alt="" className='menusItemImage' />
                                <span className={`${selectMenu == i ? 'menusItemName' : "menusItemNameSelected"} `}>{e.name}</span>
                            </div>
                        )
                    })
                }
            </div>

            <div className='menusDetailContainer'>
                <h2 className='menusName'>{menuItem[selectMenu].name}</h2>
                <p className='menusContent'>{menuItem[selectMenu].content}</p>
                <div className='menusCardContainer'>
                    {
                        menuItem[selectMenu].item.map((e, i) => {
                            return (
                                <div key={i} className='menusCard' onMouseEnter={() => setPopupShow(i)} onMouseLeave={() => setPopupShow(undefined)}>
                                    <img src={require(`../../assets/${e.image}.png`)} alt="" className='menusCardImage' />
                                    <h2 className='menusCardName'>{e.name}</h2>
                                    <p className='menusCardContent'>{e.content}</p>
                                    <div className='menusCardPriceContainer'>
                                        <span className='menusCardPriceDollar'>$</span>
                                        <span className='menusCardPrice'>{e.price}</span>
                                    </div>
                                    {
                                        popUpShow == i ?
                                            < div className='popupContainer'>
                                                <img src={require("../../assets/popupbg.png")} alt="" className='popUpBg' />
                                                <div className='menuImageContainer'>
                                                    <img src={require(`../../assets/${e.image}.png`)} alt="" className="menuImage" />
                                                </div>
                                                <div className='menuContentContainer' >
                                                    <h2 className='menuName'>{e.name}</h2>
                                                    <p className='menuContent'>{`${e.content.slice(0, 20)}...`}</p>
                                                    <div className='menusPopupCardPriceContainer'>
                                                        <span className='menusPopupCardPriceDollar'>$</span>
                                                        <span className='menusPopupCardPrice'>{e.price}</span>
                                                    </div>
                                                    <div className='popupBtnContainer'>
                                                        <Link to={`/product/${e.slug}`}>
                                                            <button className='popupCta'>View Details</button>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                            : null
                                    }

                                </div>
                            )
                        })}
                </div>

            </div>

        </div >
    )
}
