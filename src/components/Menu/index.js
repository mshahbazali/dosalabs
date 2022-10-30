import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
export default function Index() {
    const [selectMenu, setSelectMenu] = useState(0)
    const [popUpShow, setPopupShow] = useState()
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
            name: "SAUCES & DIPS",
            icon: "sausages",
            content: "4 oz, for those love a meal with their dip",
            item: [
                {
                    image: "p7",
                    name: "Must-Have Masala",
                    content: "Potato mix seasoned with mustard seeds",
                    price: '20'
                }
            ]
        },
        {
            name: "H30 SHOTS",
            icon: "h30",
            content: "4 oz, for those love a meal with their dip",
            item: [
                {
                    image: "p8",
                    name: "Must-Have Masala",
                    content: "Potato mix seasoned with mustard seeds",
                    price: '20'
                }
            ]
        },
        {
            name: "ANTI-DOSAS",
            icon: "antidosas",
            content: "Our select favorite alternatives",
            item: [
                {
                    image: "p9",
                    name: "Must-Have Masala",
                    content: "Potato mix seasoned with mustard seeds",
                    price: '20'
                }
            ]
        },
        {
            name: "Drinks",
            icon: "drinks",
            content: "Fluids – quench and electrolytic",
            item: [
                {
                    image: "p10",
                    name: "Must-Have Masala",
                    content: "Potato mix seasoned with mustard seeds",
                    price: '20'
                }
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
                                    <h2 className='menusCardName'>Must-Have Masala</h2>
                                    <p className='menusCardContent'>Potato mix seasoned
                                        with mustard seeds</p>
                                    <div className='menusCardPriceContainer'>
                                        <span className='menusCardPriceDollar'>$</span>
                                        <span className='menusCardPrice'>12</span>
                                    </div>
                                    {
                                        popUpShow == i ?
                                            < div className='popupContainer'>
                                                <img src={require("../../assets/popupbg.png")} alt="" className='popUpBg' />
                                                <div className='menuImageContainer'>
                                                    <img src={require("../../assets/dosabg.jpg")} alt="" className="menuImage" />
                                                </div>
                                                <div className='menuContentContainer' >
                                                    <h2 className='menuName'>Must-Have Masala</h2>
                                                    <p className='menuContent'>Potato mix seasoned
                                                        with mustard seeds</p>
                                                    <div className='menusPopupCardPriceContainer'>
                                                        <span className='menusPopupCardPriceDollar'>$</span>
                                                        <span className='menusPopupCardPrice'>12</span>
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
