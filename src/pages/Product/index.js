import React from 'react'
import { Header, Product } from '../../components'

export default function index() {
    const menuItem = [
        {
            name: "DOSAS",
            icon: "dosa",
            content: "Light, crispy crepes-made of rice and lentils – dairy free, gluten - free and delicious - served with two sauces and sambar chowder",
            item: [
                {
                    image: "../../assets/dosabg.jpg",
                    name: "Must-Have Masala",
                    content: "Potato mix seasoned with mustard seeds",
                    price: '20',
                    slug: "must-have-masala"
                },
                {
                    image: "../../assets/dosabg.jpg",
                    name: "Must-Have Masala",
                    content: "Potato mix seasoned with mustard seeds",
                    price: '20',
                    slug: "must-have-masala"
                },
                {
                    image: "../../assets/dosabg.jpg",
                    name: "Must-Have Masala",
                    content: "Potato mix seasoned with mustard seeds",
                    price: '20'
                },
                {
                    image: "../../assets/dosabg.jpg",
                    name: "Must-Have Masala",
                    content: "Potato mix seasoned with mustard seeds",
                    price: '20',
                    slug: "must-have-masala"
                },
                {
                    image: "../../assets/dosabg.jpg",
                    name: "Must-Have Masala",
                    content: "Potato mix seasoned with mustard seeds",
                    price: '20',
                    slug: "must-have-masala"
                },
                {
                    image: "../../assets/dosabg.jpg",
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
                    image: "../../assets/dosabg.jpg",
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
                    image: "../../assets/dosabg.jpg",
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
                    image: "../../assets/dosabg.jpg",
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
                    image: "../../assets/dosabg.jpg",
                    name: "Must-Have Masala",
                    content: "Potato mix seasoned with mustard seeds",
                    price: '20'
                }
            ]
        },

    ]
    return (
        <div>
            <Header />
            <Product />
        </div>
    )
}
